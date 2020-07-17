<script>
import { copyToClipboard } from 'quasar';

const icons = {
    copy: 'far fa-copy',
    success: 'fas fa-check',
};

export default {
    name: 'CopyButton',
    props: {
        text: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: '',
        },
        accompanyingText: {
            type: String,
            default: '',
        },
    },
    data: () => ({
        iconClass: icons.copy,
        hint: '',
    }),
    computed: {
        containerClasses() {
            const extraClass = this.accompanyingText ? 'c-copy-button--block' : '';
            return `c-copy-button ${extraClass}`;
        },
        iconClasses() {
