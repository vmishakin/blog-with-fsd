import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  isFilled?: boolean;
  isStroked?: boolean;
  inverted?: boolean;
}

/**
 * @deprecated
 */
export const Icon = ({
  className,
  Svg,
  isFilled = true,
  isStroked,
  inverted,
  ...otherProps
}: IconProps) => {
  return (
    <Svg
      className={classNames(
        inverted ? s.inverted : s.Icon,
        {
          [s.fill]: isFilled,
          [s.stroke]: isStroked,
        },
        [className],
      )}
      {...otherProps}
    />
  );
};
