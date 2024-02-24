import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const counterValue = useCounterValue();
  const { add, increment, decrement } = useCounterActions();
  const { t } = useTranslation();

  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={handleIncrement} data-testid="increment-btn">{t('increment')}</Button>
      <Button onClick={handleDecrement} data-testid="decrement-btn">{t('decrement')}</Button>
      <Button onClick={() => add(5)}>{t('add five')}</Button>
    </div>
  );
};
