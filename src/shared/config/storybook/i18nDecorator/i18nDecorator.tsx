import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18nForStorybook';

export const i18nextDecorator = (StoryComponent: Story) => {
  return (
    // here catches the suspense from components not yet ready (still loading translations)
    // alternative set useSuspense false on i18next.options.react when initializing i18next
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  );
};
