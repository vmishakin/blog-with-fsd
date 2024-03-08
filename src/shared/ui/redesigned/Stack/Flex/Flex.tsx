import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import s from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '24' | '32';

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps {
  children: ReactNode;
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
  start: s.justifyStart,
  center: s.justifyCenter,
  end: s.justifyEnd,
  between: s.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  center: s.alignCenter,
  end: s.alignEnd,
  start: s.alignStart,
};

const directionClasses: Record<FlexDirection, string> = {
  column: s.directionColumn,
  row: s.directionRow,
};

const gapClasses: Record<FlexGap, string> = {
  4: s.gap4,
  8: s.gap8,
  16: s.gap16,
  24: s.gap24,
  32: s.gap32,
};

export const Flex = ({
  children,
  className,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap,
  max,
  ...rest
}: FlexProps) => {
  const classes = [
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
    className,
  ];

  const mods: Mods = {
    [s.max]: max,
  };

  return (
    <div className={classNames(s.Flex, mods, classes)} {...rest}>
      {children}
    </div>
  );
};
