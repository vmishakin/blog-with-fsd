import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { Popover } from './Popover';

export default {
  title: 'entities/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => {
  return <Popover {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
