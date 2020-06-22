<script>
import { mapActions } from 'vuex';
import { ethers } from 'ethers';

import CopyButton from 'components/CopyButton';

export default {
    name: 'AddressField',
    components: {
        CopyButton,
    },
    props: {
        address: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            default: '',
        },
        copy: {
            type: Boolean,
            default: false,
        },
        highlight: {
            type: Boolean,
            default: false,
        },
        truncate: {
            type: Number,
            default: 18,
        },
        isContractTrx: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        contract: null,
    }),
    watch: {
        address () {
   