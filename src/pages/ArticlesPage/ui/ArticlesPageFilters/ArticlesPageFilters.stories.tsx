import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesPageFilters } from './ArticlesPageFilters';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'pages/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = () => {
  return <ArticlesPageFilters />;
};

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({})];
Primary.args = {};
