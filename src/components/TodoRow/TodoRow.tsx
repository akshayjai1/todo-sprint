import { users } from '../../data/users';
import { ITodo } from '../../shared/todoSlice';
import style from './TodoRow.module.scss';
import { Square } from './../../images/Square';
import { UserOption } from '../UserIcon/UserIcon';
import { getName } from '../../shared/util';
import { EPriority } from '../../data/priority';
interface IpTodoRow {
  todo: ITodo;
}

export const TodoRow = ({ todo }: IpTodoRow) => {
  const name: string = getName(todo?.assignee ?? '', users);
  console.log('todo', todo);
  return (
    <div className={style.todoRow}>
      <div className={style.check}>
        <Square />
      </div>
      <div className={style.text}>{todo.text}</div>
      <div className={`${getPriorityClass(todo.priority)}`}>
        {todo.priority}
      </div>
      <div className={style.assignee}>
        <UserOption name={name} invert />
      </div>
    </div>
  );
};

export const getPriorityClass = (priority: EPriority) => {
  if (priority === EPriority.Low) {
    return style.low;
  } else if (priority === EPriority.Medium) {
    return style.medium;
  } else {
    return style.high;
  }
};
