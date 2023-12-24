import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ArtcileInfiniteList } from './ArtcileInfiniteList';

export default {
  title: 'entities/ArtcileInfiniteList',
  component: ArtcileInfiniteList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArtcileInfiniteList>;

const Template: ComponentStory<typeof ArtcileInfiniteList> = (args) => {
  return <ArtcileInfiniteList {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
