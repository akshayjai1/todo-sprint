import style from './Card.module.scss';

interface IpListCard {
  onEditClick?: any;
  cardClass?: string;
  title?: string;
  children: any;
}
export const ListCard = ({
  onEditClick,
  // count = 0,
  children,
  title = '',
  cardClass = '',
}: IpListCard) => {
  return (
    <div className={`${style.card} ${style.listCard} ${cardClass}`}>
      <div className={style.title}>{title}</div>
      <div>{children}</div>
      <div className={style.footer}></div>
    </div>
  );
};
