import style from './Card.module.scss';
interface IpCard {
  title: string | JSX.Element;
  content: any;
  cardClass?: string;
  onViewAllClick?(e: any): void;
  count?: number;
}
export const Card = ({
  onViewAllClick,
  count = 0,
  content,
  title,
  cardClass,
}: IpCard) => {
  return (
    <div className={`${style.card} ${cardClass ?? ''}`}>
      <div className={style.title}>{title}</div>
      <hr className={style.hr} data-testid="card-title-hr" />
      <div>{content}</div>
      <div className={style.footer}>
        {count > 3 ? (
          <div className={style.moreContent}>{count - 3} more todos</div>
        ) : null}
        <div onClick={onViewAllClick} className={style.viewAll}>
          View all
        </div>
      </div>
    </div>
  );
};
