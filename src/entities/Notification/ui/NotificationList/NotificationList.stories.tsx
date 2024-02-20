import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => {
  return <NotificationList {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({}),
];
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление 1',
          description: 'Произошло какое-то событие',
          userId: '1',
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Произошло какое-то событие',
          userId: '1',
          href: 'http://localhost:3000/admin',
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Произошло какое-то событие',
          userId: '1',
          href: 'http://localhost:3000/admin',
        },
      ],
    },
  ],
};
