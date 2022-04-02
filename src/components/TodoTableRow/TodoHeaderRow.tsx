import style from './TodoTableRow.module.scss';
// interface IpTodoHeaderRow {}
export const TodoHeaderRow = (/* {}: IpTodoHeaderRow */) => {
  return (
    <div className={`${style.row} ${style.headerRow}`}>
      <div className={style.a}></div>
      <div className={style.a}>Todo</div>
      <div className={style.a}>Status</div>
      <div className={style.a}>Priority</div>
      <div className={style.a}>Due Date</div>
      <div className={style.a}>Created By </div>
      <div className={style.a}>Assigned to</div>
      <div className={style.a}>Action</div>
    </div>
  );
};
