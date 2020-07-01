<script>
import ContractSource from 'components/ContractTab/ContractSource';
import ContractInterface from 'components/ContractTab/ContractInterface';
import CopyButton from 'components/CopyButton.vue';

export default {
    name: 'ContractTab',
    components: {
        ContractSource,
        ContractInterface,
        CopyButton,
    },
    props: {
        contract: {
            type: Object,
            default: () => ({}),
        },
    },
    data: () => ({
        source: true,
        write: false,
    }),
    computed: {
        abi() {
            const { abi } = this.contract;

            if (!Array.isArray(abi)) {
                return '';
            }

            return JSON.stringify(this.contract.abi);
        },
        codeSeleted() {
            return this.source === true;
        },
        readSelected() {
            return this.source === false && this.write === false;
        },
        writeSelected() {
            return this.source === false && this.w