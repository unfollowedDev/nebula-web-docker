<script>
export default {
    name: 'DemoIndex',
    methods: {
        toggleDarkMode() {
            this.$q.dark.toggle();
            localStorage.setItem('darkModeEnabled', this.$q.dark.isActive);
        },
    },
};
</script>

<template>
<div class="c-demos">
    <div class="row q-mb-sm">
        <div class="col u-flex--left text-white">
            <div class="text-h3">Component Demos</div>
            <q-btn
                flat
                standout
                class="q-mx-md"
                :icon="$q.dark.isActive ? 'fas fa-sun' : 'fas fa-moon'"
          