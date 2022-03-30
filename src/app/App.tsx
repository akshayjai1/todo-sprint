import style from './App.module.scss';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { Button } from '../components/Button/Button';
import { useDispatch } from 'react-redux';
import { Todo } from '../components/Todo/Todo';
import { Plus } from '../images/Plus';
export function App() {
  const dispatch = useDispatch();
  return (
    <div className="app">
      <h1 className={style.header}>
        <NavLink to="/"> To Do App</NavLink>
        <NavLink to="add">
          <Button text="Add" icon={<Plus />} />
        </NavLink>
      </h1>

      <div></div>
      <Routes>
        <Route path="/reminders" element={<Home />} />
        <Route path="/routine" element={<Home />} />
        <Route path="/reminders" element={<Home />} />
        <Route path="/add" element={<Todo />} />
        <Route path="/edit" element={<Todo edit />} />
        <Route path="/all" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
