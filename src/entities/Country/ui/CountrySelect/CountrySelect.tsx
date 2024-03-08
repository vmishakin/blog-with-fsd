import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Country } from '../../model/country';
import { ToggleFeatures } from '@/shared/lib/features';

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
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
      (v: string) => {
        onChange?.(v as Country);
      },
      [onChange],
    );

    const props = {
      className,
      value,
      defaultValue: t('Country'),
      label: t('Country'),
      items: options,
      onChange: onChangeHandler,
      readonly,
      direction: 'topRight' as const,
    };

    return (
      <ToggleFeatures
        name="isAppRedesigned"
        on={<ListBox {...props} />}
        off={<ListBoxDeprecated {...props} />}
      />
    );
  },
);
