import { shallowMount } from '@vue/test-utils';
import { BigNumber } from 'ethers';
import { createStore } from 'vuex';

import {
    flushTimersAndPromises,
    oneEthInWei,
    oneHundredFiftyEthInWei,
    onePointFiveEthInWei,
    stubWithSlot,
} from 'test/testing-helpers';

import BaseStakingForm from 'pages/staking/BaseStakingForm';
import StakeForm from 'pages/staking/StakeForm';


describe('StakeForm.vue', () => {
    let isLoggedInMock = jest.fn(() => true);
    const globalMock = {
        directives: {
            'close-popup': () => {},
        },
        plugins: [
            createStore({
                modules: {
                    login: {
                        namespaced: true,
                        getters: {
                            address: () => '0x'.concat('0'.repeat(40)),
                            isLoggedIn: isLoggedInMock,
                            isNative: () => false,
                        },
                    },
                },
            }),
        ],
        stubs: {
            'q-btn': true,
            'q-banner': stubWith