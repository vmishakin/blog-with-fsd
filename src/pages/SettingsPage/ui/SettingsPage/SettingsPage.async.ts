import { lazy } from 'react';

export const SettingsPageLazy = lazy(() =>
  import('./SettingsPage').then((m) => ({ default: m.SettingsPage })),
);
