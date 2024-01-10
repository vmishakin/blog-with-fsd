import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';

// Component for error boundary testing
export const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error('Bug');
    }
  }, [error]);

  return (
    <Button onClick={throwError}>
      {t('throw error')}
    </Button>
  );
};
