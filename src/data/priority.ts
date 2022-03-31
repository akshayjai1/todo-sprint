export enum EPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}
export const priorities = Object.values(EPriority);

export interface ILabelValue<T = string> {
  label: T;
  value: string;
}
