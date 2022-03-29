import style from './Control.module.scss';
interface IpControl {
  label: string;
  children: any;
}
export const Control = ({ label = '', children }: IpControl) => {
  return (
    <div className={style.controlWrapper}>
      <label className={style.label}>{label}</label>
      {children}
    </div>
  );
};
