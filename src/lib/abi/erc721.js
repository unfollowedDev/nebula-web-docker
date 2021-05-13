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
        'type': 'address',
    }, { 'indexed': false, 'internalType': 'bool', 'name': 'approved', 'type': 'bool' }],
    'name': 'ApprovalForAll',
    'type': 'event',
}, {
    'anonymous': false,
    'inputs': [{
        'indexed': true,
        'internalType': 'address',
        'name': 'previousOwner',
        'type': 'address',
    }, { 'indexed': true, 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
    'name': 'OwnershipTransferred',
    'type': 'event',
}, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'string', 'name': 'baseURI', 'type': 'string' }],
    'name': 'SetBaseURI',
    'type': 'event',
}, {
    'anonymous': false,
    'inputs': [{
        'indexed': false,
        'internalType': 'uint256',
        'name': 'chainlinkFee',
        'type': 'uint256',
    }, { 'indexed': false, 'internalType': 'bytes32', 'name': 'chainlinkHash', 'type': 'bytes32' }],
    'name': 'SetChainlinkConfig',
    'type': 'event',
}, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'string', 'name': 'defaultURI', 'type': 'string' }],
    'name': 'SetDefaultURI',
    'type': 'event',
}, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'minter', 'type': 'address' }],
    'name': 'SetMinter',
    'type': 'event',
}, {
    'anonymous': false,
    'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'seed', 'type': 'uint256' }, {
        'indexed': false,
        'internalType': 'bytes32',
        'name': 'requestId',
        'type': 'bytes32',
    }],
    'name': 'SetRandomSeed',
    'type': 'event',
}, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'from', 'type': 'address' }, {
        'indexed': true,
        'internalType': 'address',
        'name': 'to',
        'type': 'address',
    }, { 'indexed': true, 'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256' }],
    'name': 'Transfer',
    'type': 'event',
}, {
    'inputs': [{ 'internalType': 'address', 'name': 'to', 'type': 'address' }, {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256',
    }],
    'name': 'approve',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
}, {
    'inputs': [{ 'internalType': 'address', 'name': 'owner', 'type': 'address' }],
    'name': 'balanceOf',
    'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
    'stateMutability': 'view',
    'type': 'function',
}, {
    'inputs': [],
    'name': 'baseURI',
    'outputs': [{ 'internalType': 'string', 'name': '', 'type': 'string' }],
    'stateMutability': 'view',
    'type': 'function',
}, {
    'inputs': [],
    'name': 'chainlinkFee',
    'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
    'stateMutab