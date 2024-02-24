import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from '@/entities/Article';

export default {
  title: 'features/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => {
  return <ArticleTypeTabs {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  type: ArticleType.ECONOMICS,
  typeTabs: [{
    value: ArticleType.ALL,
    content: 'All articles',
  },
  {
    value: ArticleType.IT,
    content: 'It articles',
  },
  {
    value: ArticleType.ECONOMICS,
    content: 'Economics articles',
  },
  {
    value: ArticleType.SCIENCE,
    content: 'Science articles',
  }],
};
