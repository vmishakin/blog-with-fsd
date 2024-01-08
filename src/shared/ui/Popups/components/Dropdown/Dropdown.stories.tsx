/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  return <Dropdown {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    },
  ],
};
