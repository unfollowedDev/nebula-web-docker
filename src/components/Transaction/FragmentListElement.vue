
<script>
import JsonViewer from 'vue-json-viewer';
import AddressField from 'components/AddressField';
import { formatWei } from 'src/lib/utils';
import { BigNumber } from 'ethers';

export default {
    name: 'FragmentListElement',
    components: {
        AddressField,
        JsonViewer,
    },
    props: {
        fragment: {
            type: Object,
            required: false,
        },
        rawFragment: {
            type: Object,
            required: true,