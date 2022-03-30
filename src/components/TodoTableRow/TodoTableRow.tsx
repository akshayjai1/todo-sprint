import { EditIcon } from '../../images/EditIcon';
import { Square } from '../../images/Square';
import { UserIcon } from '../UserIcon/UserIcon';
import style from './TodoTableRow.module.scss';
interface IpTodoTableRow {}
export const TodoTableRow = ({}: IpTodoTableRow) => {
  return (
    <div className={style.row}>
      <div className={style.a}>
        <Square />
      </div>
      <div className={style.a}>Todo Text</div>
      <div className={style.a}>Due Date</div>
      <div className={style.a}>Priority</div>
      <div className={style.a}>
        <UserIcon name={'AB C'} />
      </div>
      <div className={style.a}>
        <UserIcon name={'AB C'} />
      </div>
      <div className={style.a}>
        Edit <EditIcon />
      </div>
    </div>
  );
};
