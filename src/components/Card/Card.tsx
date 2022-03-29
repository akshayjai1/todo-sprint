import styles from './Card.module.scss';
interface IpCard {
  title: string;
  content: any;
}
export const Card = (props: IpCard) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{props.title}</div>
      <hr className={styles.hr} data-testid="card-title-hr" />
      <div>{props.content}</div>
    </div>
  );
};
