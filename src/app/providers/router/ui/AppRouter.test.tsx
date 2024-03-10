import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { AppRouter } from './AppRouter';
import {
  getRouteAbout,
  getRouteAdmin,
  getRouteProfile,
} from '@/shared/constants/router';
import { UserRole } from '@/entities/User';

describe('app/route/AppRouter', () => {
  test('Должен отрендериться', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Страница не найдена', async () => {
    componentRender(<AppRouter />, {
      route: '/this-route-doesnt-exists-123-123',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Редирект неавторизованного пользователя на главную', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ к закрытой странице для авторизованного юзера', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          authData: {
            id: '1',
          },
        },
      },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ запрещен (нет роли)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            id: '1',
          },
        },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ разрешен (есть роль админа)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            id: '1',
            roles: [UserRole.ADMIN],
          },
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
