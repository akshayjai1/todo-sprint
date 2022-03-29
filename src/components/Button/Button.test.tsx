import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders text', () => {
  render(<Button text="test"></Button>);
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
test('handles event', () => {
  let a = 1;
  render(
    <Button
      text="test"
      onClick={() => {
        a = 2;
      }}></Button>,
  );
  fireEvent.click(screen.getByText(/test/i));
  expect(a).toBe(2);
});
