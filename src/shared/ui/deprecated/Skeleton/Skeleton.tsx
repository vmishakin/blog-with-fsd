import { CSSProperties } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

/**
 * @deprecated
 */
export const Skeleton = ({
  className,
  height,
  width,
  border,
}: SkeletonProps) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div className={classNames(s.Skeleton, {}, [className])} style={styles} />
  );
};
