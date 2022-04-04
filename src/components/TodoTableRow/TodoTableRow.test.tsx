import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { EPriority } from '../../data/priority';
import { TodoTableRow } from './TodoTableRow';

describe('todo table row test', () => {
  const initialState = {
    todo: { todos: [] },
    modal: { modal: { show: false } },
  };
  const mockStore = configureStore();
  let store;

  it('renders To Do table row', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TodoTableRow
            todo={{
              id: '1',
              text: 'Dummy todo',
              priority: EPriority.Low,
              assignee: '2',
              creator: '3',
              status: false,
              dueDate: '',
            }}
          />
        </BrowserRouter>
      </Provider>,
    );

    const linkElement = screen.getByText(/Pending/i);
    expect(linkElement).toBeInTheDocument();
  });
});
