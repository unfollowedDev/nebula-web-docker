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
                    value: this.formatWeiForStats(this.totalUnstakedTlosBalance),
                    tooltip: this.$t('pages.staking.tooltip_4', { unlockPeriod: this.unlockPeriodPretty }),
                },
            };
        },
        unlockPeriodPretty() {
            return formatUnstakePeriod(this.unstakePeriodSeconds, this.$t);
        },
    },
    async created() {
        await this.fetchGlobalStats();
    },
    methods: {
        async fetchGlobalStats() {
            try {
                this.stlosTvl = (await this.stlosContractInstance.totalAssets()).toString();
            } catch ({ message: tvlError }) {
                console.error(`Failed to fetch sTLOS TVL: ${tvlError}`);
                this.$q.notify({
                    type: 'negative',
                    message: this.$t('page.staking.fetch_stlos_tvl_error', { message: tvlError }),
                });
                this.stlosTvl = null;
                this.stlosApy = null;

                return;
            }

            if (this.stlosTvl === null) {
                return;
            }

            try {
                this.stlosApy = await fetchStlosApy(this.$telosApi);
            } catch ({ message: apyError }) {
                console.error(`Failed to fetch sTLOS APY: ${apyError}`);
                this.$q.notify({
                    type: 'negative',
                    message: this.$t('page.staking.fetch_stlos_apy_error', { message: apyError }),
                });
                this.stlosApy = null;
            }
        },
        formatWeiForStats(wei) {
            const format = val => formatWei(val, WEI_PRECISION, 3);

            return wei === null ? '--' : format(wei);
        },
    },
};
</script>

<template>
<div class="c-staking-stats">
    <div class="c-staking-stats__stats-container c-staking-stats__stats-container--global">
        <div
            v-for="{ label, value, unit, tooltip } in globalStats"
            :key="label"
            class="c-staking-stats__stat c-staking-stats__stat--global"
        >
            <div class="c-staking-stats__stat-label c-staking-stats__stat-label--global">
                {{ label }}
                <q-icon name="fas fa-info-circle" />
            </div>

            <div class="c-staking-stats__stat-value">
                {{ value }}
                <span class="c-staking-stats__stat-unit">{{ unit }}</span>
            </div>

            <q-tooltip
                :offset="[0, 56]"
                anchor="bottom middle"
                self="center middle"
            >
                <span class="u-text--pre">{{ tooltip }}</span>
            </q-tooltip>
        </div>
    </div>

    <q-card class="c-staking-stats__stats-container c-staking-stats__stats-container--personal">
        <div class="c-staking-stats__stat">
            <div class="c-staking-stats__stat-label">
                {{ personalStats.staked.label }}
                <q-icon name="fas fa-info-circle" />
            </div>

            <span class="c-staking-stats__stat-value">
                {{ personalStats.staked.value.stlos }}
                <span v-if="isLoggedIn" class="c-staking-stats__stat-unit c-staking-stats__stat-unit--personal">
                    sTLOS
                </span>
                &#32; <!-- breaking space - avoid whitespace collapsing when this long stat wraps-->
            </span>
            <span v-if="isLoggedIn" class="c-staking-stats__stat-value">
                <wbr>
                &#8776; <!-- ≈ -->
                {{ personalStats.staked.value.tlos }}
                <span class="c-staking-stats__stat-unit c-staking-stats__stat-unit--personal">TLOS</span>
            </span>

            <q-tooltip
                :offset="[0, 56]"
                anchor="bottom middle"
                self="center middle"
            >
                <span class="u-text--pre">{{ personalStats.staked.tooltip }}</span>
            </q-tooltip>
        </div>
        <div class="c-staking-stats__stat">
            <div class="c-staking-stats__stat-label">
                {{ personalStats.unstaked.label }}
                <q-icon name="fas fa-info-circle" />
            </div>

            <span class="c-staking-stats__stat-value">
                {{ personalStats.unstaked.value }}
                <span v-if="isLoggedIn" class="c-staking-stats__stat-u