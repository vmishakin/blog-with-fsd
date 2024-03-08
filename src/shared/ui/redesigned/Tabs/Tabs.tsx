import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import s from './Tabs.module.scss';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: TabItem<T>) => void;
  direction?: FlexDirection;
}

export const Tabs = <T extends string>({
  onTabClick,
  tabs,
  value,
  direction = 'row',
  className,
}: TabsProps<T>) => {
  const clickHandle = useCallback(
    (tab: TabItem<T>) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );

  return (
    <Flex
      direction={direction}
      gap="8"
      align="start"
      className={classNames(s.Tabs, {}, [className])}
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value;
        return (
          <Card
            variant={isSelected ? 'light' : 'normal'}
            className={classNames(s.tab, {
              [s.selected]: isSelected,
            })}
            key={tab.value}
            onClick={clickHandle(tab)}
            border="round-border"
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
};
