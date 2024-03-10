import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleImageBlock } from '../../model/types/article';
import s from './ArticleImageBlockComponent.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
      <figure className={classNames('', {}, [className])}>
        <img src={block.src} className={s.img} alt={block.title} />
        <figcaption>
          <ToggleFeatures
            name="isAppRedesigned"
            on={<Text text={block.title} align="center" />}
            off={<TextDeprecated text={block.title} align={TextAlign.CENTER} />}
          />
        </figcaption>
      </figure>
    );
  },
);
