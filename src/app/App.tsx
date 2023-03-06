import { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { AppRouter } from './providers/router';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
  useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
