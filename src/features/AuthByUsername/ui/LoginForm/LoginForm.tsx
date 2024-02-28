import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { TextTheme, Text } from '@/shared/ui/Text';
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
      <div className={s.LoginForm}>
        <Text title={t('Authorization')} />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
          autofocus
          placeholder={t('Username')}
          type="text"
          className={s.input}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          placeholder={t('Password')}
          type="text"
          className={s.input}
          onChange={onChangePassword}
          value={password}
        />
        <Button className={s.loginBtn} onClick={onLoginClick} disabled={isLoading}>
          {t('Login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});
