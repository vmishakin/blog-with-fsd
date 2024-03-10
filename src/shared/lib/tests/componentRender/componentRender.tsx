import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { Theme } from '@/shared/constants/theme';
// eslint-disable-next-line fsd-tools-mishakin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
// eslint-disable-next-line fsd-tools-mishakin/layer-imports
import '@/app/styles/index.scss';

export interface renderWithRouterOptions {
  route?: string;
  initialState?: PartialDeep<StateSchema>;
  asyncReducers?: PartialDeep<ReducersMapObject<StateSchema>>;
  theme?: Theme;
}

interface TestProviderProps {
  children: ReactNode;
  options?: renderWithRouterOptions;
}

export function TestProvider(props: TestProviderProps) {
  const {
    children,
    options: {
      route = '/',
      initialState,
      asyncReducers,
      theme = Theme.LIGHT,
    } = {},
  } = props;
  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}

export function componentRender(
  component: ReactNode,
  options?: renderWithRouterOptions,
) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
