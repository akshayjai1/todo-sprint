import { render, screen } from '@testing-library/react';
import { RowAction } from './RowAction';

test('renders label', () => {
  render(
    <RowAction
      text="test"
      actionText="actionText"
      onClick={() => {
        console.log('button clicked');
      }}></RowAction>,
  );
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders Children', () => {
  render(
    <RowAction
      text="test"
      actionText="actionText"
      onClick={() => {
        console.log('button clicked');
      }}></RowAction>,
  );
  const linkElement = screen.getByText(/actionText/i);
  expect(linkElement).toBeInTheDocument();
});
