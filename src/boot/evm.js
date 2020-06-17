import { boot } from 'quasar/wrappers';
import { TelosEvmApi } from '@telosnetwork/telosevm-js';
import ContractManager from 'src/lib/ContractManager';
import fetch from 'node-fetch';
import axios from 'axios';
import { ethers } from 'ethers';
import { markRaw } from 'vue';

const evm = new TelosEvmApi({
    endpoint: process.env.NETWORK_EVM_ENDPOINT,
    chainId: parseInt(process.env.NETWORK_EVM_CHAIN_ID),
    ethPrivateKeys: [],
    telosContract: process.env.NETWORK_EVM_CONTRACT,
    te