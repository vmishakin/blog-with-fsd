import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import ListIcon from '@/shared/assets/icons/redesign/burger.svg';
import TiledIcon from '@/shared/assets/icons/redesign/tile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { ArticleView } from '../../../../entities/Article/model/types/article';
import s from './ArticleViewSelector.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView | undefined;
  onViewClick: (newView: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
  {
    view: ArticleView.BIG,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

export const ArticleViewSelector = ({
  className,
  view,
  onViewClick,
}: ArticleViewSelectorProps) => {
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <Card
          className={classNames(s.ArticleViewSelectorRedesigned, {}, [
            className,
          ])}
          border="round-border"
        >
          <HStack gap="8">
            {viewTypes.map((viewType) => (
              <Icon
                clickable
                onClick={onClick(viewType.view)}
                Svg={viewType.icon}
                className={classNames('', {
                  [s.notSelected]: viewType.view !== view,
                })}
                key={viewType.view}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(s.ArticleViewSelector, {}, [className])}>
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              key={viewType.view}
              theme={ButtonTheme.CLEAR}
              onClick={onClick(viewType.view)}
            >
              <IconDeprecated
                width={24}
                height={24}
                Svg={viewType.icon}
                className={classNames('', {
                  [s.notSelected]: viewType.view !== view,
                })}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  );
};
