import { classNames } from '@/shared/lib/classNames/classNames';
// import AppSvg from '@/shared/assets/icons/logo.png';
import s from './AppLogo.module.scss';
import { HStack } from '../Stack';
import { AppImage } from '../AppImage';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = ({ className, size = 100 }: AppLogoProps) => {
  return (
    <HStack max justify="center" className={classNames(s.appLogoWrapper, {}, [className])}>
      <div className={s.gradientBig} />
      <div className={s.gradientSmall} />
      <AppImage src="images/logo.png" width={size} height={size} className={s.AppLogo} />
    </HStack>
  );
};
