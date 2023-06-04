import { Logo } from './Logo';
import { FunctionComponent } from 'react';
import { Burger } from './Burger';
import { MainHeader } from './MainHeader';

export const Title: FunctionComponent<{ showHeader?: boolean }> = ({
  showHeader,
}) => {
  return (
    <div>
      <div className='d-flex logo-container'>
        <Burger />
        <Logo />
      </div>
      <div>{showHeader ? <MainHeader /> : null}</div>
    </div>
  );
};
