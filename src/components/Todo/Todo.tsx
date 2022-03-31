import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReactSelect from 'react-select';
import DatePicker from 'react-date-picker';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { EPriority, ILabelValue, priorities } from '../../data/priority';
import { users } from '../../data/users';
import { Plus } from '../../images/Plus';
import { add, IUser, update } from '../../shared/todoSlice';
import { Button } from '../Button/Button';
import { Control } from '../Control/Control';
import { RowAction } from '../RowAction/RowAction';
import { UserOption } from '../UserIcon/UserIcon';
import style from './Todo.module.scss';
import { todosData } from '../../data/todosData';
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
  const [dueDate, setDueDate] = useState(new Date());
  const [assignee, setAssignee] = useState<ILabelValue<JSX.Element> | null>(
    null,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  console.log('navigate', location, params);
  useEffect(() => {
    if (edit && params?.id) {
      const todo = todosData.find((todo) => todo.id === params.id);
      if (todo) {
        setTodoText(todo.text);
        setPriority({ label: todo.priority, value: todo.priority });
        setDueDate(new Date(todo.dueDate));
        setAssignee(getUserOption(users.find((u) => u.id === todo.assignee))); //TODO:need to handle null case
      }
    }
  }, []);

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
            id="priority"
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
          <DatePicker
            // placeholder="Today"
            value={dueDate}
            onChange={(e: any) => {
              setDueDate(e);
            }}
          />
        </Control>
        <Control label="Assigned to">
          <ReactSelect
            id="assignee"
            isClearable
            value={assignee}
            options={users?.map(getUserOption)}
            name="assignee"
            onChange={(e) => {
              setAssignee(e);
            }}
          />
        </Control>
      </div>
      <div className={style.actionContainer}>
        <Button
          text="Cancel"
          onClick={() => {
            navigate('/all-todos');
          }}
        />
        <Button
          text={edit ? 'Save Change' : 'Add'}
          onClick={() => {
            let fn = edit ? update : add;
            dispatch(
              fn({
                id: Date.now() + '',
                text: todoText,
                status: false,
                assignee: assignee?.value,
                creator: users[8].id,
                dueDate: dueDate?.toLocaleDateString() ?? '',
                priority: priority.label,
              }),
            );
            navigate('/all-todos');
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

const getUserOption = (user?: IUser) => {
  // if (!user) {
  //   return null;
  // }
  return {
    label: <UserOption name={user?.name ?? ''} />,
    value: user?.id ?? '',
  };
};
