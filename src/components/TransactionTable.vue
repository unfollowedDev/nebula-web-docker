
<script>
import AddressField from 'components/AddressField';
import BlockField from 'components/BlockField';
import DateField from 'components/DateField';
import TransactionField from 'components/TransactionField';
import MethodField from 'components/MethodField';
import { formatWei } from 'src/lib/utils';
import { TRANSFER_SIGNATURES } from 'src/lib/abi/signature/transfer_signatures';

export default {
    name: 'TransactionTable',
    components: {
        TransactionField,
        DateField,
        BlockField,
        AddressField,
        MethodField,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        filter: {
            type: Object,
            default: () => ({}),
        },
        initialPageSize: {
            type: Number,
            default: 1,
        },
    },
    data() {
        const columns = [
            {
                name: 'hash',
                label: '',
                align: 'left',
            },
            {
                name: 'block',
                label: '',
                align: 'left',
            },
            {
                name: 'date',
                label: '',
                align: 'left',
            },
            {
                name: 'method',
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
            },
        ];

        return {
            rows: [],
            columns,
            filterUpdated: false,
            transactions: [],
            pageSize: this.initialPageSize,
            total: null,
            loading: false,
            pagination: {
                sortBy: 'date',
                descending: true,
                page: 1,
                rowsPerPage: 10,
                rowsNumber: 0,
            },
            page_size_options: [10, 20, 50],
            showDateAge: true,
        };
    },
    async created() {
        // initialization of the translated texts
        this.columns[0].label = this.$t('components.tx_hash');
        this.columns[1].label = this.$t('components.block');
        this.columns[2].label = this.$t('components.date');
        this.columns[3].label = this.$t('components.method');
        this.columns[4].label = this.$t('components.from');
        this.columns[5].label = this.$t('components.to_interacted_with');
        this.columns[6].label = this.$t('components.value_transfer');
    },
    watch: {
        '$route.query.page': {
            handler(_pag) {
                let pag = _pag;
                let page = 1;
                let size = this.page_size_options[0];

                // we also allow to pass a single number as the page number
                if (typeof pag === 'number') {
                    page = pag;
                } else if (typeof pag === 'string') {
                    // we also allow to pass a string of two numbers: 'page,rowsPerPage'
                    const [p, s] = pag.split(',');
                    page = p;
                    size = s;
                }

                this.setPagination(page, size);
            },
            immediate: true,
        },
        filter: {
            async handler() {
                if (!this.filterUpdated) {
                    this.filterUpdated = true;
                    return;
                }
                await this.onRequest({ pagination: this.pagination });
            },
        },
    },
    methods: {
        setPagination(page, size) {
            if (page) {
                this.pagination.page = Number(page);
            }
            if (size) {