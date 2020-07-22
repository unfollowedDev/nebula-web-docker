<script>
import CopyButton from 'components/CopyButton';

export default {
    name: 'TransactionField',
    components:{
        CopyButton,
    },
    props: {
        transactionHash: {
            type: String,
            required: false,
        },
        copy: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<template>
<div class="transaction-field-container">
    <router-link :key="$route.path" :to="`/tx/${this.transactionHash}`">
        {{ transactionHash && transactionHash.slic