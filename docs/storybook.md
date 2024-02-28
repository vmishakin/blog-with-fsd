# Storybook

В проекте для компонентов описываются стори-кейсы.
Запросы на сервер мокаются с помощью `storybook-addon-mock`.

Запустить сторибук можно командой `npm run storybook`

Файл со сторикейсами должен лежать рядом с компонентом с расширением .stories.tsx

Пример:

Сторикейс для компонента NotificationList.

```tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => {
  return <NotificationList {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
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
```
