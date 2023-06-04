import { FC } from 'react';

export const SelectArrow: FC<{ rotated: boolean }> = ({ rotated }) => {
  return (
    <svg
      className={`elq-arrow ${rotated ? 'rotated' : ''}`}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.0753 9L12.0001 15.1339L5.92426 9L5 9.9331L12 17L19 9.9331L18.0753 9Z'
        fill='#232323'
      />
    </svg>
  );
};
