import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

const PrimaryArgs = {
  data: {
    first: 'vadya',
    lastname: 'programmer',
    age: 10,
    city: 'NN',
    country: Country.Belarus,
    currency: Currency.EUR,
    username: 'admin',
  },
};

export const Primary = Template.bind({});
Primary.args = PrimaryArgs;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = PrimaryArgs;
PrimaryRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};

export const isLoading = Template.bind({});
isLoading.args = {
  isLoading: true,
};
