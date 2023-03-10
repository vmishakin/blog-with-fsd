import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

export const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        {t('PROFILE PAGE')}
      </div>
    </DynamicModuleLoader>

  );
};
