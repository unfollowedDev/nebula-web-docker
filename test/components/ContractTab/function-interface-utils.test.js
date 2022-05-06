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
            expect(parame