import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => {
  return <NotificationItem {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  notification: {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
  },
};
Primary.decorators = [StoreDecorator({})];
