import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getRouteArticleDetails } from '@/shared/constants/router';
import { AppLink } from '@/shared/ui/AppLink';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import s from './ArticleListItem.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(
  ({ article, view, className, target }: ArticleListItemProps) => {
    const { t } = useTranslation('article');

    const types = <Text text={article.type.join(', ')} className={s.types} />;
    const views = (
      <>
        <Text text={String(article.views)} className={s.views} />
        <Icon Svg={EyeIcon} />
      </>
    );

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find((block) => {
        return block.type === ArticleBlockType.TEXT;
      }) as ArticleTextBlock;
      return (
        <div
          className={classNames(s.ArticleListItem, {}, [className, s[view]])}
          data-testid="ArticleListItem"
        >
          <Card className={s.card}>
            <div className={s.header}>
              <Avatar size={30} src={article.user.avatar} />
              <Text text={article.user.username} className={s.username} />
              <Text text={article.createdAt} className={s.date} />
            </div>
            <Text title={article.title} className={s.title} />
            {types}
            <AppImage
              fallback={<Skeleton width="100%" height={250} />}
              src={article.img}
              className={s.img}
              alt={article.title}
            />
            {textBlock && <ArticleTextBlockComponent block={textBlock} className={s.textBlock} />}
            <div className={s.footer}>
              <AppLink target={target} to={getRouteArticleDetails(article.id)}>
                <Button theme={ButtonTheme.OUTLINE}>{t('Read more')}</Button>
              </AppLink>
              {views}
            </div>
          </Card>
        </div>
      );
    }
    return (
      <AppLink
        data-testid="ArticleListItem"
        target={target}
        to={getRouteArticleDetails(article.id)}
        className={classNames(s.ArticleListItem, {}, [className, s[view]])}
      >
        <Card className={s.card}>
          <div className={s.imageWrapper}>
            <AppImage
              fallback={<Skeleton width={200} height={200} />}
              src={article.img}
              alt={article.title}
              className={s.img}
            />
            <Text text={article.createdAt} className={s.date} />
          </div>
          <div className={s.infoWrapper}>
            {types}
            {views}
          </div>
          <Text text={article.title} className={s.title} />
        </Card>
      </AppLink>
    );
  },
);
