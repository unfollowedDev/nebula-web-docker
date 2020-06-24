<script lang="javascript">
import FunctionInterface from 'components/ContractTab/FunctionInterface';

import { sortAbiFunctionsByName } from 'src/lib/utils';

export default {
    name: 'ContractInterface',
    components: { FunctionInterface },
    props: {
        write: {
            type: Boolean,
            required: true,
        },
    },
    data: () => ({
        functions: [],
        contract: [],
    }),
    async mounted() {
        this.contract = await this.$contractManager.getContract(this.$route.params.address);
        let read = [];
        let write = [];
        this.contract.abi.forEach((a) => {
            if (a.type !==