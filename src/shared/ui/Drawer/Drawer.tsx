import {
  ReactNode, memo, useCallback, useEffect,
} from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider/AnimationProvider';
import s from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { OverlaySpring } from '../OverlaySpring/OverlaySpring';

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const height = window.innerHeight - 100;

const DrawerContent = memo(({
  className, children, isOpen, onClose,
}: DrawerProps) => {
  const { theme } = useTheme();
  const { Spring, Gesture } = useAnimationLibs();
  const [{ y, opacity }, api] = Spring.useSpring(() => ({ y: height, opacity: 1 }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, opacity: 1, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      opacity: 0,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true, opacity: 1 - my / height });
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <div className={classNames(
        s.Drawer,
        {},
        [className, theme, 'app_drawer'],
      )}
      >
        <OverlaySpring onClick={() => close()} opacity={opacity} />
        <Spring.a.div
          className={s.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

export const Drawer = memo((props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
});
