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
            defa