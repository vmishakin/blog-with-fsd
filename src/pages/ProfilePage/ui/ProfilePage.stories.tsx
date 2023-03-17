import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfilePage } from './ProfilePage';

const avatarUrl = 'https://kildall.com/wp/wp-content/uploads/2022/11/PawPaws.jpg';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  profile: {
    form: {
      first: 'vadya',
      lastname: 'programmer',
      age: 10,
      avatar: avatarUrl,
      city: 'NN',
      country: Country.Belarus,
      currency: Currency.EUR,
      username: 'admin',
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      first: 'vadya',
      lastname: 'programmer',
      age: 10,
      avatar: avatarUrl,
      city: 'NN',
      country: Country.Belarus,
      currency: Currency.EUR,
      username: 'admin',
    },
  },
})];
