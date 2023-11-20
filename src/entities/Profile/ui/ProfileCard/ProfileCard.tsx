import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import s from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (value: Currency) => void
  onChangeCountry?: (value: Country) => void
}

export const ProfileCard = ({
  data,
  error,
  isLoading,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
  readonly,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack justify="center" max className={classNames(s.ProfileCard, {}, [s.loading])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify="center" max className={classNames(s.ProfileCard, {}, [s.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Profile load error')}
          text={t('Try to reload page')}
        />
      </HStack>
    );
  }

  return (
    <VStack max gap="8" className={classNames(s.ProfileCard, { [s.readonly]: readonly })}>
      {data?.avatar && (
      <HStack justify="center" max className={s.avatarWrapper}>
        <Avatar src={data.avatar} size={150} />
      </HStack>
      )}
      <Input
        className={s.input}
        value={data?.first}
        readonly={readonly}
        placeholder={t('First name')}
        onChange={onChangeFirstname}
      />
      <Input
        className={s.input}
        value={data?.lastname}
        readonly={readonly}
        placeholder={t('Last name')}
        onChange={onChangeLastname}
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
};
