import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import {
  fetchArticleById,
} from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import s from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
  ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  const isLoading = useSelector(getArticleDetailsIsLoading);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            className={s.block}
            block={block}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            className={s.block}
            block={block}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            className={s.block}
            block={block}
          />
        );
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={s.avatar} width={200} height={200} border="50%" />
        <Skeleton className={s.title} width={300} height={32} />
        <Skeleton className={s.skeleton} width={600} height={24} />
        <Skeleton className={s.skeleton} width="100%" height={200} />
        <Skeleton className={s.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text align={TextAlign.CENTER} title={t('Article not found')} />
    );
  } else {
    content = (
      <>
        <div className={s.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={s.avatar} />

        </div>
        <Text
          className={s.title}
          title={article?.title}
          text={article?.subtitle}
        />
        <div className={s.articleInfo}>
          <Icon Svg={EyeIcon} className={s.icon} />
          <Text
            size={TextSize.L}
            text={article?.views.toString()}
          />
        </div>
        <div className={s.articleInfo}>
          <Icon Svg={CalendarIcon} className={s.icon} />
          <Text
            size={TextSize.L}
            text={article?.createdAt.toString()}
          />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={s.ArticleDetails}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
