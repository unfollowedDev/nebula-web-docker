
<script>
import TransactionTable from 'components/TransactionTable';
import DateField from 'components/DateField';
import { mapActions } from 'vuex';

export default {
    name: 'BlockPage',
    components: { DateField, TransactionTable },
    data() {
        return {
            block: this.$route.params.block,
            blockData: null,
        };
    },
    mounted() {
        this.loadBlock();
    },
    watch: {
        '$route.params.block': {
            handler(newBlock) {
                if (this.block === newBlock) {
                    return;
                }
                this.block = newBlock;
                this.loadBlock();
            },
            immediate: true,
        },
    },
    methods: {
        ...mapActions('evm', ['doRPC']),
        async loadBlock() {
            const blockResponse = await this.doRPC({
                method: 'eth_getBlockByNumber',
                params: [`0x${parseInt(this.block).toString(16)}`, false],
            });
            this.blockData = blockResponse.result;
        },
        prevBlock() {
            this.resetBlockData();
            this.$router.push({ name: 'block', params: { block: parseInt(this.block) - 1 } });
        },
        nextBlock() {
            this.resetBlockData();
            this.$router.push({ name: 'block', params: { block: parseInt(this.block) + 1 } });
        },
        resetBlockData() {
            this.blockData = null;