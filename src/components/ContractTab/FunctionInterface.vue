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
            default: 