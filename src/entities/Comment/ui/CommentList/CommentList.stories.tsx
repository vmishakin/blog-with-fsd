import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'hello',
      user: { id: '1', username: 'Grisha' },
    },
    {
      id: '2',
      text: 'hi',
      user: { id: '2', username: 'Vasya' },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
