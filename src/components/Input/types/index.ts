import { HTMLAttributes } from 'react';
import { allowedInputTypes, builtInValidatorTypes } from '../constants';

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
  type?: $InputType;
  value?: string;
  validators?: $Validator[];

  // HTML Validators
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  // match?: RegExp;
}

export type $InputType = typeof allowedInputTypes[number];

export type $BuiltInValidatorType = typeof builtInValidatorTypes[number];
// export type $ValidatorType = string | $BuiltInValidatorType;
export interface iValidatorOptions {}
export interface iValidatorSuccessResult {
  isValid: true;
  message: string;
}
export interface iValidatorFailureResult {
  isValid: false;
  message?: string;
}
export type $ValidatorResult =
  | iValidatorSuccessResult
  | iValidatorFailureResult;

export type $ValidationFunction = (
  value: string,
  ...args: any[]
) => $ValidatorResult | boolean;

export interface iValidator {
  name: $BuiltInValidatorType | string;
  message?: string | ((value: string) => string);
  validator?: RegExp | $ValidationFunction;
  args?: any[];
  options?: iValidatorOptions;
}
export type $Validator = $BuiltInValidatorType | iValidator | RegExp;
