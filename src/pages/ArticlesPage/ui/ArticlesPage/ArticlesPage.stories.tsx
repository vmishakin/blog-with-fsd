import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesPage } from './ArticlesPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => {
  return <ArticlesPage />;
};

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({})];
Primary.args = {};
