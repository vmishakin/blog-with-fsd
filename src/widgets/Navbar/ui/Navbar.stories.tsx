import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import { Notification } from '@/entities/Notification/testing';

const notification: Notification = {
  id: '1',
  description: 'Lorem ipsum',
  title: 'Warning!',
};

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];
Light.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
Dark.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};

export const Auth = Template.bind({});
Auth.args = {};
Auth.decorators = [StoreDecorator({
  user: { authData: { id: '1', username: 'Vasya' } },
})];
Auth.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        { ...notification, id: '1' },
        { ...notification, id: '2' },
        { ...notification, id: '3' },
        { ...notification, id: '4' },
        { ...notification, id: '5' },
      ],
    },
  ],
};
