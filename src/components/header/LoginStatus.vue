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
        pretty