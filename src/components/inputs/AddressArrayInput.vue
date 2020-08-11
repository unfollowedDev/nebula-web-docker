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
        'valueParsed',
    ],
    props: {
        modelValue: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        // if size is undefined or -1, array size is unconstrained; else it is fixed-size (e.g. address[3])
        size: