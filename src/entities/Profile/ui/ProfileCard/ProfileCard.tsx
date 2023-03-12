import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import s from './ProfileCard.module.scss';

export const ProfileCard = () => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);

  return (
    <div className={s.ProfileCard}>
      <div className={s.header}>
        <Text title={t('Profile')} />
        <Button theme={ButtonTheme.OUTLINE} className={s.editBtn}>
          {t('Edit')}
        </Button>
      </div>
      <div className={s.data}>
        <Input
          className={s.input}
          value={data?.first}
          placeholder={t('First name')}
        />
        <Input
          className={s.input}
          value={data?.lastname}
          placeholder={t('Last name')}
        />
      </div>
    </div>
  );
};
