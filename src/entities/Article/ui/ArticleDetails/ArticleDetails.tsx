import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import s from './ArticleDetails.module.scss';
import { renderArticleBlock } from './renderBlock';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

interface ArticleDetailsProps {
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);
  return (
    <>
      <HStack justify="center" max className={s.avatarWrapper}>
        <Avatar size={200} src={article?.img} className={s.avatar} />
      </HStack>
      <VStack gap="4" max data-testid="ArticleDetails.Info">
        <TextDeprecated
          className={s.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <HStack gap="8" className={s.articleInfo}>
          <Icon className={s.icon} Svg={EyeIcon} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>
        <HStack gap="8" className={s.articleInfo}>
          <Icon className={s.icon} Svg={CalendarIcon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);
  return (
    <>
      <Text title={article?.title} size="l" bold />
      <Text title={article?.subtitle} />
      <AppImage
        fallback={
          <SkeletonRedesigned width="100%" height={420} border="16px" />
        }
        src={article?.img}
        className={s.img}
      />
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

export const ArticleDetailsSkeleton = () => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });
  return (
    <VStack gap="16" max>
      <Skeleton className={s.avatar} width={200} height={200} border="50%" />
      <Skeleton className={s.title} width={300} height={32} />
      <Skeleton className={s.skeleton} width={600} height={24} />
      <Skeleton className={s.skeleton} width="100%" height={200} />
      <Skeleton className={s.skeleton} width="100%" height={200} />
    </VStack>
  );
};

export const ArticleDetails = memo(({ id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const error = useSelector(getArticleDetailsError);
  const isLoading = useSelector(getArticleDetailsIsLoading);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = <ArticleDetailsSkeleton />;
  } else if (error) {
    content = <Text align={TextAlign.CENTER} title={t('Article not found')} />;
  } else {
    content = (
      <ToggleFeatures
        name="isAppRedesigned"
        on={<Redesigned />}
        off={<Deprecated />}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack
        gap="16"
        max
        className={s.ArticleDetails}
        data-testid="ArticleDetails"
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
