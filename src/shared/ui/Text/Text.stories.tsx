import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title example',
  text: 'Description Description Description Description Description Description ',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title example',
  text: 'Description Description Description Description Description Description ',
  theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title example',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Description Description Description Description Description Description ',
};

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
  title: 'Title example',
  text: 'Description Description Description Description Description Description ',
};
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOnlyTitle = Template.bind({});
DarkOnlyTitle.args = {
  title: 'Title example',
};
DarkOnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOnlyText = Template.bind({});
DarkOnlyText.args = {
  text: 'Description Description Description Description Description Description ',
};
DarkOnlyText.decorators = [ThemeDecorator(Theme.DARK)];
