/*
The environment variables ares set based on the single variable `MAINNET=true`
(or absence thereof) in the root `.env` file. The following env vars are then assigned in
`quasar.config.js`.
*/

const sharedEnv = {
    NETWORK_PROTOCOL: 'https',
    NETWORK_PORT: 443,
    NETWORK_EVM_CONTRACT: 'eosio.evm',
};

const TESTNET = {
    ...sharedEnv,
    APP_NAME: 'Teloscan (testnet)',
    NETWORK_HOST: 'testnet.telos.net',
    NETWORK_CHAIN_ID:
      '1ea