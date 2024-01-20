import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import { Button, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import s from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string
}

export const Code = ({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(s.Code, {}, [className])}>
      <Button onClick={onCopy} className={s.copyBtn} theme={ButtonTheme.CLEAR}>
        <Icon Svg={CopyIcon} isFilled={false} isStroked />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
};
