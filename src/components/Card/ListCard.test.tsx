import { ListCard } from './ListCard';
import { render, screen } from '@testing-library/react';

test('render title', () => {
  const { container } = render(<ListCard title="title">1234</ListCard>);
  const linkElement = screen.getByText(/title/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders children', () => {
  const { container } = render(<ListCard title="title"> 1234</ListCard>);
  const linkElement = screen.getByText(/1234/i);
  expect(linkElement).toBeInTheDocument();
});
