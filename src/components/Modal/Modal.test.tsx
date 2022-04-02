import { Modal } from './Modal';
import { render, screen } from '@testing-library/react';

test('check empty modal contains yes and no button', () => {
  render(<Modal modalContent={null} onApprove={() => {}} />);
  const yes = screen.getByText('Yes');
  const no = screen.getByText('Yes');
  expect(yes).toBeInTheDocument();
  expect(no).toBeInTheDocument();
});
test('check the hr element', () => {
  render(<Modal modalContent={<div>1234</div>} onApprove={() => {}} />);
  const linkElement = screen.getByText(/1234/i);
  expect(linkElement).toBeInTheDocument();
});
