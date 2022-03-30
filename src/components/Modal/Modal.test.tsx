import { Modal } from './Modal';
import { render, screen } from '@testing-library/react';

test('check empty modal contains cross', () => {
  render(<Modal modalContent={null} />);
  const linkElement = screen.getByText('x');
  expect(linkElement).toBeInTheDocument();
});
test('check the hr element', () => {
  render(<Modal modalContent={<div>1234</div>} />);
  const linkElement = screen.getByText(/1234/i);
  expect(linkElement).toBeInTheDocument();
});
