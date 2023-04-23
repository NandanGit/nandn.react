import { HTMLAttributes } from 'react';
import { allowedInputTypes, builtInValidatorTypes } from '../constants';

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
  type?: $InputType;
  value?: string;
  validators?: $Validators;

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

export type $Validator =
  | RegExp
  | ((value: string, ...args: any[]) => $ValidatorResult | boolean);

export interface iValidator {
  type: $BuiltInValidatorType | string;
  message?: string | ((value: string) => string);
  validator?: $Validator;
  args?: any[];
  options?: iValidatorOptions;
}
export type $Validators = ($BuiltInValidatorType | iValidator | RegExp)[];
