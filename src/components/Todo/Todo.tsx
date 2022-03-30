import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactSelect from 'react-select';
import { ILabelValue, priorities } from '../../data/priority';
import { users } from '../../data/users';
import { Plus } from '../../images/Plus';
import { add, EPriority } from '../../shared/todoSlice';
import { Button } from '../Button/Button';
import { Control } from '../Control/Control';
import { RowAction } from '../RowAction/RowAction';
import { UserOption } from '../UserIcon/UserIcon';
import style from './Todo.module.scss';
interface IpTodo {
  edit?: boolean;
}
export const Todo = ({ edit = false }: IpTodo) => {
  const [todoText, setTodoText] = useState('');
  const [priority, setPriority] = useState<ILabelValue<EPriority>>({
    label: EPriority.Low,
    value: EPriority.Low,
  });
  // const [priority, setPriority] = useState({ label: '', value: '' });
  const [dueDate, setDueDate] = useState('');
  const [assignee, setAssignee] = useState<ILabelValue<JSX.Element> | null>(
    null,
  );
  const dispatch = useDispatch();
  return (
    <div className={style.todo}>
      <h2 className={style.title}>{edit ? 'Edit' : 'Add'} Todo</h2>
      <div className={style.controlContainer}>
        <Control label="Todo">
          <input
            type="text"
            placeholder="Type here"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </Control>
        <Control label="Priority">
          <ReactSelect
            name="priority"
            isClearable={false}
            value={priority}
            onChange={(val) => {
              console.log('priority change', val);
              setPriority(val!);
            }}
            options={priorities.map((p) => ({ label: p, value: p }))}
          />
        </Control>
        <Control label="Due date">
          <input
            type="date"
            placeholder="Today"
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
          />
        </Control>
        <Control label="Assigned to">
          <ReactSelect
            isClearable
            value={assignee}
            options={users?.map((u) => ({
              label: <UserOption name={u.name} />,
              value: u.id,
            }))}
            name="assignee"
            onChange={(e) => {
              setAssignee(e);
            }}
          />
        </Control>
      </div>
      <div className={style.actionContainer}>
        <Button text="Cancel" onClick={() => {}} />
        <Button
          text={edit ? 'Save Change' : 'Add'}
          onClick={() => {
            dispatch(
              add({
                id: Date.now() + '',
                text: todoText,
                status: false,
                assignee: assignee?.value,
                creator: users[8].id,
                dueDate,
                priority: priority.label,
              }),
            );
          }}
          icon={<Plus />}
        />
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
