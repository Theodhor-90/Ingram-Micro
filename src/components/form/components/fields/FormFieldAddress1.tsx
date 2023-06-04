import { FC } from 'react';

export interface IFormFieldAddress1 {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormFieldAddress1: FC<IFormFieldAddress1> = ({ handleChange }) => {
  return (
    <div
      id='elq-FormLastRow'
      className='row'
    >
      <input
        type='text'
        tabIndex={-1}
        autoComplete='off'
        onChange={(e) => handleChange(e)}
        style={{ width: '100%' }}
        className='elq-item-input invisible'
        name='address1'
        id='fe32506'
      />
    </div>
  );
};
