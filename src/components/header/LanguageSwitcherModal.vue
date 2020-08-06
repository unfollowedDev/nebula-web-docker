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
            name: this.$t('locale.current_langu