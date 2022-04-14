import { BigNumber } from 'ethers';

let rpcId = 0;

export async function doRPC(_, { method, params }) {
    const rpcPayload = {
        jsonrpc: '2.0',
        id: ++rpcId,
        method,
        params,
    };
    const result = await this.$evmEndpoint.post('/ev