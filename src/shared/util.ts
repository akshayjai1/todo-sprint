import { IUser } from './todoSlice';

export const getInitials = (name: string): string =>
  (name || '')
    ?.split?.(' ')
    .map((e) => e[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() ?? '';

export const getName = (id: string, users: IUser[]) => {
  return id ? users.find((u) => u.id === id)?.name ?? '' : '';
};
