import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
  title: 'entities/ArticleDetailsComments',
  component: ArticleDetailsComments,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => {
  return <ArticleDetailsComments {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
