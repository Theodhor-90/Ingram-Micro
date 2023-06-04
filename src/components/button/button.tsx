import React, { FC } from 'react';

interface ButtonProps {
  text?: string;
  className?: string;
  btnType?: 'primary' | 'secondary' | 'ghost';
  isInverted?: boolean;
  isDisabled?: boolean;
  leftAligned?: boolean;
  triggerCallBack?: () => void;
  typeAttribute?: 'button' | 'submit' | 'reset';
  customIcon?: React.ReactElement;
}

export const Button: FC<ButtonProps> = ({
  text = 'Button',
  isInverted,
  isDisabled,
  triggerCallBack,
  btnType = 'primary',
  leftAligned,
  className,
  typeAttribute = 'button',
  customIcon,
}) => {
  const executeCallback = () => {
    if (triggerCallBack) {
      triggerCallBack();
    }
  };

  return (
    <button
      type={typeAttribute}
      className={`ingram--button ingram--button__${btnType} ${
        isInverted ? 'inverted' : ''
      } ${isDisabled ? 'disabled' : ''} ${leftAligned ? 'left-aligned' : ''} ${
        className ?? ''
      }`}
      disabled={isDisabled ?? false}
      onClick={executeCallback}
    >
      {text}
      {customIcon ? (
        <>{customIcon}</>
      ) : btnType === 'primary' ? (
        <svg
          width='18'
          height='14'
          viewBox='0 0 18 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.100344 5.99966H14.2003L9.90002 1.7003L11.3006 0.299683L18 7L11.3006 13.7003L9.90002 12.2997L14.2003 8.00035H0.100344V5.99966Z'
            fill='white'
          />
        </svg>
      ) : (
        <svg
          width='18'
          height='14'
          viewBox='0 0 18 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.100344 5.99966H14.2003L9.90002 1.7003L11.3006 0.299683L18 7L11.3006 13.7003L9.90002 12.2997L14.2003 8.00035H0.100344V5.99966Z'
            fill='#00B7A2'
          />
        </svg>
      )}
    </button>
  );
};
