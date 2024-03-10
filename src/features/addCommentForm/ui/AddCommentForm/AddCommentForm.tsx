import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/redesigned/Stack';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import {
  // getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import s from './AddCommentForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/classNames/classNames';

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

export interface AddCommentFormProps {
  onSendComment: (text: string) => void;
}

export const AddCommentForm = ({ onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  // const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <Card padding="24" border="round-border" max>
            <HStack
              data-testid="AddCommentForm"
              justify="between"
              max
              gap="16"
              className={classNames(s.AddCommentFormRedesigned)}
            >
              <Input
                className={s.input}
                placeholder={t('Введите текст комментария')}
                value={text}
                size="l"
                data-testid="AddCommentForm.Input"
                onChange={onCommentTextChange}
              />
              <Button
                data-testid="AddCommentForm.Button"
                onClick={onSendHandler}
              >
                {t('Отправить')}
              </Button>
            </HStack>
          </Card>
        }
        off={
          <HStack
            justify="between"
            max
            className={s.AddCommentForm}
            data-testid="AddCommentForm"
          >
            <InputDeprecated
              className={s.input}
              placeholder={t('Enter comment')}
              value={text}
              onChange={onCommentTextChange}
              data-testid="AddCommentForm.Input"
            />
            <ButtonDeprecated
              theme={ButtonTheme.OUTLINE}
              onClick={onSendHandler}
              data-testid="AddCommentForm.Button"
            >
              {t('Send')}
            </ButtonDeprecated>
          </HStack>
        }
      />
    </DynamicModuleLoader>
  );
};
