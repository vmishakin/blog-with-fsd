import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
  children: JSX.Element
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData);

  if (!auth) {
    return <Navigate to={RoutePath.main} replace />;
  }

  return children;
};
