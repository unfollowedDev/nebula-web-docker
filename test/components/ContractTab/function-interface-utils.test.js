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
         