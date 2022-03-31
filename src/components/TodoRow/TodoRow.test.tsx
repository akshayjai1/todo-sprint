import { render, screen } from '@testing-library/react';
import {EPriority} from '../../data/priority';

import { TodoRow } from './TodoRow';

test('renders label', () => {
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
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders Children', () => {
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
  const linkElement = screen.getByText(/Children/i);
  expect(linkElement).toBeInTheDocument();
});
