import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

const PrimaryArgs = {
  comment: {
    id: '1',
    text: 'hello',
    user: { id: '1', username: 'Grisha' },
  },
};

export const Primary = Template.bind({});
Primary.args = PrimaryArgs;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = PrimaryArgs;
PrimaryRedesigned.decorators = [
  FeaturesFlagsDecorator({ isAppRedesigned: true }),
];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
