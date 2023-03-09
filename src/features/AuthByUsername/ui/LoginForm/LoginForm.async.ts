import { lazy } from 'react';

export const LoginFormAsync = lazy(() => import('./LoginForm')
  .then((m) => ({ default: m.LoginForm })));
