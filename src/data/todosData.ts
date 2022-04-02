import { ITodo } from '../shared/todoSlice';
import { EPriority } from './priority';

const getRandomNumberStringInRange = (num: number) =>
  Math.ceil(Math.random() * num) + '';
export const todosData: ITodo[] = [];
const milliSeconds = 24 * 60 * 60 * 1000;
for (let i = 1; i < 27; i++) {
  todosData.push({
    id: i + '',
    text: `Dummy todo ${i}`,
    priority:
      i % 3 === 0
        ? EPriority.Low
        : i % 3 === 1
        ? EPriority.Medium
        : EPriority.High,
    assignee: getRandomNumberStringInRange(7),
    creator: '8',
    status: false,
    dueDate: new Date(Date.now() - i * milliSeconds).toDateString(),
  });
}
