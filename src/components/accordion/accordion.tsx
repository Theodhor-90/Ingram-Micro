import React, { useState } from 'react';

interface AccordionProps {
  title?: string;
  children?: React.ReactNode;
  firstInColumn?: boolean;
  inverted?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  title = 'Accordion title',
  children = "Hello there that's accordion content",
  firstInColumn = false,
  inverted,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`ingram--accordion ${firstInColumn ? 'border-top' : ''} ${
        inverted ? 'inverted' : ''
      } ${isOpen ? 'active' : ''}`}
    >
      <button
        className={`${
          inverted
            ? 'ingram--accordion__title inverted'
            : 'ingram--accordion__title'
        }`}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        role='button'
      >
        <h3 className='ingram--sub-title'>{title}</h3>
        {isOpen ? (
          <div className={`${isOpen ? 'active' : ''} ${'icon-container'}`}>
            <svg
              width='16'
              height='2'
              viewBox='0 0 16 2'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='minus'
            >
              <path
                d='M7.05882 0.0590677L0 0.0588379V1.94119H7.05882H8.94118H16V0.0588379H8.94118L7.05882 0.0590677Z'
                fill='#00B7A2'
              />
            </svg>
          </div>
        ) : (
          <div className={`${!isOpen ? 'active' : ''} ${'icon-container'}`}>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='plus'
            >
              <path
                d='M7.05882 0V7.05882H0V8.94118H7.05882V16H8.94118V8.94118H16V7.05882H8.94118V0H7.05882Z'
                fill='#00B7A2'
              />
            </svg>
          </div>
        )}
      </button>
      <div
        className={`${
          inverted
            ? 'ingram--accordion__content inverted'
            : 'ingram--accordion__content'
        } ${isOpen ? 'open' : 'closed'}`}
      >
        {children}
      </div>
    </div>
  );
};
