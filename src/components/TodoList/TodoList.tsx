import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NextIcon } from '../../images/NextIcon';
import { Plus } from '../../images/Plus';
import { PrevIcon } from '../../images/PrevIcon';
import { RootState } from '../../shared/store';
import { Button } from '../Button/Button';
import { ListCard } from '../Card/ListCard';
import { TodoHeaderRow } from '../TodoTableRow/TodoHeaderRow';
import { TodoTableRow } from '../TodoTableRow/TodoTableRow';
import style from './TodoList.module.scss';

const perPage = 5;
export const TodoList = () => {
  const [page, setPage] = useState({
    current: 1,
    firstIndex: 0,
    lastIndex: 1 * perPage,
  });
  const { todos } = useSelector((state: RootState) => state)['todo'];
  const navigate = useNavigate();
  const lastPage = useMemo(() => {
    return Math.ceil(todos.length / perPage);
  }, [perPage, todos.length]);
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
  const changePage = (event: any) => {
    if (event.currentTarget.className.includes('prev') && page.current !== 1) {
      setPage((p) => getUpdatedPageData(p, -1));
    } else if (
      event.currentTarget.className.includes('next') &&
      page.current !== lastPage
    ) {
      setPage((p) => getUpdatedPageData(p, 1));
    }
  };
  return (
    <ListCard title={header}>
      <TodoHeaderRow />
      <div className={style.todoList}>
        {todos.slice(page.firstIndex, page.lastIndex).map((todo) => (
          <TodoTableRow todo={todo} key={todo.id} />
        ))}
      </div>
      <div className={style.footer}>
        <div>
          <div
            className={`${style.prevIcon} ${
              page.current === 1 ? 'disabled' : ''
            }`}
            onClick={changePage}>
            <PrevIcon />
          </div>
          <div className={style.pagination}>
            Showing {page.firstIndex + 1} to {page.lastIndex} of {todos.length}
          </div>
          <div
            className={`${style.nextIcon} ${
              page.current === lastPage ? 'disabled' : ''
            }`}
            onClick={changePage}>
            <NextIcon />
          </div>
        </div>
      </div>
    </ListCard>
  );
};

const getUpdatedPageData = (
  page: { current: number; firstIndex: number; lastIndex: number },
  factor: number,
) => {
  console.log({ page, factor });
  return {
    current: page.current + (factor > 0 ? 1 : -1),
    firstIndex: page.firstIndex + factor * perPage,
    lastIndex: page.lastIndex + factor * perPage,
  };
};
