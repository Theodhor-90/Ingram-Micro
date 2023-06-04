import { FC } from 'react';

export const Triangle: FC<{}> = () => {
  return (
    <svg
      fill='#011D47'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className='tooltip-triangle'
    >
      <path
        d='M23.776 22H1.224L12.5 1.46zM2.913 21h19.174L12.5 3.54z'
        fill='#011D47'
        stroke='#011D47'
      />
    </svg>
  );
};
