import { memo } from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';
import {
  useScrollPosition,
  ScrollCondition,
} from '@/shared/lib/scroll/useScrollPosition';
import s from './ScrollToolbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ScrollToolbarProps {
  className?: string;
}

const conditionToShowScrollButton: ScrollCondition = ({ y }) => y > 300;

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
  const { className } = props;

  const showScrollButton = useScrollPosition(conditionToShowScrollButton);

  return (
    <VStack
      justify="center"
      align="center"
      fullWidth
      fullHeight
      className={className}
    >
      <ScrollToTopButton
        className={classNames(s.ScrollToolbar, { [s.show]: showScrollButton })}
      />
    </VStack>
  );
});
