import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { App } from './App';

describe('With React Testing Library', () => {
  const initialState = {
    todo: { todos: [] },
    modal: { modal: { show: false } },
  };
  const mockStore = configureStore();
  let store;

  it('renders To Do App with redux', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    const linkElement = screen.getByText('Todo');
    expect(linkElement).toBeInTheDocument();
  });
});
