
<script>
import MetamaskLogo from 'src/assets/metamask-fox.svg';
import WombatLogo from 'src/assets/wombat-logo.png';
import BraveBrowserLogo from 'src/assets/brave_lion.svg';
import detectEthereumProvider from '@metamask/detect-provider';
import { mapGetters, mapMutations } from 'vuex';
import { ethers } from 'ethers';
import { WEI_PRECISION } from 'src/lib/utils';
import { tlos } from 'src/lib/logos';

const LOGIN_EVM = 'evm';
const LOGIN_NATIVE = 'native';
const PROVIDER_WEB3_INJECTED = 'injectedWeb3';

export default {
    name: 'LoginModal',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        tab: 'web3',
        showLogin: false,
        metamaskLogo: MetamaskLogo,
        braveBrowserLogo: BraveBrowserLogo,
        isMobile: false,
        browserSupportsMetaMask: true,
        isBraveBrowser: false,
        isIOSMobile: false,
    }),
    emits: ['hide'],
    computed: {
        ...mapGetters('login', [
            'isLoggedIn',
            'isNative',
            'address',
            'nativeAccount',
        ]),
    },
    async mounted() {
        await this.detectProvider();
        this.detectMobile();

        const loginData = localStorage.getItem('loginData');
        if (!loginData) {
            return;
        }

        const loginObj = JSON.parse(loginData);
        if (loginObj.type === LOGIN_EVM) {
            const provider = this.getInjectedProvider();
            let checkProvider = new ethers.providers.Web3Provider(provider);
            const { chainId } = await checkProvider.getNetwork();
            if(loginObj.chain === chainId){
                switch (loginObj.provider) {
                case PROVIDER_WEB3_INJECTED:
                    this.injectedWeb3Login();
                    break;
                default:
                    console.error(`Unknown web3 login type: ${loginObj.provider}`);
                    this.$q.notify({
                        position: 'top',
                        message: this.$t('components.unknown_web3_login_type', { provider: loginObj.provider }),
                        timeout: 6000,
                    });
                    break;