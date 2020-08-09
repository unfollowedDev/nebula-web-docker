<script>
import { copyToClipboard } from 'quasar';
import { mapGetters } from 'vuex';

export default {
    name: 'LoginStatus',
    emits: ['navigated'],
    computed: {
        ...mapGetters('login', [
            'isLoggedIn',
            'isNative',
            'address',
            'nativeAccount',
        ]),
        prettyIdentity() {
            if (!this.isLoggedIn) {
                return '';
            }

            if (this.isNative) {
                return this.nativeAccount;
            }

            return `0x...${this.address.slice(38, 42)}`;
        },
    },
    methods: {
        goToAddress() {
            this.$emit('navigated');
            this.$router.push(`/address/${this.address}`);
        },
        copy() {
            copyToClipboard(this.address);

            this.$q.notify({
                position: 'bottom',
                message: this.$t('components.header.address_copied'),
                color: 'green',
            });
        },
    },
};
</script>

<template>
<div v-if="isLoggedIn" class="c-login-status u-flex--center-y">
    <q-icon
 