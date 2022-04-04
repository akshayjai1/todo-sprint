import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactSelect from 'react-select';
import DatePicker from 'react-date-picker';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { EPriority, ILabelValue, priorities } from '../../data/priority';
import { users } from '../../data/users';
import { Plus } from '../../images/Plus';
import {
  add,
  IUser,
  remove,
  update,
  toggleStatus,
} from '../../shared/todoSlice';
import { Button } from '../Button/Button';
import { Control } from '../Control/Control';
import { RowAction } from '../RowAction/RowAction';
import { UserOption } from '../UserIcon/UserIcon';
import style from './Todo.module.scss';
import { RootState } from '../../shared/store';
import { Modal } from '../Modal/Modal';
import { hideModal, showModal } from '../../shared/modalSlice';
interface IpTodo {
  edit?: boolean;
}
export const Todo = ({ edit = false }: IpTodo) => {
  const {
    modal: { show },
  } = useSelector((state: RootState) => state)['modal'] ?? {
    modal: { show: false },
  };
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
  const { todos } = useSelector((state: RootState) => state)['todo'] ?? {
    todos: [],
  };
  const todo = useMemo(() => {
    if (edit && params?.id) {
      const todo = todos.find((todo) => todo.id === params.id);
      return todo;
    }
  }, [params.id, edit, todos]);
  useEffect(() => {
    if (todo) {
      setTodoText(todo.text);
      setPriority({ label: todo.priority, value: todo.priority });
      setDueDate(new Date(todo.dueDate));
      setAssignee(getUserOption(users.find((u) => u.id === todo.assignee))); //TODO:need to handle null case
    } else {
      if (edit) {
        alert(
          `Todo with id ${params.id} was not found, Navigating to Listing page`,
        );
        navigate('/all-todos');
      }
    }
  }, [params.id, navigate, todo]);

  return (
    <div className={style.todo}>
      {show && (
        <Modal
          modalContent="Are you sure you want to delete this todo? This action is irreversible."
          onApprove={() => {
            dispatch(hideModal());
            dispatch(remove(params.id!));
            navigate('/all-todos');
          }}
        />
      )}
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
          grayish
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
                id: edit ? params.id! : Date.now() + '',
                text: todoText,
                status: false,
                assignee: assignee?.value,
                creator: users[8].id,
                dueDate: dueDate?.toDateString() ?? '',
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
            text={`Mark this todo ${todo?.status ? 'in' : ''}complete`}
            actionText={`Mark ${todo?.status ? 'in' : ''}complete`}
            onClick={() => {
              dispatch(toggleStatus(params.id!));
              navigate('/all-todos');
            }}
          />
          <hr className={style.hr} />
          <RowAction
            text="Do you want to delete this todo ?"
            actionText="Delete todo"
            onClick={() => {
              dispatch(showModal());
            }}
          />
        </>
      )}
    </div>
  );
};

const getUserOption = (user?: IUser) => {
  return {
    label: <UserOption name={user?.name ?? ''} />,
    value: user?.id ?? '',
  };
};
