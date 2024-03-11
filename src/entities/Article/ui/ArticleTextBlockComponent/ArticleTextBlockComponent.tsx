import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleTextBlock } from '../../model/types/article';
import s from './ArticleTextBlockComponent.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div className={classNames(s.ArticleTextBlockComponent, {}, [className])}>
        {block.title && (
          <ToggleFeatures
            name="isAppRedesigned"
            on={<Text title={block.title} className={s.title} />}
            off={<TextDeprecated title={block.title} className={s.title} />}
          />
        )}
        {block.paragraphs.map((paragraph) => (
          <ToggleFeatures
            name="isAppRedesigned"
            key={paragraph}
            on={
              <Text key={paragraph} text={paragraph} className={s.paragraph} />
            }
            off={
              <TextDeprecated
                key={paragraph}
                text={paragraph}
                className={s.paragraph}
              />
            }
          />
        ))}
      </div>
    );
  },
);
