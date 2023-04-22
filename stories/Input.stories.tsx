import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from '../src';
import { InputProps } from '../src/components/Input/types';

const meta: Meta = {
  title: 'Input',
  component: Input,
  // argTypes: {
  //   children: {
  //     control: {
  //       type: 'text',
  //     },
  //   },
  // },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputProps> = args => <Input {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

// export const Text = Template.bind({});
// Text.args = {
//   type: 'text',
//   value: 'Hello, world',
// };

const createStory = (args, template = Template) => {
  const story = template.bind({});
  story.args = args;
  return story;
};

export const Text = createStory({
  type: 'text',
});

export const Password = createStory({
  type: 'password',
});

export const Email = createStory({
  type: 'email',
});

export const Number = createStory({
  type: 'number',
});

export const Date = createStory({
  type: 'date',
});

export const Time = createStory({
  type: 'time',
});

export const DatetimeLocal = createStory({
  type: 'datetime-local',
});

export const Color = createStory({
  type: 'color',
});

export const Range = createStory({
  type: 'range',
});

export const Checkbox = createStory({
  type: 'checkbox',
  value: 'on',
});

// export const Radio = createStory({
//   type: 'radio',
// });

// export const File = createStory({
//   type: 'file',
// });

// export const Disabled = createStory({
//   type: 'text',
//   disabled: true,
// });
