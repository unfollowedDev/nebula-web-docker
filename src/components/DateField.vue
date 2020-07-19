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
        // if true, the component will display plain-english