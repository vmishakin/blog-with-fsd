import { memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children: ReactNode;
  activeClassName?: string;
}

export const AppLink = memo(
  ({
    className,
    children,
    to,
    variant = 'primary',
    activeClassName = '',
    ...otherProps
  }: AppLinkProps) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          classNames(s.AppLink, { [activeClassName]: isActive }, [
            className,
            s[variant],
          ])
        }
        {...otherProps}
      >
        {children}
      </NavLink>
    );
  },
);
