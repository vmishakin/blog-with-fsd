import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => import('./ProfilePage')
  .then((m) => ({ default: m.ProfilePage })));
