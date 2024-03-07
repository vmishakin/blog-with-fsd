import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Avatar.module.scss';
import { AppImage } from '../../redesigned/AppImage';
import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

/**
 * @deprecated
 */
export const Avatar = ({ className, src, size = 100, alt, fallbackInverted }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const fallback = <Skeleton border="50%" width={size} height={size} />;
  const errorFallback = (
    <Icon Svg={UserIcon} width={size} height={size} inverted={fallbackInverted} />
  );

  return (
    <AppImage
      className={classNames(s.Avatar, {}, [className])}
      style={styles}
      src={src}
      alt={alt}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
};
