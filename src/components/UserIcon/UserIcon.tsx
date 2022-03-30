import { getInitials } from '../../shared/util';
import classes from './UserIcon.module.scss';
interface IpUserIcon {
  name: string;
}
export const UserIcon = ({ name }: IpUserIcon) => {
  return <div className={classes.icon}>{getInitials(name)}</div>;
};
export const UserOption = ({ name }: IpUserIcon) => {
  return (
    <div className={classes.userOption}>
      <UserIcon name={name} />
      <div className={classes.userOptionName}>{name}</div>
    </div>
  );
};
