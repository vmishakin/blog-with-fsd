import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { ReducersMapObject } from '@reduxjs/toolkit';

export interface renderWithRouterOptions {
  route?: string;
  initialState?: PartialDeep<StateSchema>
  asyncReducers?: PartialDeep<ReducersMapObject<StateSchema>>
}

export function componentRender(
  component: ReactNode,
  { route = '/', initialState, asyncReducers }: renderWithRouterOptions = {},
) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
}
