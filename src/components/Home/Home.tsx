import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/store';
import { ITodo } from '../../shared/todoSlice';
import { Card } from '../Card/Card';
import { TodoRow } from '../TodoRow/TodoRow';

import style from './Home.module.scss';
export const Home = () => {
  const navigate = useNavigate();
  const { todos } = useSelector((state: RootState) => state)['todo'];
  return (
    <div className={style.home}>
      <Card
        title="All todos"
        content={todos.slice(0, 3).map((t: ITodo) => (
          <TodoRow todo={t} key={t.id} />
        ))}
        cardClass="all"
        count={todos.length}
        onViewAllClick={() => {
          navigate('/all-todos');
        }}
      />
      <Card title="Assigned to you" content={null} cardClass="assigned" />
      <Card title="Created by you" content={null} cardClass="created" />
      <Card title="Reminders" content={null} cardClass="reminder" />
      <Card title="Routine" content={null} cardClass="routine" />
    </div>
  );
};
