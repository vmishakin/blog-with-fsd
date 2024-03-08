import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleType } from '../../../../entities/Article/model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleTypeTabsProps {
  className?: string;
  type: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = ({
  onChangeType,
  type,
  className,
}: ArticleTypeTabsProps) => {
  const { t } = useTranslation('article');

  const typeTabs = useMemo<TabItem<ArticleType>[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('All articles'),
      },
      {
        value: ArticleType.IT,
        content: t('It articles'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Economics articles'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Science articles'),
      },
    ],
    [t],
  );

  const onTabClick = useCallback(
    (tab: TabItem<ArticleType>) => {
      onChangeType(tab.value);
    },
    [onChangeType],
  );

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <Tabs
          direction="column"
          tabs={typeTabs}
          value={type}
          onTabClick={onTabClick}
          className={classNames('', {}, [className])}
        />
      }
      off={
        <TabsDeprecated
          tabs={typeTabs}
          value={type}
          onTabClick={onTabClick}
          className={classNames('', {}, [className])}
        />
      }
    />
  );
};
