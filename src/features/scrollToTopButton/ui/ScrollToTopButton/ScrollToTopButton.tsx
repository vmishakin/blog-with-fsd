import { memo } from 'react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/redesign/circle-up.svg';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo(
  ({ className }: ScrollToTopButtonProps) => {
    const onClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <Icon
        className={className}
        Svg={CircleIcon}
        clickable
        onClick={onClick}
        width={32}
        height={32}
      />
    );
  },
);
