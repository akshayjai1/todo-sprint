import './App.scss';
import { Card } from '../components/Card/Card';

function App() {
  return (
    <div className="app">
      <h1>todo app</h1>
      <div></div>
      <Card title="routine" content={null} />
      <Card title="routine" content={null} />
      <Card title="routine" content={null} />
      <Card title="routine" content={null} />
      <Card title="routine" content={null} />
    </div>
  );
}

export default App;
