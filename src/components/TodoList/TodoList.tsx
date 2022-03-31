import { useSelector } from 'react-redux';
import { RootState } from '../../shared/store';
import { ListCard } from '../Card/ListCard';
import { TodoHeaderRow } from '../TodoTableRow/TodoHeaderRow';
import { TodoTableRow } from '../TodoTableRow/TodoTableRow';
import style from './TodoList.module.scss';

interface IpTodoList {}
export const TodoList = ({}) => {
  const { todos } = useSelector((state: RootState) => state)['todo'];
  return (
    <ListCard title="All Todos">
      <TodoHeaderRow />
      <div className={style.todoList}>
        {todos.map((todo) => (
          <TodoTableRow todo={todo} key={todo.id} />
        ))}
      </div>
    </ListCard>
  );
};
