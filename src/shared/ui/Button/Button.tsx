import { cn } from '@/shared/lib';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonForm = 'rounded' | 'pill' | 'circle';
type ButtonTheme = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: ButtonSize;
  form?: ButtonForm;
  theme?: ButtonTheme;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    size = 'sm',
    theme = 'primary',
    form = 'pill',
    disabled = false,
    ...rest
  } = props;
  return (
    <div>
      <button
        {...rest}
        disabled={disabled}
        className={cn(
          styles.button,
          styles[size],
          styles[theme],
          styles[form],
          className
        )}
      >
        {children}
      </button>
    </div>
  );
};
