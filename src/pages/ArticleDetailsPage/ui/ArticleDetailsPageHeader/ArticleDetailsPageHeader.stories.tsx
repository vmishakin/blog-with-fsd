import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
  title: 'entities/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => {
  return <ArticleDetailsPageHeader {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
