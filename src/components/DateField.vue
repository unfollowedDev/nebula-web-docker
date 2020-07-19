<script>
import { getFormattedUtcOffset } from 'src/lib/utils';

const moment = require('moment');

export default {
    name: 'DateField',
    props: {
        epoch: {
            type: Number,
            required: true,
        },
        // if true, the component will display plain-english e.g. "3 minutes ago" on initial load; if false, it will
        // display long format e.g. "Jan 6, 2023 11:41:40 (UTC -05:00)"
        defaultToAge: {
            type: Boolean,
            default: true,
        },
        // a value of true or false will force the component to display plain-english age or date stamp respectively;
        // the default value of null will allow the component to toggle its