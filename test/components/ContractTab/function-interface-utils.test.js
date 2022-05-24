import {
    getExpectedArrayLengthFromParameterType,
    getIntegerBits,
    inputIsComplex,
    integerSizeValidator,
    parameterIsArrayType,
    parameterIsIntegerType,
    parameterTypeIsAddress,
    parameterTypeIsAddressArray,
    parameterTypeIsBoolean,
    parameterTypeIsBooleanArray,
    parameterTypeIsBytes,
    parameterTypeIsSignedInt,
    parameterTypeIsSignedIntArray,
    parameterTypeIsString,
    parameterTypeIsStringArray,
    parameterTypeIsUnsignedInt,
    parameterTypeIsUnsignedIntArray,
    parseAddressArrayString,
    parseAddressString,
    parseBooleanArrayString,
    parseBooleanString,
    parseBytesArrayString,
    parseSignedIntArrayString,
    parseSignedIntString,
    parseStringArrayString,
    parseUintArrayString,
    parseUintString,
} from 'components/ContractTab/function-interface-utils';
import { BigNumber } from 'ethers';

describe('function-interface-utils', () => {
    describe('parameterIsArrayType', () => {
        it('should only return true if passed an array type', () => {
            expect(parameterIsArrayType('address')).toBe(false);
            expect(parameterIsArrayType('bool'))   .toBe(false);
            expect(parameterIsArrayType('int128')) .toBe(false);
            expect(parameterIsArrayType('string')) .toBe(false);
            expect(parameterIsArrayType('uint256')).toBe(false);

            expect(parameterIsArrayType('address[1]')) .toBe(true);
            expect(parameterIsArrayType('address[]'))  .toBe(true);
            expect(parameterIsArrayType('bool[3]'))    .toBe(true);
            expect(parameterIsArrayType('bool[]'))     .toBe(true);
            expect(parameterIsArrayType('bytes32'))    .toBe(true);
            expect(parameterIsArrayType('bytes[]'))    .toBe(true);
            expect(parameterIsArrayType('int128[23]')) .toBe(true);
            expect(parameterIsArrayType('int128[]'))   .toBe(true);
            expect(parameterIsArrayType('string[100]')).toBe(true);
            expect(parameterIsArrayType('string[]'))   .toBe(true);
            expect(parameterIsArrayType('uint256[12]')).toBe(true);
            expect(parameterIsArrayType('uint256[]'))  .toBe(true);
        });
    });

    describe('parameterIsIntegerType', () => {
        it('should only return true if passed an integer type', () => {
            expect(parameterIsIntegerType('int128')) .toBe(true);
            expect(parameterIsIntegerType('int8'))   .toBe(true);
            expect(parameterIsIntegerType('uint16')) .toBe(true);
            expect(parameterIsIntegerType('uint256')).toBe(true);

            expect(parameterIsIntegerType('address'))    .toBe(false);
            expect(parameterIsIntegerType('bool'))       .toBe(false);
            expect(parameterIsIntegerType('string'))     .toBe(false);
            expect(parameterIsIntegerType('address[]'))  .toBe(false);
            expect(parameterIsIntegerType('address[1]')) .toBe(false);
            expect(parameterIsIntegerType('bool[]'))     .toBe(false);
            expect(parameterIsIntegerType('bool[3]'))    .toBe(false);
            expect(parameterIsIntegerType('string[]'))   .toBe(false);
            expect(parameterIsIntegerType('string[100]')).toBe(false);
            expect(parameterIsIntegerType('int128[]'))   .toBe(false);
            expect(parameterIsIntegerType('int128[23]')) .toBe(false);
            expect(parameterIsIntegerType('uint256[]'))  .toBe(false);
            expect(parameterIsIntegerType('uint256[12]')).toBe(false);
            expect(parameterIsIntegerType('bytes32'))    .toBe(false);
            expect(parameterIsIntegerType('bytes[]'))    .toBe(false);
        });
    });

    describe('getExpectedArrayLengthFromParameterType', () => {
        it('should return a length iff passed an array type with fixed length', () => {
            expect(getExpectedArrayLengthFromParameterType('address[1]')) .toBe(1);
            expect(getExpectedArrayLengthFromParameterType('bool[3]'))    .toBe(3);
            expect(getExpectedArrayLengthFromParameterType('string[100]')).toBe(100);
            expect(getExpectedArrayLengthFromParameterType('int128[23]')) .toBe(23);
            expect(getExpectedArrayLengthFromParameterType('uint256[12]')).toBe(12);
            expect(getExpectedArrayLengthFromParameterType('bytes32'))    .toBe(32);

            expect(getExpectedArrayLengthFromParameterType('address'))  .toBe(undefined);
            expect(getExpectedArrayLengthFromParameterType('bool'))     .toBe(undefined);
            expect(getExpectedArrayLengthFromParameterType('int128'))   .toBe(undefined);
            expect(getExpectedArrayLengthFromParameterType('string'))   .toBe(undefined);
            expect(getExpectedArrayLengthFromParameterType('uint256'))  .toBe(undefined);
            expect(getExpectedArrayLengthFromParameterType('address[]')).toBe(undefined);
            expect(getExpectedArrayLengthFromParameterType('bool[]'))   .toBe(undefined);
            expect(getExpectedArrayLengthFromParameterType('string[]')) .toBe(undefined);
            expect(getExpectedArrayLengthFromParameterType('int128[]')) .toBe(undefined);
            expect(getExpectedArrayLengthFromParameterType('uint256[]')).toBe(undefined);
            expect(getExpectedArrayLengthFromParameterType('bytes[]'))  .toBe(undefined);
        });
    });

    describe('getIntegerBits', () => {
        it('should return a number of bits iff passed an integer type', () => {
            expect(getIntegerBits('uint256')).toBe(256);
            expect(getIntegerBits('int128')) .toBe(128);
            expect(getIntegerBits('int8'))   .toBe(8);

            expect(getIntegerBits('address'))    .toBe(undefined);
            expect(getIntegerBits('bool'))       .toBe(undefined);
            expect(getIntegerBits('string'))     .toBe(undefined);
            expect(getIntegerBits('address[]'))  .toBe(undefined);
            expect(getIntegerBits('address[1]')) .toBe(undefined);
            expect(getIntegerBits('bool[]'))     .toBe(undefined);
            expect(getIntegerBits('bool[3]'))    .toBe(undefined);
            expect(getIntegerBits('string[]'))   .toBe(undefined);
            expect(getIntegerBits('string[100]')).toBe(undefined);
            expect(getIntegerBits('int128[]'))   .toBe(undefined);
            expect(getIntegerBits('int128[23]')) .toBe(undefined);
            expect(getIntegerBits('uint256[]'))  .toBe(undefined);
            expect(getIntegerBits('uint256[12]')).toBe(undefined);
            expect(getIntegerBits('bytes32'))    .toBe(undefined);
            expect(getIntegerBits('bytes[]'))    .toBe(undefined);
        });
    });

    describe('inputIsComplex', () => {
        // eslint-disable-next-line max-len
        it('should only return true for types for which the corresponding component emits the parsedValue event', () => {
            expect(inputIsComplex('string'))     .toBe(false);
            expect(inputIsComplex('bool'))       .toBe(false);

            expect(inputIsComplex('address'))    .toBe(true);
            expect(inputIsComplex('address[1]')) .toBe(true);
            expect(inputIsComplex('address[]'))  .toBe(true);
            expect(inputIsComplex('bool[3]'))    .toBe(true);
            expect(inputIsComplex('bool[]'))     .toBe(true);
            expect(inputIsComplex('bytes32'))    .toBe(true);
            expect(inputIsComplex('bytes[]'))    .to