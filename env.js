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
      '1eaa0824707c8c16bd25145493bf062aecddfeb56c736f6ba6397f3195f33c9f',
    NETWORK_EVM_RPC: 'https://testnet.telos.net/evm',
    NETWORK_EVM_ENDPOINT: 'https://testnet.telos.net',
    NETWORK_EVM_CHAIN_ID: 41,
    HYPERION_ENDPOINT: 'https://testnet.telos.net',
    NETWORK_EXPLORER: 'https://explorer-test.telos.net',
    TELOS_API_ENDPOINT: 'https://api-dev.telos.net/v1', //'http://localhost:9999/v1', //for local instance of api
    VERI