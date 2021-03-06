import { useNavigate } from 'react-router-dom';
import { users } from '../../data/users';
import { EditIcon } from '../../images/EditIcon';
import { Square } from '../../images/Square';
import { ITodo } from '../../shared/todoSlice';
import { getName } from '../../shared/util';
import { getPriorityClass } from '../TodoRow/TodoRow';
import { UserIcon } from '../UserIcon/UserIcon';
import style from './TodoTableRow.module.scss';
interface IpTodoTableRow {
  todo: ITodo;
}
export const TodoTableRow = ({ todo }: IpTodoTableRow) => {
  const navigate = useNavigate();
  return (
    <div className={style.row}>
      <div className={style.a}>
        <Square />
      </div>
      <div className={style.text}>{todo.text}</div>
      <div className={style.status}>{todo.status ? "Done": "Pending"}</div>
      <div className={`${style.priority} ${getPriorityClass(todo.priority)}`}>
        {todo.priority}
      </div>
      <div className={style.a}>{todo.dueDate}</div>
      <div className={style.a}>
        <UserIcon name={getName(todo?.creator ?? '', users)} />
      </div>
      <div className={style.a}>
        <UserIcon name={getName(todo?.assignee ?? '', users)} />
      </div>
      <div
        className={style.action}
        onClick={() => navigate(`/edit/${todo.id}`)}>
        <div>Edit</div>
        <EditIcon />
      </div>
    </div>
  );
};
