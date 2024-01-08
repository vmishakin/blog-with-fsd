import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => {
  return <NotificationItem {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
