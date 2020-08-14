<script>
export default {
    name: 'BooleanInput',
    emits: [
        'update:modelValue',
    ],
    props: {
        modelValue: {
            type: Boolean,
            default: null,
        },
        label: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        required: {
            type: [Boolean, String],
            default: false,
        },
        disabled: {
            type: [Boolean, String],
            default: false,
        },
        // added for compatibility with quasar input props
        disable: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: [Boolean, String],
            default: false,
        },
    },
    computed: {
        options() {
            return [
                'true',
                'false',
            ];
        },
        rules() {
            if (['required', true, 'true'].includes(this.required)) {
                return [
                    val => [true, false].includes(val) || this.$t('components.inputs.required'),
                ];
            }

            return [];
        },
        binding() {
            // 'required' case is handled in mergedRules; due to a bug, a defined for the required att