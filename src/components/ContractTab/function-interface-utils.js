
import { BigNumber, ethers } from 'ethers';
import { defineAsyncComponent } from 'vue';

const asyncInputComponents = {
    AddressInput: defineAsyncComponent(() => import('components/inputs/AddressInput')),
    AddressArrayInput: defineAsyncComponent(() => import('components/inputs/AddressArrayInput')),
    BooleanArrayInput: defineAsyncComponent(() => import('components/inputs/BooleanArrayInput')),
    BooleanInput: defineAsyncComponent(() => import('components/inputs/BooleanInput')),
    BytesArrayInput: defineAsyncComponent(() => import('components/inputs/BytesArrayInput')),
    SignedIntInput: defineAsyncComponent(() => import('components/inputs/SignedIntInput')),
    StringArrayInput: defineAsyncComponent(() => import('components/inputs/StringArrayInput')),
    StringInput: defineAsyncComponent(() => import('components/inputs/StringInput')),
    UnsignedIntArrayInput: defineAsyncComponent(() => import('components/inputs/UnsignedIntArrayInput')),
    UnsignedIntInput: defineAsyncComponent(() => import('components/inputs/UnsignedIntInput')),
    SignedIntArrayInput: defineAsyncComponent(() => import('components/inputs/SignedIntArrayInput')),
};

/**
 * Given a function interface type, returns true iff that type is "address"
 * @param {string} type
 * @returns {boolean}
 */
function parameterTypeIsAddress(type) {
    return type === 'address';
}

/**
 * Given a function interface type, returns true iff that type is an array of addresses
 * @param {string} type
 * @returns {boolean}
 */
function parameterTypeIsAddressArray(type) {
    return /^address\[\d*]$/.test(type);
}

/**
 * Given a function interface type, returns true iff that type is boolean
 * @param {string} type
 * @returns {boolean}
 */
function parameterTypeIsBoolean(type) {
    return type === 'bool';
}

/**
 * Given a function interface type, returns true iff that type is a boolean array
 * @param {string} type
 * @returns {boolean}
 */
function parameterTypeIsBooleanArray(type) {
    return /^bool\[\d*]$/.test(type);
}

/**
 * Given a function interface type, returns true iff that type is bytes, e.g. bytes32 or bytes[]
 * @param {string} type
 * @returns {boolean}
 */
function parameterTypeIsBytes(type) {
    return /^bytes/.test(type);
}

/**
 * Given a function interface type, returns true iff that type is signed integer, e.g. int32
 * @param {string} type
 * @returns {boolean}
 */
function parameterTypeIsSignedInt(type) {
    return /^int\d+$/.test(type);
}

/**
 * Given a function interface type, returns true iff that type array of signed integers, e.g. int32[]
 * @param {string} type
 * @returns {boolean}
 */
function parameterTypeIsSignedIntArray(type) {
    return /^int\d+\[\d*]/.test(type);
}

/**
 * Given a function interface type, returns true iff that type is string
 * @param {string} type
 * @returns {boolean}
 */
function parameterTypeIsString(type) {
    return type === 'string';
}

/**
 * Given a function interface type, returns true iff that type is array of string
 * @param {string} type
 * @returns {boolean}
 */
function parameterTypeIsStringArray(type) {
    return /^string\[\d*]$/.test(type);
}

/**
 * Given a function interface type, returns true iff that type represents unsigned integer, e.g. uint32
 * @param {string} type
 * @returns {boolean}
 */
function parameterTypeIsUnsignedInt(type) {
    return /^uint\d+$/.test(type);
}

/**
 * Given a function interface type, returns true iff that type represents unsigned integer array, e.g. uint32[]
 * @param {string} type
 * @returns {boolean}
 */
function parameterTypeIsUnsignedIntArray(type) {
    return /^uint\d+\[\d*]$/.test(type);
}



/**
 * Given a function interface type, returns true iff that type represents an array of any kind, e.g. string[] or uint8[]
 * @param {string} type
 * @returns {boolean}
 */
function parameterIsArrayType(type) {
    return /\[\d*]$/.test(type) || parameterTypeIsBytes(type);
}

/**
 * Given a function interface type, returns true iff that type represents an integer, either signed or unsigned
 * @param {string} type
 * @returns {boolean}
 */
function parameterIsIntegerType(type) {
    return /int\d+$/.test(type);
}

/**
 * Validate integer-size props for input components, e.g. 256 for uint256
 *
 * @param {unknown} prop - the prop to be validated
 * @param {boolean} signed - whether the target integer is signed
 *
 * @return {boolean}
 */
function integerSizeValidator(prop, signed) {
    if (![true, false].includes(signed)) {
        throw 'Invalid parameter - "signed" must be boolean';
    }

    const propIsNumber = Number.isInteger(+prop);
    const propIs8Multiple = +prop % 8 === 0;

    const max = signed ? 128 : 256;
    const propIsInRange = +prop >= 8 && +prop <= max;

    return propIsNumber && propIs8Multiple && propIsInRange;
}


/**
 * Given a function interface input type (e.g. "uint256"), returns true iff the corresponding input component emits
 * new values via the valueParsed event. In these cases, the update:modelValue event (i.e. v-model binding) does not
 * reflect valid values entered by the user; rather, v-model only represents the user-entered string in the input.
 * As such, if this method returns true, only the parsed values given by valueParsed should be considered valid data