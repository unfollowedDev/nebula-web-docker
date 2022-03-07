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
            type: String,
            default: null,
        },
        stlosValue: {
            type: String,
            default: null,
        },
        totalUnstakedTlosBalance: {
            type: String,
            default: null,
        },
        unstakePeriodSeconds: {
            type: Number,
            default: null,
        },
    },
    data: () => ({
        stlosTvl: null,
        stlosApy: null,
    }),
    computed: {
        ...mapGetters('login', ['isLoggedIn']),
        globalStats() {
            return [{
                label: 'APY',
                value: this.stlosApy ?? '--',
                unit: '%',
                tooltip: this.$t('pages.staking.tooltip_1'),
            }, {
                label: 'TVL',
                value: this.formatWeiForStats(this.stlosTvl, true).replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
                unit: 'TLOS',
                tooltip: this.$t('pages.staking.tooltip_2'),
            }];
        },
        personalStats() {
            return {
                staked: {
                    label: this.$t('pages.staking.staked'),
                    value: {
                        stlos: this.formatWeiForStats(this.stlosBalance),
                        tlos: this.formatWeiForStats(this.stlosValue),
                    },
                    tooltip: this.$t('pages.staking.tooltip_3'),
                },
                unstaked: {
                    label: this.$t('pages.staking.unstaked'),
                    value: this.formatWeiForStats(this.totalUnstakedTlosBalan