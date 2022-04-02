import style from './Button.module.scss';
interface IpButton {
  buttonClass?: string;
  text: string;
  icon?: any;
  onClick?: (event: any) => void;
  grayish?: boolean;
}
export const Button = ({
  buttonClass = '',
  icon,
  text,
  onClick,
  grayish = false,
}: IpButton) => {
  return (
    <div
      className={`${buttonClass} ${grayish ? style.grayBtn : style.purpleBtn} ${style.btn}`}
      onClick={onClick}>
      {icon ? <span className={style.btnIcon}>{icon}</span> : null}
      <span>{text}</span>
    </div>
  );
};
