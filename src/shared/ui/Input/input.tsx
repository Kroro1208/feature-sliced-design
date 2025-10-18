import {
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { cn } from '@/shared/lib';

import { Button } from '../Button/Button';

import styles from './Input.module.scss';

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputType {
  classNames?: string;
  value?: string;
  disables?: boolean;
  rounded?: boolean;
  Icon?: ReactNode;
  onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);
  const {
    className,
    value,
    Icon,
    onChange,
    disabled = false,
    rounded = false,
    type = 'text',
    ...rest
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div
      className={cn(styles.inputContainer, className, {
        [styles.rounded]: rounded,
        [styles.disabled]: disabled,
        [styles.focused]: focused,
      })}
    >
      {Icon}
      <input
        {...rest}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={showPassword ? 'text' : type}
        className={cn(styles.input, { [styles.rounded]: rounded })}
      />
      {type === 'password' && (
        <Button
          theme="ghost"
          type="button"
          className={styles.toggleVisibility}
          onClick={toggleShowPassword}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </Button>
      )}
    </div>
  );
};
