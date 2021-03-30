import React from 'react';
import classNames from 'classnames';
import { IButton } from './Button.interfaces';
import styles from './Button.module.scss';

const Button = ({
  children,
  label,
  onClick,
  disabled = false,
  type = 'button',
  outline = false,
}: IButton) => {
  const content = children || label;
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return content ? (
    <button
      className={classNames(
        styles.btn,
        outline && styles.outline,
        disabled && styles.disabled,
      )}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {content}
    </button>
  ) : null;
};

export default Button;
