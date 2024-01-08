import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups/components/ListBox/ListBox';
import { Country } from '../../model/country';

const options = [
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Eritrea, content: Country.Eritrea },
];
interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect = memo(
  ({
    className, value, onChange, readonly,
  }: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
      (v: string) => {
        onChange?.(v as Country);
      },
      [onChange],
    );

    return (
      <ListBox
        label={t('Country')}
        value={value}
        items={options}
        onChange={onChangeHandler}
        defaultValue={t('Country')}
        readonly={readonly}
        className={className}
        direction="topRight"
      />
    );
  },
);
