import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import s from './LoginForm.module.scss';

export const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <div className={s.LoginForm}>
      <Input autofocus placeholder={t('Username')} type="text" className={s.input} />
      <Input placeholder={t('Password')} type="text" className={s.input} />
      <Button className={s.loginBtn}>
        {t('Login')}
      </Button>
    </div>
  );
};
