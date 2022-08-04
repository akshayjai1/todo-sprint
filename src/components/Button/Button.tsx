import style from './Button.module.scss';
interface IpButton {
  buttonClass?: string;
  text: string;
  icon?: any;
  onClick?: (event: any) => void;
  grayish?: boolean;
  id?: string;
}
export const Button = ({
  buttonClass = '',
  icon,
  text,
  onClick,
  id='',
  grayish = false,
}: IpButton) => {
  return (
    <div
      id={id}
      className={`${buttonClass} ${grayish ? style.grayBtn : style.purpleBtn} ${
        style.btn
      }`}
      onClick={onClick}>
      {icon ? <span className={style.btnIcon}>{icon}</span> : null}
      {text}
    </div>
  );
};
