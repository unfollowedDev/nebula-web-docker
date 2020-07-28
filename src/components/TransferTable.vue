<script>
import AddressField from 'components/AddressField';
import DateField from 'components/DateField';
import TransactionField from 'components/TransactionField';
import { ethers, BigNumber } from 'ethers';
import { formatWei, getTopicHash } from 'src/lib/utils';
import DEFAULT_TOKEN_LOGO from 'src/assets/evm_logo.png';
import { TRANSFER_SIGNATURES } from 'src/lib/abi/signature/transfer_signatures';

const TRANSFER_EVENT_ERC20_SIGNATURE = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
const TRANSFER_EVENT_ERC1155_SIGNATURE = '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62';
const TOKEN_ID_TRUNCATE_LENGTH = 66;

export default {
    name: 'TransferTable',
    components: {
        TransactionField,
        DateField,
        AddressField,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        tokenType: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        initialPageSize: {
            type: Number,
            required: true,
        },
    },
    data() {
        // TODO: Add icon column and render it
        const columns = [
            {
                name: 'hash',
                label: '',
                align: 'left',
            },
            {
                name: 'date',
                label: '',
                align: 'left',
            },
            {
                name: 'from',
                label: '',
                align: 'left',
            },
            {
                name: 'to',
                label: '',
                align: 'left',
            },
            {
                name: 'value',
                label: '',
                align: 'left',
            }, {
                name: 'token',
                label: '',
                align: 'left',
            },
        ];


        return {
            rows: [],
            columns,
            transfers: [],
            pageSize: this.initialPageSize,
            total: null,
            loading: false,
            expectedTopicLength: 0,
            pagination: {
                sortBy: 'date',
                descending: true,
                page: 1,
                rowsPerPage: 10,
                rowsNumber: 0,
            },
            showDateAge: true,
            tokenList: {},
        };
    },
    async created() {
        // initialization of the translated texts
        this.columns[0].label = this.$t('components.tx_hash');
        this.columns[1].label = this.$t('components.date');
        this.columns[2].label = this.$t('components.from');
        this.columns[3].label = this.$t('components.to');
        this.columns[4].label = this.$t('components.value');
        this.columns[5].label = this.$t('components.token');
    },
    mounted() {
        switch (this.tokenType) {
        case 'erc20':
            this.expectedTopicLength = 3;
            break;
        case 'erc721':
            this.expectedTopicLength = 4;
            break;
        case 'erc1155':
            this.expectedTopicLength = 4;
            break;
        default:
            throw new Error(this.$t('components.unsupported_token_type', { tokenType: this.tokenType }));
        }

        this.onRequest({
            pagination: this.pagination,
        });
    },
    methods: {
        async onRequest(props) {
            this.loading = true;

            const { page, rowsPerPage, sortBy, descending } = props.pagination;

            let result = await this.$evmEndpoint.get(this.getPath(props));
            if (this.total === null) {
                this.pagination.rowsNumber = result.data.total.value;
            }

            this.pagination.page = page;
            this.pagination.rowsPerPage = rowsPerPage;
            this.pagination.sortBy = sortBy;
            this.pagination.descending = descending;

            let newTransfers = [];
            for (const transaction of result.data.transactions) {
                try {
                    for (const log of transaction.logs) {
                        if (this.expectedTopicLength !== log.topics.length) {
                            continue;
                        }

                        if (!TRANSFER_SIGNATURES.includes(log.topics[0].substr(0, 10).toLowerCase())) {
                            continue;
     