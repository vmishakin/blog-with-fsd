import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';

const text = `
Этот проект - блог, созданный с использованием React/ReduxToolkit. 
Он представляет возможность просматривать список статей и страницы статей. 
Проект ценен, в первую очередь, не за функционал или дизайн, 
а за обилие используемых инструментов, библиотек, их правильной настройки и 
современных подходов production-уровня. Тут используется методология Feature-Sliced Design.
Сейчас я использую этот проект в качестве экспериментального полигона для 
опробования разных технологий и в качестве портфолио.`;

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid="MainPage">
      <Text title={t('Main page')} text={text} />
    </Page>
  );
};
