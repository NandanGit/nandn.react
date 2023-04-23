import {
  $BuiltInValidatorType,
  $ValidatorResult,
  builtInValidatorTypes,
} from '.';

export const isBuiltInValidatorType = (
  type: string
): type is $BuiltInValidatorType =>
  builtInValidatorTypes.includes(type as $BuiltInValidatorType);

export const isValidatorResult = (result: any): result is $ValidatorResult => {
  if (result.isValid === undefined) return false;
  if (result.isValid === true && result.message === undefined) return false;
  return true;
};
