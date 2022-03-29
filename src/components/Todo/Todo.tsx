import { Plus } from '../../images/Plus';
import { Button } from '../Button/Button';
import { Control } from '../Control/Control';
import { RowAction } from '../RowAction/RowAction';
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
          <select name="priority" value="low" onChange={() => {}}>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </Control>
        <Control label="Due date">
          <input type="date" placeholder="Today" />
        </Control>
        <Control label="Assigned to">
          <select name="assignee" value="low" onChange={() => {}}>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </Control>
      </div>
      <div className={style.actionContainer}>
        <Button text="Cancel" onClick={() => {}} />
        <Button text="Save" onClick={() => {}} icon={<Plus />} />
      </div>
      {!edit && (
        <>
          <hr />
          <RowAction
            text="Mark this todo complete"
            actionText="Mark complete"
            onClick={() => {}}
          />
          <hr />
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
