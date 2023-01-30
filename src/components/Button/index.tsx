import style from './Button.module.css';
import cn from 'classnames/bind';
import { ButtonProps } from './types';

export default function Button({
  primary,
  secondary,
  success,
  iconLeft,
  iconRight,
  whitePrimary,
  whiteSecondary,
  ...props
}: ButtonProps) {
  const cx = cn.bind(style);
  return (
    <button
      {...props}
      className={cx(
        'w-full py-3 px-6 rounded-full font-bold border flex items-center justify-center gap-2 whitespace-nowrap shadow-md',
        {
          primary: primary,
          secondary: secondary,
          success: success,
          whitePrimary: whitePrimary,
          whiteSecondary: whiteSecondary,
        }
      )}
    >
      {iconLeft}
      {props.label}
      {iconRight}
    </button>
  );
}
