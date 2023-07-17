import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ArticleEditPage } from './ArticleEditPage';

export default {
  title: 'entities/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = () => {
  return <ArticleEditPage />;
};

export const Primary = Template.bind({});
Primary.args = {};
