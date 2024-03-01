import { Theme } from '@/shared/constants/theme';

interface _JsonSettings {
  theme: Theme;
  isFirstVisist: boolean;
  settingsPageHasBeenOpened: boolean;
}

export type JsonSettings = Partial<_JsonSettings>;
