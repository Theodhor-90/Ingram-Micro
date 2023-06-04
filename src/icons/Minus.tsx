import { FC } from 'react';

export const Minus: FC<{ active: boolean }> = ({ active }) => {
  return (
    <svg
      className={`acc-minus ${active ? 'active' : ''}`}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.0588 11.0591L4 11.0588V12.9412H11.0588H12.9412H20V11.0588H12.9412L11.0588 11.0591Z'
        fill='#00B7A2'
      />
    </svg>
  );
};
