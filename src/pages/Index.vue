<script>
import TransactionTable from 'components/TransactionTable';
import HomeInfo from 'components/HomeInfo.vue';
export default {
    name: 'IndexPage',
    components: {
        HomeInfo,
        TransactionTable,
    },
};
</script>

<template>
<q-page class="pageContainer">
    <div class="row justify-center q-py-lg">
        <div class="text-h4 text-primary title q-mt-xl bold">{{ $t('pages.telos_evm_explorer') }}</div>
    </div>
    <div cla