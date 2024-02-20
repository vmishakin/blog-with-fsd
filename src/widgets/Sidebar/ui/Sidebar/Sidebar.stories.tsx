import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from '@/shared/constants/theme';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  user:
  { authData: { id: '1', username: 'aboba' } },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user:
    { authData: { id: '1', username: 'aboba' } },
  })];

export const NoAuthData = Template.bind({});
NoAuthData.args = {};
NoAuthData.decorators = [StoreDecorator({
  user: { },
})];
