<!-- eslint-disable vue/no-unused-components -->
<script>
import { toChecksumAddress } from 'src/lib/utils';
import Web3 from 'web3';
import TransactionTable from 'components/TransactionTable';
import InternalTransactionTable from 'components/InternalTransactionTable';
import TransferTable from 'components/TransferTable';
import TokenList from 'components/TokenList';
import ConfirmationDialog from 'components/ConfirmationDialog';
import ContractTab from 'components/ContractTab/ContractTab';
import TransactionField from 'components/TransactionField';
import AddressField from 'components/AddressField';
import CopyButton from 'components/CopyButton';
import GenericContractInterface from 'components/ContractTab/GenericContractInterface.vue';

const web3 = new Web3();

const tabs = {
    transactions: '#transactions',
    int_transactions: '#int_transactions',
    erc20_transfers: '#erc20',
    erc721_transfers: '#erc721',
    erc1155_transfers: '#erc1155',
    tokens: '#tokens',
    contract: '#contract',
};

export default {
    name: 'AccountAddress',
    components: {
        AddressField,
        ConfirmationDialog,
        ContractTab,
        CopyButton,
        GenericContractInterface,
        TokenList,
        TransactionField,
        TransactionTable,
        InternalTransactionTable,
        TransferTable,
    },
    data() {
        return {
            accountLoading: false,
            title: '',
            telosAccount: null,
            balance: null,
            nonce: null,
            isContract: false,
            isVerified: null,
            contract: null,
            verificationDate: '',
            tab: '#transactions',
            tokens: null,
            confirmationDialog: false,
        };
    },
    computed: {
        address() {
            return this.$route.params?.address ?? '';
        },
    },
    watch: {
        address: {
            handler(newValue, oldValue) {
                if (newValue !== oldValue) {
                    const newAsChecksum = toChecksumAddress(newValue);
                    if (newAsChecksum !== newValue) {
                        this.$router.replace({ params: { address: newAsChecksum } });
                    }
                    this.loadAccount();
                }
            },
            immediate: true,
        },
        $route: {
            immediate: true,
            deep: true,
            async handler(newRoute, oldRoute = {}) {
                if (newRoute !== oldRoute) {
                    const { hash: newHash } = newRoute;

                    if (newRoute.name !== 'address' || !newHash) {
                        return;
                    }

                    if (this.accountLoading && newHash === tabs.contract) {
                        // wait for account to load; this.isContract will not be set immediately on first load
                        await new Promise(resolve => setTimeout(resolve, 750));
                    }

                    const tabHashes = Object.values(tabs);
                    const newHashIsInvalid =
                        !tabHashes.includes(newHash) ||
                        (newHash === tabs.contract && !this.isContract);

                    if (newHashIsInvalid) {
                        this.$router.replace({ hash: tabs.transactions });
                    }
                }
            },
        },
    },
    mounted() {
        this.loadAccount();
    },
    methods: {
        async loadAccount() {
            this.accountLoading = true;

            const account = await this.$evm.telos.getEthAccount(this.address);