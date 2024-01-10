import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: '100%',
  height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
  border: '50%',
  width: 100,
  height: 100,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  width: '100%',
  height: 200,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  border: '50%',
  width: 100,
  height: 100,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryMagneta = Template.bind({});
PrimaryMagneta.args = {
  width: '100%',
  height: 200,
};
PrimaryMagneta.decorators = [ThemeDecorator(Theme.MAGNETA)];

export const CircleMagneta = Template.bind({});
CircleMagneta.args = {
  border: '50%',
  width: 100,
  height: 100,
};
CircleMagneta.decorators = [ThemeDecorator(Theme.MAGNETA)];
