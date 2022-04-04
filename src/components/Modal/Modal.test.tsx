import { Modal } from './Modal';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

// test(, () => {
//   render(<Modal modalContent={null} onApprove={() => {}} />);
//   const yes = screen.getByText('Yes');
//   const no = screen.getByText('Yes');
//   expect(yes).toBeInTheDocument();
//   expect(no).toBeInTheDocument();
// });
// test(, () => {
//   render(<Modal modalContent={<div>1234</div>} onApprove={() => {}} />);
//   const linkElement = screen.getByText(/1234/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('With React Testing Library', () => {
  const initialState = {
    todo: { todos: [] },
    modal: { modal: { show: false } },
  };
  const mockStore = configureStore();
  let store;

  it('check empty modal contains yes and no button', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Modal modalContent={null} onApprove={() => {}} />
        </BrowserRouter>
      </Provider>,
    );

    const yes = screen.getByText('Yes');
    const no = screen.getByText('Yes');
    expect(yes).toBeInTheDocument();
    expect(no).toBeInTheDocument();
  });

  it('check the hr element', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Modal modalContent={<div>1234</div>} onApprove={() => {}} />
        </BrowserRouter>
      </Provider>,
    );

    const linkElement = screen.getByText(/1234/i);
    expect(linkElement).toBeInTheDocument();
  });
});
