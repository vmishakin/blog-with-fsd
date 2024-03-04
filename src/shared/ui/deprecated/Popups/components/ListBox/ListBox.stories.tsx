import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 200 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => {
  return <ListBox {...args} />;
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'topLeft',
  value: '1',
  items: [
    { content: '12fsaosafjapsfsa', value: '1' },
    { content: 'asfgasgassagag', value: '2' },
  ],
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'topRight',
  value: '1',
  items: [
    { content: '12fsaosafjapsfsa', value: '1' },
    { content: 'asfgasgassagag', value: '2' },
  ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottomLeft',
  value: '1',
  items: [
    { content: '12fsaosafjapsfsa', value: '1' },
    { content: 'asfgasgassagag', value: '2' },
  ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottomRight',
  value: '1',
  items: [
    { content: '12fsaosafjapsfsa', value: '1' },
    { content: 'asfgasgassagag', value: '2' },
  ],
};
