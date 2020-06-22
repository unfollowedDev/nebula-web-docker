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
            this.loadContract();
        },
    },
    async mounted() {
        await this.loadContract();
    },
    methods: {
        ...mapActions('evm', ['getContract']),
        getDisplay() {
            if(!this.address){
                return;
            }
            if (this.name) {
                return this.truncate > 0 && this.name.length > this.truncate ?
                    `${this.name.slice(0, this.truncate)}...` :
                    `${this.name}`;
            }

            if (this.contract && this.contract.getName()) {
                const name = this.contract.getName();
                if(name[0] === '0' && name[1] === 'x'){
                    return this.truncate > 0 ? `${this.address.slice(0, this.truncate)}...` : this.address;
                }