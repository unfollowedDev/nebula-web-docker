<script>
import { mapGetters } from 'vuex';
import { BigNumber, ethers } from 'ethers';
import { Transaction } from '@ethereumjs/tx';

import {
    asyncInputComponents,
    getComponentForInputType,
    getExpectedArrayLengthFromParameterType,
    getIntegerBits,
    inputIsComplex,
    parameterIsArrayType,
    parameterIsIntegerType,
    parameterTypeIsBoolean,
    parameterTypeIsSignedIntArray,
    parameterTypeIsUnsignedIntArray,
} from 'components/ContractTab/function-interface-utils';

import TransactionField from 'components/TransactionField';


export default {
    name: 'FunctionInterface',
    components: {
        ...asyncInputComponents,
        TransactionField,
    },
    props: {
        contract: {
            type: Object,
            default: null,
        },
        abi: {
            type: Object,
            default: null,
        },
        runLabel: {
            type: String,
            default: null,
        },
    },
    data : () => {
        const decimalOptions = [{
            label: '18 - TLOS/ETH/etc..',
            value: 18,
        }, {
            label: '9 - Gwei',
            value: 9,
        }, {
            label: '8 - BTC',
            value: 8,
        }, {
            label: '0 - Wei',
            value: 0,
        }, {
            label: '',
            value: 'custom',
        }];

        return {
            loading: false,
            errorMessage: '',
            decimalOptions,
            result: null,
            hash: null,
            enterAmount: false,
            amountInput: 0,
            amountParam: null,
            amountDecimals: 0,
            selectDecimals: decimalOptions[0],
            customDecimals: 0,
            value: '0',
            inputModels: [],
            params: [],
            valueParam: {
                'name': 'value',
                'type': 'amount',
                'internalType': 'amount',
            },
        };
    },
    async created() {
        // initialization of the translated texts
        this.decimalOptions[4].label = this.$t('components.contract_tab.custom');
    },
    computed: {
        ...mapGetters('login', [
            'address',
            'isLoggedIn',
            'isNative',
            'nativeAccount',
        ]),
        inputComponents() {
            if (!Array.isArray(this.abi?.inputs)) {
                return [];
            }

            const getExtraBindingsForType = ({ type, name }, index) => {
                const label = `${name ? name : `Param ${index + 1}`}`;
                const extras = {};

                // represents integer bits (e.g. uint256) for int types, or array length for array types
                let size = undefined;
                if (parameterIsArrayType(type)) {
                    size = getExpectedArrayLengthFromParameterType(type);
                } else if (parameterIsIntegerType(type)) {
                    size = getIntegerBits(type);
                }

                const getIntSize = () => type.match(/\d+(?=\[)/)[0];

                if (parameterTypeIsUnsignedIntArray(type)) {
                    extras['uint-size'] = getIntSize();
                } else if (parameterTypeIsSignedIntArray(type)) {
                    extras['int-size'] = getIntSize();
                }

                const defaultModelValue = parameterTypeIsBoolean(type) ? null : '';

                return {
                    ...extras,
                    label,
                    size,
                    modelValue: this.inputModels[index] ?? defaultModelValue,
                    name: label.toLowerCase(),
                };
            };

            const handleModelValueChange = (type, index, value) => {
                this.inputModels[index] = value;

                if (!inputIsComplex(type)) {
                    this.params[index] = value;
                }
            };
            const handleValueParsed = (type, index, value) => {
                if (inputIsComplex(type)) {
                    this.params[index] = value;
                }
            };

            return this.abi.inputs.map((input, index) => ({
                bindings: getExtraBindingsForType(input, index),
                is: getComponentForInputType(input.type),
                inputType: input.type,
                handleModelValueChange: (type, index, value) => handleModelValueChange(type, index, value),
                handleValueParsed:      (type, index, value) => handleValueParsed(type, index, value),
            }));
        },
        enableRun() {
            return this.isLoggedIn || this.abi.stateMutability === 'view';
        },
        missingInputs() {
            if (this.abi.inputs.length !== this.params.length) {
                return true;
            }

            for (let i = 0; i < this.abi.inputs.length; i++) {
                if (['', null, undefined].includes(this.params[i])) {
                    return true;
                }
            }

            return false;
        },
    },
    methods: {
        showAmountDialog(param) {
            this.amountParam = param;
            this.amountDecimals = 18;
            this.enterAmount = true;
        },
        updateDecimals() {
            this.amountDecimals = this.selectDecimals.value === 'custom' ?
                this.customDecimals :
                this.selectDecimals.value;
        },
        setAmount() {
            const integerAmount = ethers.utils.parseUnits(this.amountInput + '', this.amountDecimals).toString();
            if (this.amountParam === 'value') {
                this.value = integerAmount;
            } else {
                this.params[this.amountParam] = integerAmount;
            }

            this.clearAmount();
        },
        clearAmount() {
            this.amountInput = 0;
        },
        async run() {
            this.loading = true;

            try {
                const opts = {};
                if (this.abi.stateMutability === 'payable') {
                    opts.value = this.value;
                }

                if (this.abi.stateMutability === 'view') {
                    return await this.runRead();
                }

                if (this.isNative) {
                    return await this.runNative(opts);
                }

                return await this.runEVM(opts);
            } catch (e) {
                this.result = e.message;
            }

            this.endLoading();
        },
        getFunctionAbi() {
            return `${this.abi.name}(${this.abi.inputs.map(i => i.type).join(',')})`;
        },
        async getEthersFunction(provider) {
            const contractInstance = await this.contract.getContractInstance(provider);
            retu