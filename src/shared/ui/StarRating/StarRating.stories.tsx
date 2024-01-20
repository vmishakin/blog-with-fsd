import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { StarRating } from './StarRating';

export default {
  title: 'entities/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => {
  return <StarRating {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};