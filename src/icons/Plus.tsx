import { FC } from 'react';

export const Plus: FC<{ active: boolean }> = ({ active }) => {
  return (
    <svg
      className={`acc-plus ${active ? 'active' : ''}`}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.0588 4V11.0588H4V12.9412H11.0588V20H12.9412V12.9412H20V11.0588H12.9412V4H11.0588Z'
        fill='#00B7A2'
      />
    </svg>
  );
};
