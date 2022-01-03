<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';
import { BigNumber, ethers } from 'ethers';
import { formatWei, getRouteWatcherForTabs, WEI_PRECISION } from 'src/lib/utils';

import StakeForm from 'pages/staking/StakeForm';
import StakingStats from 'pages/staking/StakingStats';

const oneEth = ethers.utils.parseEther('1').toString();

const tabs = {
    stake: '#stake',
    unstake: '#unstake',
    withdraw: '#withdraw',
};

export default {
    name: 'StakingPage',
    components: {
        WithdrawPage: defineAsyncComponent(() => import('pages/staking/WithdrawPage.vue')),
        StakeForm,
        StakingStats,
        UnstakeForm: defineAsyncComponent(() => import('pages/staking/UnstakeForm')),
    },
    data: () => ({
        selectedTab: '#stake',
        stlosContract: null,
        escrowContract: null,
        stlosContractInstance: null,
        escrowContractInstance: null,
        valueOfOneStlosInTlos: null,
        tlosBalance: null,
        stlosBalance: null,
        stlosValue: null,
        totalUnstakedTlosBalance: null,
        unlockedTlosBalance: null,
        unstakePeriodSeconds: null,
        escrowDeposits: [],
    }),
    computed: {
        ...mapGetters('login', ['address', 'isLoggedIn', 'isNative']),
        showWithdrawNotification() {
            return BigNumber.from(this.unlockedTlosBalance ?? '0').gt('0');
        },
    },
    watch: {
        address: {
            immediate: true,
            async handler(address, oldAddress) {
                if (address !== oldAddress) {
                    await this.fetchContractInstances();
                    await this.fetchBalances();
                }
            },
        },
        $route: getRouteWatcherForTabs('staking', tabs, tabs.stake),
    },
    async created() {
        await this.fetchContracts();
        await this.fetchContractInstances();
    },
    methods: {
        async fetchBalances() {
            if (!this.address) {
                this.tlosBalance = null;
                this.stlosBalance = null;
                this.unlockedTlosBalance = null;
                this.totalUnstakedTlosBalance = null;
                this.stlosValue = null;
                this.escrowDeposits = [];
                this.valueOfOneStlosInTlos = null;

                return;
            }

            const tlosPromise = this.$providerManager.getEthersProvider().getBalance(this.address)
                .then((balanceBn) => {
                    this.tlosBalance = balanceBn.toString();
                })
                .catch(({ message }) => {
                    console.error(`Failed to fetch account: ${message}`);
                    this.$q.notify({
                        type: 'negative',
                        message: this.$t('page.staking.fetch_balance_error', { message }),
                    });
                    this.tlosBalance = null;
                });


            const stlosPromise = this.stlosContractInstance.balanceOf(this.address)
                .then((balanceBn) => {
                    this.stlosBalan