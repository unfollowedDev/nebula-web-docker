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
            'q-banner': stubWithSlot('q-banner', ['action']),
            'q-card': stubWithSlot('q-card'),
            'q-card-section': stubWithSlot('q-card-section'),
            'q-card-actions': stubWithSlot('q-card-actions'),
            'q-dialog':  stubWithSlot('q-dialog'),
            'transaction-field': stubWithSlot('transaction-field'),
        },
    };
    const stlosContractInstanceMock = {
        previewDeposit: jest.fn(),
        previewRedeem: jest.fn(),
        ['depositTLOS()']: jest.fn(),
    };
    const defaultProps = {
        stlosContractInstance: { ...stlosContractInstanceMock },
        tlosBalance: oneHundredFiftyEthInWei,
        hasUnlockedTlos: false,
        unstakePeriodSeconds: 60,
        valueOfOneStlosInTlos: '1.23456789',
    };

    beforeEach(() => {
        jest.clearAllMocks();
        isLoggedInMock.mockImplementation(() => true);
    });

    it('should have the correct name', () => {
        expect(StakeForm.name).toBe('StakeForm');
    });

    it('should render correctly when the user is not logged in', async () => {
        isLoggedInMock.mockImplementation(() => false);
        const wrapper = shallowMount(StakeForm, {
            props:  { ...defaultProps },
            global: { ...globalMock   },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it('should render a banner when the user has unlocked TLOS', async () => {
        const wrapper = shallowMount(StakeForm, {
            props:  { ...defaultProps },
            