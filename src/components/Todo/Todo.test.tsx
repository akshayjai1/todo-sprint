import { render, screen } from '@testing-library/react';
import { Todo } from './Todo';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
  window.alert = jest.fn();
  const initialState = {
    todo: { todos: [] },
    modal: { modal: { show: false } },
  };
  const mockStore = configureStore();
  let store;

  it('renders Edit, when edit is true', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Todo edit></Todo>
        </BrowserRouter>
      </Provider>,
    );

    const linkElement = screen.getByText(/Edit Todo/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders Add when edit is false', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Todo></Todo>
        </BrowserRouter>
      </Provider>,
    );

    const linkElement = screen.getByText(/Add Todo/i);
    expect(linkElement).toBeInTheDocument();
  });
});

// test('renders Edit, when edit is true', () => {
//   render(<Todo edit></Todo>);
//   const linkElement = screen.getByText(/Edit Todo/i);
//   expect(linkElement).toBeInTheDocument();
// });
// test('renders Add when edit is false', () => {
//   render(<Todo edit={false}></Todo>);
//   const linkElement = screen.getByText(/Add Todo/i);
//   expect(linkElement).toBeInTheDocument();
// });
