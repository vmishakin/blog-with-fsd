import { Loader } from '../../../shared/ui/Loader/Loader';
import s from './PageLoader.module.scss';

export const PageLoader = () => {
  return (
    <div className={s.PageLoader}>
      <Loader />
    </div>
  );
};
