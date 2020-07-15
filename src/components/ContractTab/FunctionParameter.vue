<script>
export default {
    name: 'FunctionParameter',
    props: {
        abiParam: {
            type: Object,
            default: null,
        },
        position: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            label: null,
            value: null,
            typeIcon: null,
        };
