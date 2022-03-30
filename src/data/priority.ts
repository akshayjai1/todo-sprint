import { EPriority } from '../shared/todoSlice';

export const priorities = Object.values(EPriority);

export interface ILabelValue<T = string> {
  label: T;
  value: string;
}
