<script>
import { mapGetters, mapActions } from 'vuex';
import DateField from 'components/DateField';
import BlockField from 'components/BlockField';
import AddressField from 'components/AddressField';
import LogsViewer from 'components/Transaction/LogsViewer';
import InternalTxns from 'components/Transaction/InternalTxns';
import CopyButton from 'components/CopyButton';
import MethodField from 'components/MethodField';
import ERCTransferList from 'components/Transaction/ERCTransferList';
import ParameterList from 'components/Transaction/ParameterList';

import { BigNumber } from 'ethers';
import { WEI_PRECISION, formatWei, parseErrorMessage, getRouteWatcherForTabs } from 'src/lib/utils';
import { TRANSFER_SIGNATURES } from 'src/lib/abi/signature/transfer_signatures';

const tabs = {
    general: '#general',
    details: '#details',
    eventLog: '#eventlog',
    internal: '#internal',
};

// TODO: The get_transactions API doesn't format the internal transactions properly,
//  need to fix that before we try to decode them
export default {
    name: 'TransactionPage',
    components: {
        LogsViewer,
        InternalTxns,
        AddressField,
        BlockField,
        CopyButton,
        DateField,
        MethodField,
        ERCTransferList,
        ParameterList,
    },
    data() {
        return {
            hash: this.$route.params.hash,
            blockData: null,
            trxNotFound: false,
            errorMessage: null,
            trx: null,
            erc20_transfers: [],
            erc721_transfers: [],
            erc1155_transfers: [],
            params: [],
            tab: '#general',
            isContract: false,
            contract: null,
            parsedTransaction: null,
            methodTrx: null,
            showAge: true,
            showWei: false,
        };
    },
    computed: {
        ...mapGetters('evm', ['tlosPrice']),
    },
    watch: {
        '$route.params': {
            handler(newValue) {
                const { hash } = newValue;
                if (this.hash === hash) {
                    return;
                }

                this.resetTransaction();
                this.hash = hash;
                this.loadTransaction();
            },
            immediate: true,
        },
        $route: getRouteWatcherForTabs('transaction', tabs, tabs.general),
    },
    async mounted() {
        await this.loadTransaction();
    },
    async created() {
        this.fetchTlosPrice();
    },
    methods: {
        ...mapActions('evm', ['fetchTlosPrice']),
        formatWei,
        resetTransaction() {
            this.blockData = null;
            this.trx = null;
            this.tab = '#general';
            this.isContract = false;
            this.contract = null;
            this.parsedTransaction = null;
            this.methodTrx = null;
            this.erc20_transfers = [];
            this.erc721_transfers = [];
            this.erc1155_transfers = [];
            this.params = [];
        },
        async loadTransaction() {
            const trxResponse = await this.$evmEndpoint.get(
                `/v2/evm/get_transactions?hash=${this.hash}`,
            );
            if (trxResponse.data.transactions.length === 0) {
                this.trxNotFound = true;
                return;
            }
            this.trx = trxResponse.data.transactions[0];
            this.trx.value = BigNumber.from(this.trx.value.toLocaleString('fullwide', { useGrouping:false }));
            await this.loadContract();
            await this.loadTransfers();
            this.setErrorMessage();
        },
        async loadTransfers() {
            this.transfers = [];
            for (const log of this.trx.logs) {
                // ERC20, ERC721 & ERC1155 transfers (ERC721 & ERC20 have same first topic but ERC20 has 4 topics for
                // transfers, ERC20 has 3 log topics, ERC1155 has a different first topic)
                let sig = log.topics[0].substr(0, 10);
                if (TRANSFER_SIGNATURES.includes(sig)) {
                    let type = this.$contractManager.getTokenTypeFromLog(log);
                    let contract = await this.$contractManager.getContract(log.address, type);
                    if (typeof contract.token !== 'undefined' && contract.token !== null) {
                        let token = {
                            'symbol': contract.token.symbol,
                            'address': log.address,
                            name: contract.token.name,
                            'decimals': contract.token.decimals,
                        };
                        if (contract.token.type === 'erc721') {
                            let tokenId = BigNumber.from(log.topics[3]).toString();
                            if (contract.token.extensions?.metadata) {
                                try {
                                    token = await this.$contractManager.loadTokenMetadata(
                                        log.address,
                                        contract.token,
                                        tokenId,
                                    );
                                } catch (e) {
                                    console.error(`Could not retreive metadata for ${contract.address}: ${e.message}`);
                                    // notify the user
                                    this.$q.notify({
                                        message: this.$t(
                                            'pages.couldnt_retreive_metadata_for_address',
                                            { address: contract.address, message: e.message },
                                        ),
                                        color: 'negative',
                                        position: 'top',
                                        timeout: 5000,
                                    });
                                }
                            }
                            this.erc721_transfers.push({
                                'tokenId': tokenId,
                                'to': '0x' + log.topics[2].substr(log.topics[2].length - 40, 40),
                                'from': '0x' + log.topics[1].substr(log.topics[1].length - 40, 40),
                                'token': token,
                            });
                        } else if (contract.token.type === 'erc1155') {
                            let tokenId = BigNumber.from(log.data.substr(0, 66)).toString();
                            if (contract.token.extensions?.metadata) {
                                try {
                                    token = await this.$contractManager.loadTokenMetadata(
                                        log.address,
                                        contract.token,
                                        tokenId,
                                    );
                                } catch (e) {
                                    console.error(`Could not retreive metadata for ${contract.address}: ${e.message}`);
                                    // notify the user
                                    this.$q.notify({
                                        message: this.$t(
                                            'pages.couldnt_retreive_metadata_for_address',
                                            { address: contract.address, message: e.message },
                                        ),
                                        color: 'negative',
                                        position: 'top',
                                        timeout: 5000,
                                    });
                                }
                            }
                            this.erc1155_transfers.push({
                                'tokenId': tokenId,
                                'amount': BigNumber.from(log.data).toString(),
                                'to': '0x' + log.topics[3].substr(log.topics[3].length - 40, 40),
                                'from': '0x' + log.topics[2].substr(log.topics[2].length - 40, 40),
                                'token': token,
                            });
                        } else {
                            this.erc20_transfers.push({
                                'value': log.data,
                                'wei': BigNumber.from(log.data).toString(),
                                'to': '0x' + log.topics[2].substr(log.topics[2].length - 40, 40),
                                'from': '0x' + log.topics[1].substr(log.topics[1].length - 40, 40),
                                'token': token,
                            });
                        }
                    }
                }
            }
        },
        async loadContract() {
            if (this.trx.input_data === '0x') {
                return;
            }

            const contract = await this.$contractManager.getContract(this.trx.to);
            if (!contract) {
                return;
            }

            this.contract = contract;
            this.parsedTransaction = await this.contract.parseTransaction(this.trx.input_data);
            this.params = this.getFunctionParams();
            this.methodTrx = Object.assign(
                { parsedTransaction: this.parsedTransaction },
                this.trx,
            );
            this.isContract = true;
        },
        setErrorMessage() {
            if (this.trx.status !== 0) {
                return;
            }

            this.errorMessage = parseErrorMessage(this.trx.output);
        },
        getFunctionName() {
            if (this.parsedTransaction) {
                return this.parsedTransaction.name;
            }
