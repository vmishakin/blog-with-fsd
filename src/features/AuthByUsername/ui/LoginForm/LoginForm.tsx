import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import s from './LoginForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

interface LoginFormProps {
  onSuccess: () => void;
}

export const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <VStack gap="16" className={classNames(s.LoginForm, {}, [])}>
            <Text title={t('Authorization')} />
            {error && <Text text={t('Wrong password')} variant="error" />}
            <Input
              autofocus
              type="text"
              className={s.input}
              placeholder={t('Username')}
              onChange={onChangeUsername}
              value={username}
              autoComplete="username"
            />
            <Input
              type="text"
              className={s.input}
              placeholder={t('Password')}
              onChange={onChangePassword}
              value={password}
              autoComplete="password"
            />
            <Button
              className={s.loginBtn}
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t('Login')}
            </Button>
          </VStack>
        }
        off={
          <div className={s.LoginForm}>
            <TextDeprecated title={t('Authorization')} />
            {error && <TextDeprecated text={error} theme={TextTheme.ERROR} />}
            <Input
              autofocus
              placeholder={t('Username')}
              type="text"
              className={s.input}
              onChange={onChangeUsername}
              value={username}
            />
            <InputDeprecated
              placeholder={t('Password')}
              type="text"
              className={s.input}
              onChange={onChangePassword}
              value={password}
            />
            <ButtonDeprecated
              className={s.loginBtn}
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t('Login')}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  );
});
