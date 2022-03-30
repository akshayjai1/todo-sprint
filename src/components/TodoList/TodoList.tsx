import { ListCard } from '../Card/ListCard';
import { TodoHeaderRow } from '../TodoTableRow/TodoHeaderRow';
import { TodoTableRow } from '../TodoTableRow/TodoTableRow';
import style from './TodoList.module.scss';

interface IpTodoList {}
export const TodoList = ({}) => {
  return (
    <ListCard title="All Todos">
      <TodoHeaderRow />
      <div className={style.todoList}>
        <TodoTableRow />
        <TodoTableRow />
        <TodoTableRow />
        <TodoTableRow />
        <TodoTableRow />
        <TodoTableRow />
        <TodoTableRow />
      </div>
    </ListCard>
  );
};
