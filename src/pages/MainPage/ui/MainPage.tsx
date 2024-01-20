import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <p>{t('Main page')}</p>
      <RatingCard title="Как вам статья?" feedbackTitle="Оставьте отзыв о статье" hasFeedback />
    </Page>
  );
};
