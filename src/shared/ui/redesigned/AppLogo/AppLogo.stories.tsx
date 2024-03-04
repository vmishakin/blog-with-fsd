import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLogo } from './AppLogo';

export default {
  title: 'entities/AppLogo',
  component: AppLogo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => {
  return <AppLogo {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
