import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
  theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '<',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '<',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '<',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
};
