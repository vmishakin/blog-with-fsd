import { classNames } from '@/shared/lib/classNames/classNames';
import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider/AnimationProvider';
import s from './OverlaySpring.module.scss';

interface OverlaySpringProps {
  className?: string;
  onClick?: () => void;
  opacity?: import('@react-spring/web').SpringValue<number>;
}

export const OverlaySpring = ({ className, onClick, opacity }: OverlaySpringProps) => {
  const { Spring } = useAnimationLibs();

  return (
    <Spring.a.div
      onClick={onClick}
      className={classNames(s.OverlaySpring, {}, [className])}
      style={{ opacity }}
    />
  );
};
