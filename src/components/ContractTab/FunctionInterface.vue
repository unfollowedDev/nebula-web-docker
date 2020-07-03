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
} from 'compone