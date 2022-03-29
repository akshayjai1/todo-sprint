import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('render card', () => {
  const { container } = render(<Card title="title" content={null} />);
  expect(container.firstElementChild?.className).toEqual('card');
});
test('check the hr element', () => {
  const { container } = render(<Card title="title" content={null} />);
  const hr = screen.getByTestId('card-title-hr');
  expect(hr).toBeVisible();
});
