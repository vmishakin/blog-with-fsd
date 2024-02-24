import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtcileInfiniteList } from './ArtcileInfiniteList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'pages/ArtcileInfiniteList',
  component: ArtcileInfiniteList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArtcileInfiniteList>;

const Template: ComponentStory<typeof ArtcileInfiniteList> = (args) => {
  return <ArtcileInfiniteList {...args} />;
};

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({})];
Primary.args = {};
