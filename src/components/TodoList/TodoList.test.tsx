import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { TodoList } from './TodoList';

describe('todo list test', () => {
  const initialState = {
    todo: { todos: [] },
    modal: { modal: { show: false } },
  };
  const mockStore = configureStore();
  let store;

  it('renders TodoList with redux', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TodoList />
        </BrowserRouter>
      </Provider>,
    );

    const linkElement = screen.getByText(/Add/i);
    expect(linkElement).toBeInTheDocument();
  });
});
