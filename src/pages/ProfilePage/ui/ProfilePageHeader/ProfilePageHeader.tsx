import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import s from './ProfilePageHeader.module.scss';

export const ProfilePageHeader = () => {
  const { t } = useTranslation('profile');
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
    <div className={s.ProfilePageHeader}>
      <Text title={t('Profile')} />
      {readonly ? (
        <Button
          theme={ButtonTheme.OUTLINE}
          className={s.editBtn}
          onClick={onEdit}
        >
          {t('Edit')}
        </Button>
      ) : (
        <>
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            className={s.editBtn}
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
        </>
      )}
    </div>
  );
};
