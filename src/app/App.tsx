import './App.scss';
import { Card } from '../components/Card/Card';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { Button } from '../components/Button/Button';
export function App() {
  return (
    <div className="app">
      <h1>To Do App</h1>
      <Button text="Add" />
      <div></div>
      <Routes>
        <Route path="/reminders" element={<Home />} />
        <Route path="/routine" element={<Home />} />
        <Route path="/reminders" element={<Home />} />
        <Route path="/all" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
