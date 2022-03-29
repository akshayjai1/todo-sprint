import { Button } from '../Button/Button';
interface IpRowAction {
  text: string;
  actionText: string;
  onClick: (event: Event) => void;
}
export const RowAction = ({ text, actionText, onClick }: IpRowAction) => {
  return (
    <div>
      <div>{text}</div>
      <div>
        <Button text={actionText} onClick={onClick} />
      </div>
    </div>
  );
};
