<script>
export default {
    name: 'BooleanInput',
    emits: [
        'update:modelValue',
    ],
    props: {
        modelValue: {
            type: Boolean,
            default: nul