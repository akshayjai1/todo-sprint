import { render, screen } from '@testing-library/react';
import { EPriority } from '../../data/priority';

import { TodoRow } from './TodoRow';

test('renders todo text', () => {
  render(
    <TodoRow
      todo={{
        id: '1',
        text: 'Dummy todo',
        priority: EPriority.Low,
        assignee: '2',
        creator: '3',
        status: false,
        dueDate: '',
      }}></TodoRow>,
  );
  const linkElement = screen.getByText(/Dummy todo/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders priority', () => {
  render(
    <TodoRow
      todo={{
        id: '1',
        text: 'Dummy todo',
        priority: EPriority.Low,
        assignee: '2',
        creator: '3',
        status: false,
        dueDate: '',
      }}></TodoRow>,
  );
  const linkElement = screen.getByText(/Low/i);
  expect(linkElement).toBeInTheDocument();
});
