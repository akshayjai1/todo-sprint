import { Button } from '../Button/Button';
import style from './RowAction.module.scss';
interface IpRowAction {
  text: string;
  actionText: string;
  onClick: (event: Event) => void;
}
export const RowAction = ({ text, actionText, onClick }: IpRowAction) => {
  return (
    <div className={style.rowAction}>
      <div className={style.text}>{text}</div>
      <div>
        <Button text={actionText} onClick={onClick} />
      </div>
    </div>
  );
};
