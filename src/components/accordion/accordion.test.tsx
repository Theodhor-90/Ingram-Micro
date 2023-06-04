import { fireEvent, render, screen } from '@testing-library/react';
import { Accordion } from './accordion';

describe('<Accordion>', () => {
  it('Renders correctly', () => {
    render(<Accordion />);
    expect(screen.getByText('Accordion title')).toBeInTheDocument;
  });
  it('Is not opened when first rendered', () => {
    const { container } = render(<Accordion />);
    expect(container.firstChild).not.toHaveClass('active');
  });
  it('Is open when clicked', () => {
    const { container } = render(<Accordion />);
    console.log('AAAA', container.classList);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(container.firstChild).toHaveClass('active');
  });
});
