import style from './Button.module.scss';
interface IpButton {
  buttonClass?: string;
  text: string;
	icon?: string;
	onClick?: (event:any) => void;
}
export const Button = ({ buttonClass = '', icon, text,onClick }: IpButton) => {
  return (
    <button className={`${buttonClass} ${style.button}`} onClick={onClick}>
      {icon ? icon : null}
      {` `}
      {text}
    </button>
  );
};
