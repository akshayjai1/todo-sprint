import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EPriority } from '../data/priority';
import { todosData } from '../data/todosData';

export interface IUser {
  id: string;
  name: string;
}
export interface ITodo {
  id: string;
  text: string;
  status: boolean; //false = pending, true = done
  assignee?: string | null; // id from User interface
  creator: string;
  dueDate: string;
  priority: EPriority;
}
export interface TodoState {
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: todosData,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ITodo>) => {
      state.todos.unshift(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      let index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index > -1) {
        state.todos.splice(index, 1);
      }
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      let index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index > -1) {
        state.todos[index].status = !state.todos[index].status;
      }
    },
    update: (state, action: PayloadAction<ITodo>) => {
      let index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      if (index > -1) {
        state.todos[index] = action.payload;
      }
    },
  },
});

export const { add, remove, update, toggleStatus } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
