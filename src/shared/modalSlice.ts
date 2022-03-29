import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    show: (state) => {
      state.modal.show = true;
    },
    hide: (state) => {
      state.modal.show = false;
    },
  },
});

export const { show, hide } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
