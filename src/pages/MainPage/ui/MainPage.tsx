import { useTranslation } from "react-i18next"

export const MainPage = () => {
  const {t} = useTranslation()

  return (
    <div>
      <p>{t('Main page')}</p>
    </div>
  )
}
