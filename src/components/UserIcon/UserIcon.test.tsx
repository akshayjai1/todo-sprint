import { render, screen } from '@testing-library/react';
import { UserIcon } from './UserIcon';

test('testing UserIcon has proper initials', () => {
  render(<UserIcon name="Paritosh Sharma" />);
  const linkElement = screen.getByText(/PS/i);
  expect(linkElement).toBeInTheDocument();
});
