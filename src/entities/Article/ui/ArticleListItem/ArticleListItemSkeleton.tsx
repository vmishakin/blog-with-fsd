import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import s from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';
import { toggleFeatures } from '@/shared/lib/features';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const mainClass = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => s.ArticleListItemRedesigned,
      off: () => s.ArticleListItem,
    });

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });
    const Card = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => CardRedesigned,
      off: () => CardDeprecated,
    });

    if (view === ArticleView.BIG) {
      return (
        <div className={classNames(mainClass, {}, [className, s[view]])}>
          <Card className={s.card} padding="24" max border="round-border">
            <div className={s.header}>
              <Skeleton border="50%" height={30} width={30} />
              <Skeleton width={150} height={16} className={s.username} />
              <Skeleton width={150} height={16} className={s.date} />
            </div>
            <Skeleton width={250} height={24} className={s.title} />
            <Skeleton height={200} className={s.img} />
            <div className={s.footer}>
              <Skeleton height={36} width={200} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div className={classNames(mainClass, {}, [className, s[view]])}>
        <Card className={s.card} padding="24" max border="round-border">
          <div className={s.imageWrapper}>
            <Skeleton width={200} height={200} className={s.img} />
          </div>
          <div className={s.infoWrapper}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton width={150} height={16} className={s.title} />
        </Card>
      </div>
    );
  },
);
