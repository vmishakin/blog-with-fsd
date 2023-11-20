import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

export const ProfilePageHeader = () => {
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max justify="between">
      <Text title={t('Profile')} />
      {canEdit && readonly ? (
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onEdit}
        >
          {t('Edit')}
        </Button>
      ) : (
        <HStack gap="8">
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t('Cancel')}
          </Button>
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={onSave}
          >
            {t('Save')}
          </Button>
        </HStack>
      )}

    </HStack>
  );
};
