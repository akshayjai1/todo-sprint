import style from './App.module.scss';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { Todo } from '../components/Todo/Todo';
import { UserOption } from '../components/UserIcon/UserIcon';
import Person from '../images/person.png';
import { users } from '../data/users';
import Logo from '../images/logo.png';
import { TodoList } from '../components/TodoList/TodoList';
export function App() {
  return (
    <div className="app">
      <h1 className={style.header}>
        <NavLink to="/" className={style.logo}>
          <img src={Logo} alt="logo" /> Todo
        </NavLink>
        <div className={style.user}>
          <UserOption
            invert
            name={users[8].name}
            icon={<img src={Person} width="36" height="36" alt="person" />}
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
