<script>
import messages from 'src/i18n';

export default {
    name: 'LanguageSwitcherModal',
    emits: ['hide'],
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        selectedLanguage: null,

        languageOptions: null,
    }),
    created() {
        this.selectedLanguage = {
            code: this.$i18n.locale,
            name: this.$t('locale.current_language_name'),
        };

        // languageOptions: [
        //     { code: 'en-us', name: 'English'},
        //     { code: 'es-es', name: 'Español'},
        //     ...
        // ],
        this.languageOptions = Object.keys(messages).map(key => ({
            code: key,
            name: messages[key].locale.current_language_name,
        }));
    },
    watch: {
        'selectedLanguage.code'(newCode, oldCode) {
            if (newCode !== oldCode) {
                this.changeLanguage();
            }
        },
    },
    methods: {
        changeLanguage() {
            this.$setLocale(this.selectedLanguage.code);
        },
    },
};
</script>

<template>
<q-dialog :model-value="show" @hide="() => $emit('hide')">
    <q-card rounded class="c-language-sw