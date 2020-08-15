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
            // 'required' case is handled in mergedRules; due to a bug, a defined for the required attribute value
            // incorrectly causes the label to be always raised
            const required = undefined;
            const isRequired = ['required', true, 'true'].includes(this.required);
            const disable  = (this.disable  || ['disabled', true, 'true'].includes(this.disabled)) || undefined;
            const readonly = (this.readonly || ['readonly', true, 'true'].includes(this.readonly)) || undefined;

            return {
                ...this.$attrs,
                required,
                disable,
                readonly,
                label: `${this.label}  (bool)${isRequired ? '*' : ''}`,
            };
        },
    },
    watch: {
        async required(newValue, oldValue) {
            if (newValue !== oldValue) {
               