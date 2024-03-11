import { classNames } from '@/shared/lib/classNames/classNames';
import s from './AppLogo.module.scss';
import img from '@/shared/assets/logo.png';
import { HStack } from '../Stack';
import { AppImage } from '../AppImage';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = ({ className, size = 100 }: AppLogoProps) => {
  return (
    <HStack
      fullWidth
      justify="center"
      className={classNames(s.appLogoWrapper, {}, [className])}
    >
      <div className={s.gradientBig} />
      <div className={s.gradientSmall} />
      <AppImage src={img} width={size} height={size} className={s.AppLogo} />
    </HStack>
  );
};
