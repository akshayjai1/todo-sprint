import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export enum EPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}
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
  todos: [
    {
      id: '1',
      text: 'Dummy todo',
      priority: EPriority.Low,
      assignee: '2',
      creator: '3',
      status: false,
      dueDate: '',
    },
    {
      id: '2',
      text: 'Dummy todo',
      priority: EPriority.Low,
      assignee: '2',
      creator: '3',
      status: false,
      dueDate: '',
    },
    {
      id: '3',
      text: 'Dummy todo',
      priority: EPriority.Low,
      assignee: '2',
      creator: '3',
      status: false,
      dueDate: '',
    },
    {
      id: '4',
      text: 'Dummy todo',
      priority: EPriority.Low,
      assignee: '2',
      creator: '3',
      status: false,
      dueDate: '',
    },
    {
      id: '7',
      text: 'Dummy todo',
      priority: EPriority.Low,
      assignee: '2',
      creator: '3',
      status: false,
      dueDate: '',
    },
    {
      id: '8',
      text: 'Dummy todo',
      priority: EPriority.Low,
      assignee: '2',
      creator: '3',
      status: false,
      dueDate: '',
    },
    {
      id: '9',
      text: 'Dummy todo',
      priority: EPriority.Low,
      assignee: '2',
      creator: '3',
      status: false,
      dueDate: '',
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      let index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index) {
        state.todos.splice(index, 1);
      }
    },
    edit: (state, action: PayloadAction<ITodo>) => {
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
