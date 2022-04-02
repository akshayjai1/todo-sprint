import { createSlice } from '@reduxjs/toolkit';
export interface ModalState {
  modal: {
    show: boolean;
  };
}

const initialState: ModalState = {
  modal: {
    show: false,
  },
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(state) {
      state.modal.show = !state.modal.show;
    },
    showModal: (state) => {
      state.modal.show = true;
    },
    hideModal: (state) => {
      state.modal.show = false;
    },
  },
});

export const { showModal, hideModal, toggleModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
