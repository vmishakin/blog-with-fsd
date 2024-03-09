import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  bold?: boolean;

  'data-testid'?: string;
}

type HeaderTag = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

export const Text = memo(
  ({
    className,
    title,
    text,
    variant = 'primary',
    align = 'left',
    size = 'm',
    bold,
    'data-testid': dataTestId = 'Text',
  }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    return (
      <div
        className={classNames(s.Text, { [s.bold]: bold }, [
          className,
          s[variant],
          s[align],
          s[size],
        ])}
      >
        {title && (
          <HeaderTag className={s.title} data-testid={`${dataTestId}.Header`}>
            {title}
          </HeaderTag>
        )}
        {text && (
          <p className={s.text} data-testid={`${dataTestId}.Paragraph`}>
            {text}
          </p>
        )}
      </div>
    );
  },
);
