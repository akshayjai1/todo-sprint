import { createSlice, PayloadAction } from '@reduxjs/toolkit';
enum EPriority {
  low = 'low',
  medium = 'medium',
  high = 'high',
}
interface User {
  id: string;
  name: string;
}
interface Todo {
  id: string;
  text: string;
  status: boolean; //false = pending, true = done
  assignee: User;
  creator: User;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
}
export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      let index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index) {
        state.todos.splice(index, 1);
      }
    },
    edit: (state, action: PayloadAction<Todo>) => {
      let index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      if (index) {
        state.todos[index] = action.payload;
      }
    },
  },
});

export const { add, remove, edit } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
