import { users } from '../../data/users';
import { ITodo } from '../../shared/todoSlice';
import style from './TodoRow.module.scss';
import { Square } from './../../images/Square';
interface IpTodoRow {
  todo: ITodo;
}
export const TodoRow = ({ todo }: IpTodoRow) => {
  const name: string = todo.assignee
    ? users.find((u) => u.id === todo.assignee)?.name ?? ''
    : '';
  console.log('todo', todo);
  debugger;
  return (
    <div className={style.todoRow}>
      <div className={style.check}>
        <Square />
      </div>
      <div className={style.text}>{todo.text}</div>
      <div className={style.priority}>{todo.priority}</div>
      <div className={style.assignee}>{name}</div>
    </div>
  );
};
