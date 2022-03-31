import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Plus } from '../../images/Plus';
import { RootState } from '../../shared/store';
import { Button } from '../Button/Button';
import { ListCard } from '../Card/ListCard';
import { TodoHeaderRow } from '../TodoTableRow/TodoHeaderRow';
import { TodoTableRow } from '../TodoTableRow/TodoTableRow';
import style from './TodoList.module.scss';

interface IpTodoList {}
export const TodoList = ({}) => {
  const { todos } = useSelector((state: RootState) => state)['todo'];
  const navigate = useNavigate();
  const header = (
    <div className={style.header}>
      <div className={style.title}>All Todos</div>
      <Button
        text="Add"
        icon={<Plus />}
        onClick={() => {
          navigate('/add');
        }}
      />
    </div>
  );
  return (
    <ListCard title={header}>
      <TodoHeaderRow />
      <div className={style.todoList}>
        {todos.map((todo) => (
          <TodoTableRow todo={todo} key={todo.id} />
        ))}
      </div>
    </ListCard>
  );
};
