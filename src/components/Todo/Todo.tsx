import ReactSelect from 'react-select';
import { priority } from '../../data/priority';
import { users } from '../../data/users';
import { Plus } from '../../images/Plus';
import { Button } from '../Button/Button';
import { Control } from '../Control/Control';
import { RowAction } from '../RowAction/RowAction';
import { UserOption } from '../UserIcon/UserIcon';
import style from './Todo.module.scss';
interface IpTodo {
  edit?: boolean;
}
export const Todo = ({ edit = false }: IpTodo) => {
  return (
    <div className={style.todo}>
      <h2 className={style.title}>{edit ? 'Edit' : 'Add'} Todo</h2>
      <div className={style.controlContainer}>
        <Control label="Todo">
          <input type="text" placeholder="Type here" />
        </Control>
        <Control label="Priority">
          <ReactSelect
            name="priority"
            onChange={() => {}}
            options={priority.map((p) => ({ label: p, value: p }))}
          />
        </Control>
        <Control label="Due date">
          <input type="date" placeholder="Today" />
        </Control>
        <Control label="Assigned to">
          <ReactSelect
            isClearable
            options={users?.map((u) => ({
              label: <UserOption name={u.name} />,
              value: u.id,
            }))}
            name="assignee"
            // value={users[0]?.id}
            onChange={(e) => {
              return e;
            }}
          />
        </Control>
      </div>
      <div className={style.actionContainer}>
        <Button text="Cancel" onClick={() => {}} />
        <Button text="Save" onClick={() => {}} icon={<Plus />} />
      </div>
      {edit && (
        <>
          <hr className={style.hr} />
          <RowAction
            text="Mark this todo complete"
            actionText="Mark complete"
            onClick={() => {}}
          />
          <hr className={style.hr} />
          <RowAction
            text="Do you want to delete this todo ?"
            actionText="Delete todo"
            onClick={() => {}}
          />
        </>
      )}
    </div>
  );
};
