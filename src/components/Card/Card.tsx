import style from './Card.module.scss';
interface IpCard {
  title: string;
  content: any;
  cardClass?: string;
}
export const Card = (props: IpCard) => {
  return (
    <div className={`${style.card} ${props.cardClass}`}>
      <div className={style.title}>{props.title}</div>
      <hr className={style.hr} data-testid="card-title-hr" />
      <div>{props.content}</div>
    </div>
  );
};
