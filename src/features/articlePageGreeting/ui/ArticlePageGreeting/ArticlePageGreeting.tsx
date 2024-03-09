import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

export const ArticlePageGreeting = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isArtcilesPageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArtcilesPageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArtcilesPageWasOpened: true }));
    }
  }, [dispatch, isArtcilesPageWasOpened]);

  const handleOnClose = () => setIsOpen(false);

  const text = (
    <Text
      title={t('Welcome to the articles page')}
      text={t('Here you can search and view articles on various topics')}
    />
  );

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} lazy onClose={handleOnClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal isOpen={isOpen} lazy onClose={handleOnClose}>
      {text}
    </Modal>
  );
};
