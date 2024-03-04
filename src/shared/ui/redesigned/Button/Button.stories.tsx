import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: 'clear',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  variant: 'clear',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  variant: 'outline',
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
  children: 'Text',
  variant: 'outline',
  size: 'l',
};

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
  children: 'Text',
  variant: 'outline',
  size: 'l',
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  variant: 'outline',
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  children: '<',
  variant: 'outline',
  square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '<',
  variant: 'outline',
  square: true,
  size: 'l',
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '<',
  variant: 'outline',
  square: true,
  size: 'xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  variant: 'outline',
  disabled: true,
};
