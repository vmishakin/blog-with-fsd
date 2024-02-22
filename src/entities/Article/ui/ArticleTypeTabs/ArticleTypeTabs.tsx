import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
  className?: string;
  typeTabs: TabItem<ArticleType>[];
  type: ArticleType;
  onChangeType: (tab: TabItem<ArticleType>) => void;
}

export const ArticleTypeTabs = ({
  onChangeType,
  type,
  typeTabs,
  className,
}: ArticleTypeTabsProps) => {
  return (
    <Tabs<ArticleType>
      tabs={typeTabs}
      value={type}
      onTabClick={onChangeType}
      className={classNames('', {}, [className])}
    />
  );
};
