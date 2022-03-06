<script>
import { fetchStlosApy, formatUnstakePeriod } from 'pages/staking/staking-utils';
import { formatWei, WEI_PRECISION } from 'src/lib/utils';
import { mapGetters } from 'vuex';

export default {
    name: 'StakingStats',
    props: {
        stlosContractInstance: {
            type: Object,
            required: true,
        },
        stlosBalance: {