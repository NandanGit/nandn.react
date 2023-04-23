import { HTMLAttributes } from 'react';

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

export const allowedInputTypes = [
  'text',
  'password',
  'email',
  'number',
  'date',
  'time',
  'datetime-local',
  'color',
  'range',
  // 'checkbox',
  // 'tel',
  // 'url',
  // 'search',
  // 'month',
  // 'week',
  // 'file',
] as const;

export type $InputType = typeof allowedInputTypes[number];

export const builtInValidatorTypes = [
  'isEmail',
  'isURL',
  'isNumeric',
  'isAlpha',
  'isAlphanumeric',
  'isBase64',
  'isCreditCard',
  'isCurrency',
  'isDecimal',
] as const;

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
