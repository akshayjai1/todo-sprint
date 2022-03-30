import { users } from '../../data/users';
import { EPriority, ITodo } from '../../shared/todoSlice';
import style from './TodoRow.module.scss';
import { Square } from './../../images/Square';
import { UserOption } from '../UserIcon/UserIcon';
interface IpTodoRow {
  todo: ITodo;
}
export const TodoRow = ({ todo }: IpTodoRow) => {
  const name: string = todo.assignee
    ? users.find((u) => u.id === todo.assignee)?.name ?? ''
    : '';
  console.log('todo', todo);
  return (
    <div className={style.todoRow}>
      <div className={style.check}>
        <Square />
      </div>
      <div className={style.text}>{todo.text}</div>
      <div className={`${style.priority} ${getPriorityClass(todo.priority)}`}>
        {todo.priority}
      </div>
      <div className={style.assignee}>
        <UserOption name={name} invert />
      </div>
    </div>
  );
};

const getPriorityClass = (priority: EPriority) => {
  if (priority === EPriority.Low) {
    return style.low;
  } else if (priority === EPriority.Medium) {
    return style.medium;
  } else {
    return style.high;
  }
};
