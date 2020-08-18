
<script>
import { integerSizeValidator, parseUintString } from 'components/ContractTab/function-interface-utils';
import { BigNumber } from 'ethers';

import BaseTextInput from 'components/inputs/BaseTextInput';

export default {
    name: 'UnsignedIntInput',
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
        // size in bits, in increments of 8 (i.e. bytes): // https://docs.soliditylang.org/en/latest/types.html#integers
        // e.g. a size of 64 produces a type === uint64
        size: {
            type: [Number, String],
            required: true,
            validator: size => integerSizeValidator(size, false),
        },
    },
    data: () => ({
        previousParsedValue: undefined,
    }),
    computed: {
        rules() {
            const maximum = +this.size === 0 ? '0' : BigNumber.from(2).pow(+this.size).sub(1);

            const errMessageInvalidInput = this.$t('components.inputs.invalid_unsigint');
            const errMessageTooLarge = this.$t('components.inputs.too_large_unsigint', { size: this.size });
            const errMessageNoNegative = this.$t('components.inputs.no_negative_unsigint', { size: this.size });

            return [
                val => val[0] !== '-' || errMessageNoNegative,
                val => (/^\d*$/.test(val) || val === '') || errMessageInvalidInput,
                val => BigNumber.from(val || 0).lte(maximum) || errMessageTooLarge,
            ];
        },
        shapedLabel() {
            return `${this.label} (uint${this.size})`;
        },
    },
    watch: {
        async size(newValue, oldValue) {
            if (newValue !== oldValue) {
                await this.$refs.input.resetValidation();