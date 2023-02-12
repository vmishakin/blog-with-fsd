import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '../Button/Button'
import s from './LangSwitcher.module.scss'

interface LangSwitcherProps {

}

export const LangSwitcher = ({}: LangSwitcherProps) => {
  const {t, i18n} = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <>
      <Button theme={ThemeButton.CLEAR} onClick={toggle}>{t('Language')}</Button>
    </>
  )
}
