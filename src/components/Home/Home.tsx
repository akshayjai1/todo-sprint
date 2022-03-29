import { Card } from '../Card/Card';
import style from './Home.module.scss';
export const Home = () => {
  return (
    <div className={style.home}>
      <Card title="All todos" content={null} cardClass="all" />
      <Card title="Assigned to you" content={null} cardClass="assigned" />
      <Card title="Created by you" content={null} cardClass="created" />
      <Card title="Reminders" content={null} cardClass="reminder" />
      <Card title="Routine" content={null} cardClass="routine" />
    </div>
  );
};
