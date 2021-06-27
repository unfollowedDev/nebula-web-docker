import { WEI_PRECISION } from 'src/lib/utils';

/**
 * Launches a prompt in MetaMask to add a given token as a tracked token, allowing the user to view their balance of
 * that token at a glance from MetaMask
 *
 * @param {object}    $q - a quasar instance, given from within a component at this.$q
 * @param {string}    address - the address of the token contract
 * @param {string}    symbol - the token's ticker symbol, e.g. 'STLOS'
 * @param {string}    image - permalink url of the 