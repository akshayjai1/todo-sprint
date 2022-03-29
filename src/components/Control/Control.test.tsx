import { render, screen } from '@testing-library/react';
import { Control } from './Control';

test('renders label', () => {
  render(<Control label="test">Children</Control>);
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders Children', () => {
  render(<Control label="test">Children</Control>);
  const linkElement = screen.getByText(/Children/i);
  expect(linkElement).toBeInTheDocument();
});
