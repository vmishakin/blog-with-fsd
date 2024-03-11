import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './ProfileCardDeprecated.module.scss';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { TextAlign, TextTheme, Text } from '@/shared/ui/deprecated/Text';

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack
      justify="center"
      fullWidth
      className={classNames(s.ProfileCard, {}, [s.error])}
    >
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('Profile load error')}
        text={t('Try to reload page')}
      />
    </HStack>
  );
};

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
      justify="center"
      fullWidth
      className={classNames(s.ProfileCard, {}, [s.loading])}
    >
      <Loader />
    </HStack>
  );
};

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
  const {
    data,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
  } = props;
  const { t } = useTranslation('profile');

  return (
    <VStack
      fullWidth
      gap="8"
      className={classNames(s.ProfileCard, { [s.editing]: !readonly })}
    >
      {data?.avatar && (
        <HStack justify="center" fullWidth className={s.avatarWrapper}>
          <Avatar src={data.avatar} size={150} />
        </HStack>
      )}
      <Input
        className={s.input}
        value={data?.first}
        readonly={readonly}
        placeholder={t('First name')}
        onChange={onChangeFirstname}
        data-testid="ProfileCard.firstname"
      />
      <Input
        className={s.input}
        value={data?.lastname}
        readonly={readonly}
        placeholder={t('Last name')}
        onChange={onChangeLastname}
        data-testid="ProfileCard.lastname"
      />
      <Input
        className={s.input}
        value={data?.age}
        readonly={readonly}
        placeholder={t('Age')}
        onChange={onChangeAge}
      />
      <Input
        className={s.input}
        value={data?.city}
        readonly={readonly}
        placeholder={t('City')}
        onChange={onChangeCity}
      />
      <Input
        className={s.input}
        value={data?.username}
        readonly={readonly}
        placeholder={t('Username')}
        onChange={onChangeUsername}
      />
      <Input
        className={s.input}
        value={data?.avatar}
        readonly={readonly}
        placeholder={t('Avatar')}
        onChange={onChangeAvatar}
      />
      <CurrencySelect
        className={s.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={s.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
});
