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
          