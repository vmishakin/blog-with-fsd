import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import CopyIconNew from '@/shared/assets/icons/redesign/copy.svg';
import { Icon } from '../Icon/Icon';
import s from './Code.module.scss';
import { Button, ButtonTheme } from '../../deprecated/Button/Button';
import { ToggleFeatures } from '@/shared/lib/features';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <pre className={classNames(s.CodeRedesigned, {}, [className])}>
          <Icon
            clickable
            onClick={onCopy}
            className={s.copyBtn}
            Svg={CopyIconNew}
          />
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(s.Code, {}, [className])}>
          <Button
            onClick={onCopy}
            className={s.copyBtn}
            theme={ButtonTheme.CLEAR}
          >
            <CopyIcon className={s.copyIcon} />
          </Button>
          <code>{text}</code>
        </pre>
      }
    />
  );
});
