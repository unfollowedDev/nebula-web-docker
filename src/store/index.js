import { createStore } from 'vuex';

import login from 'src/store/login';
import general from 'src/store/general';
import evm from 'src/store/evm';
import { store } from 'quasar/wrappers';

/*
 * If not building with SSR mode, you can
 * directly expor