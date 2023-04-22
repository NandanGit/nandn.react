import React, { FC } from 'react';
import { InputProps } from './types';

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Input: FC<InputProps> = ({ type = 'text', ...restInputProps }) => {
  return (
    <div>
      <input type={type} {...restInputProps} />
    </div>
  );
};
