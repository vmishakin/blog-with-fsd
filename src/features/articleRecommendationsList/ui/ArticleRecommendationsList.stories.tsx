import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
  title: 'entities/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = () => {
  return <ArticleRecommendationsList />;
};

export const Primary = Template.bind({});
Primary.args = {};
