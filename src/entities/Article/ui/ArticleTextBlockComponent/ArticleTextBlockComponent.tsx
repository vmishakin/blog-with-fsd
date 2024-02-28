import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/article';
import s from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  ({ block, className }: ArticleTextBlockComponentProps) => {
    return (
      <div className={classNames(s.ArticleTextBlockComponent, {}, [className])}>
        {block.title && <Text title={block.title} className={s.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text key={paragraph} text={paragraph} className={s.paragraph} />
        ))}
      </div>
    );
  },
);
