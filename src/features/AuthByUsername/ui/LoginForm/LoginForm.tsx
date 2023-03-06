import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import s from './LoginForm.module.scss';

export const LoginForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPasswrod(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
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
      <Button
        className={s.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  );
});
