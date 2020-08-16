<script>
import BaseTextInput from 'components/inputs/BaseTextInput';

export default {
    name: 'StringInput',
    components: {
        BaseTextInput,
    },
    emits: [
        'update:modelValue',
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
 