import style from './App.module.scss';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { Button } from '../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from '../components/Todo/Todo';
import { Plus } from '../images/Plus';
import { UserOption } from '../components/UserIcon/UserIcon';
import Person from '../images/person.png';
import { users } from '../data/users';
import { TodoList } from '../components/TodoList/TodoList';
export function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const state = useSelector((state) => state);
  console.log(state, 'state');
  console.log('o', location);
  return (
    <div className="app">
      <h1 className={style.header}>
        <NavLink to="/"> To Do App</NavLink>
        <div className={style.user}>
          <UserOption
            invert
            name={users[8].name}
            icon={<img src={Person} width="36" height="36" />}
          />
        </div>
      </h1>

      <div></div>
      <Routes>
        <Route path="/reminders" element={<Home />} />
        <Route path="/routine" element={<Home />} />
        <Route path="/reminders" element={<Home />} />
        <Route path="/add" element={<Todo />} />
        <Route path="/edit/:id" element={<Todo edit />} />
        <Route path="/all-todos" element={<TodoList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
