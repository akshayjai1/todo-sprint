import { EPriority } from '../shared/todoSlice';

export const priorities = Object.values(EPriority);
// ['low', 'medium', 'high'];

export interface ILabelValue<T = string> {
  label: T;
  value: string;
}
