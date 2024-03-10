import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import s from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';

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

    if (view === ArticleView.BIG) {
      const cardContent = (
        <>
          <div className={s.header}>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton
              width={150}
              height={16}
              className={s.username}
              border="32px"
            />
            <Skeleton
              width={150}
              height={16}
              className={s.date}
              border="32px"
            />
          </div>
          <Skeleton width={250} height={24} className={s.title} border="32px" />
          <Skeleton height={400} className={s.img} border="32px" />
          <div className={s.footer}>
            <Skeleton height={36} width={200} border="32px" />
          </div>
        </>
      );

      return (
        <div className={classNames(mainClass, {}, [className, s[view]])}>
          <ToggleFeatures
            name="isAppRedesigned"
            on={
              <CardRedesigned
                border="round-border"
                padding="16"
                className={s.card}
              >
                {cardContent}
              </CardRedesigned>
            }
            off={
              <CardDeprecated className={s.card}>{cardContent}</CardDeprecated>
            }
          />
        </div>
      );
    }

    return (
      <div className={classNames(mainClass, {}, [className, s[view]])}>
        <ToggleFeatures
          name="isAppRedesigned"
          on={
            <CardRedesigned border="round-border" className={s.card}>
              <VStack gap="16">
                <Skeleton
                  width="100%"
                  height={150}
                  border="32px"
                  className={s.img}
                />
                <Skeleton width={150} height={24} border="32px" />
              </VStack>

              <div className={s.infoWrapper}>
                <Skeleton width={220} height={16} border="32px" />
                <Skeleton
                  width={100}
                  height={32}
                  className={s.title}
                  border="32px"
                />
              </div>
            </CardRedesigned>
          }
          off={
            <CardDeprecated className={s.card}>
              <div className={s.imageWrapper}>
                <Skeleton width={200} height={200} className={s.img} />
              </div>
              <div className={s.infoWrapper}>
                <Skeleton width={130} height={16} />
              </div>
              <Skeleton width={150} height={16} className={s.title} />
            </CardDeprecated>
          }
        />
      </div>
    );
  },
);
