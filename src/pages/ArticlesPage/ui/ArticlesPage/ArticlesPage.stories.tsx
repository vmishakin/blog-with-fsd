// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { ArticlesPage } from './ArticlesPage';
// import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
// import { ARTICLES_MOCK } from '../../model/mocks/articles.mock';

// export default {
//   title: 'pages/ArticlesPage',
//   component: ArticlesPage,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof ArticlesPage>;

// const Template: ComponentStory<typeof ArticlesPage> = () => {
//   return <ArticlesPage />;
// };

// export const Primary = Template.bind({});
// Primary.decorators = [StoreDecorator({})];
// Primary.args = {};
// Primary.parameters = {
//   mockData: [
//     {
//       url: `${__API__}/articles?_expand=user&_limit=0&_page=2&_sort=title&_order=asc&q=`,
//       method: 'GET',
//       status: 200,
//       response: ARTICLES_MOCK,
//     },
//   ],
// };
export {};
