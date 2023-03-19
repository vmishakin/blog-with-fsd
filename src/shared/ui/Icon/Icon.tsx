import { classNames } from 'shared/lib/classNames/classNames';
import s from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  fill?: boolean;
  stroke?: boolean;
}

export const Icon = ({
  className, Svg, fill = true, stroke,
}: IconProps) => {
  return (
    <Svg className={classNames(s.Icon, {
      [s.fill]: fill,
      [s.stroke]: stroke,
    }, [className])}
    />
  );
};
