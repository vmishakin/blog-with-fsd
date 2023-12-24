import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { EditableProfileCard } from './EditableProfileCard';

export default {
  title: 'feature/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => {
  return <EditableProfileCard {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
