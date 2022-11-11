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
                        nam