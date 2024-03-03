import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import AppSvg from '@/shared/assets/icons/logo.svg';
// import AppSvg from '@/shared/assets/icons/copy-20-20.svg';
import s from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = ({ className }: AppLogoProps) => {
  return (
    <HStack max justify="center" className={classNames(s.appLogoWrapper, {}, [className])}>
      {/* <div className={s.gradientBig} />
      <div className={s.gradientSmall} /> */}
      <AppSvg className={s.AppLogo} />
    </HStack>
  );
};
