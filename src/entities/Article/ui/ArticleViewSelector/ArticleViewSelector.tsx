import { ArticleView } from 'entities/Article/model/types/article';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import s from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  view: ArticleView | undefined
  onViewClick: (newView: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.BIG,
    icon: TiledIcon,
  },
  {
    view: ArticleView.SMALL,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = ({ view, onViewClick }: ArticleViewSelectorProps) => {
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(s.ArticleViewSelector)}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            fill={viewType.view === view}
            className={classNames('', { [s.notSelected]: viewType.view !== view })}
          />
        </Button>
      ))}
    </div>
  );
};
