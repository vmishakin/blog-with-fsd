import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { Text } from '../Text/Text';
import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <Text title="test" text="text text" />,
};
