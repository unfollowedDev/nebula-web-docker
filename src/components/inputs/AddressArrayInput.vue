<script>
import { parseAddressArrayString } from 'components/ContractTab/function-interface-utils';

import BaseTextInput from 'components/inputs/BaseTextInput';

export default {
    name: 'AddressArrayInput',
    components: {
        BaseTextInput,
    },
    emits: [
        'update:modelValue',
    