import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
  title: 'feature/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = () => {
  return <EditableProfileCardHeader />;
};

export const Primary = Template.bind({});
Primary.args = {};
