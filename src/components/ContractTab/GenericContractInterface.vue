
<script>
import JsonViewer from 'vue-json-viewer';

import Contract from 'src/lib/Contract';
import { erc721Abi } from 'src/lib/abi';
import erc20Abi from 'erc-20-abi';

import { sortAbiFunctionsByName } from 'src/lib/utils';

import FunctionInterface from 'components/ContractTab/FunctionInterface.vue';

export default {
    name: 'GenericContractInterface',
    components: {
        FunctionInterface,
        JsonViewer,
    },
    data: () => ({
        file_model: null,
        address: null,
        contract: null,
        functions: null,
        displayWriteFunctions: false,
        customAbiDefinition: '',
        selectedAbi: null,
        abiOptions: {
            erc20: 'erc20',
            erc721: 'erc721',
            custom: 'custom',
        },
    }),
    computed: {
        showAbiFunctions() {
            return Object.values(this.abiOptions).includes(this.selectedAbi) &&
                ['read', 'write']
                    .some(access => (this.functions?.[access] ?? [])
                        .some(member => member.type === 'function'));
        },
        customAbiIsValidJSON() {
            try {
                return !!JSON.parse(this.customAbiDefinition);
            } catch {
                return false;
            }
        },
    },
    watch: {
        selectedAbi(newValue, oldValue) {
            if (oldValue !== newValue) {
                this.formatAbiFunctionLists();
                this.displayWriteFunctions = false;
            }
        },
        customAbiDefinition(newValue, oldValue) {
            console.log('Watching customAbiDefinition:', [newValue, oldValue]);
            if (oldValue !== newValue && this.customAbiIsValidJSON) {
                this.formatAbiFunctionLists();
                this.displayWriteFunctions = false;
            }
            // if we detect any change in the custom abi definition, we should reset the file_model
            if (oldValue && oldValue !== newValue) {
                this.file_model = null;
            }
            // if newValue is empty, we should reset
            if (!newValue) {
                this.reset();