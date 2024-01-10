import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@/app/styles/index.scss';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
  title: 'entities/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => {
  return <ArticleSortSelector {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
