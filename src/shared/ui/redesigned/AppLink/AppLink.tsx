import { ForwardedRef, forwardRef, memo, ReactNode } from 'react';
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
  forwardRef(
    (
      {
        className,
        children,
        to,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
      }: AppLinkProps,
      ref: ForwardedRef<HTMLAnchorElement>,
    ) => {
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
          ref={ref}
        >
          {children}
        </NavLink>
      );
    },
  ),
);
