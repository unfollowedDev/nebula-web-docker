export const erc721Abi = [{
    'inputs': [{
        'internalType': 'string',
        'name': '_name',
        'type': 'string',
    }, { 'internalType': 'string', 'name': '_symbol', 'type': 'string' }, {
        'internalType': 'uint256',
        'name': '_maxTokens',
        'type': 'uint256',
    }, { 'internalType': 'address', 'name': '_linkToken', 'type': 'address' }, {
        'internalType': 'address',
        'name': '_chainlinkCoordinator',
        'type': 'address',
    }, { 'internalType': 'uint256', 'name': '_chainlinkFee', 'type': 'uint256' }, {
        'internalType': 'bytes32',
        'name': '_chainlinkHash',
        'type': 'bytes32',
    }],
    'stateMutability': 'nonpayable',
    'type': 'constructor',
}, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'owner', 'type': 'address' }, {
        'indexed': true,
        'internalType': 'address',
        'name': 'approved',
        'type': 'address',
    }, { 'indexed': true, 'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256' }],
    'name': 'Approval',
    'type': 'event',
}, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'owner', 'type': 'address' }, {
        'indexed': true,
        'internalType': 'address',
        'name': 'operator',
        'type': 'addr