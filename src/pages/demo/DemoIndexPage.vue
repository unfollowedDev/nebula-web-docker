<script>
export default {
    name: 'DemoIndex',
    methods: {
        toggleDarkMode() {
            this.$q.dark.toggle();
            localStorage.setItem('darkModeEnabled', this.$q.dark.isActive);
        },