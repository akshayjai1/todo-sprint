import { render, screen } from '@testing-library/react';
import { Todo } from './Todo';

test('renders Edit, when edit is true', () => {
  render(<Todo edit></Todo>);
  const linkElement = screen.getByText(/Edit Todo/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders Add when edit is false', () => {
  render(<Todo edit={false}></Todo>);
  const linkElement = screen.getByText(/Add Todo/i);
  expect(linkElement).toBeInTheDocument();
});
