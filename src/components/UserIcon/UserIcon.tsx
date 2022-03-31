import { getInitials } from '../../shared/util';
import classes from './UserIcon.module.scss';
interface IpUserIcon {
  name: string;
  icon?: any;
  size?: number;
  invert?: boolean;
}
export const UserIcon = ({ name }: IpUserIcon) => {
  return <div className={classes.initialsIcon}>{getInitials(name)}</div>;
};
export const UserOption = ({ name, icon, invert = false }: IpUserIcon) => {
  return (
    <div className={`${classes.userOption} ${invert ? classes.invert : ''}`}>
      {icon ? (
        <div className={classes.personIcon}>{icon}</div>
      ) : (
        <UserIcon name={name} />
      )}
      <div className={classes.userOptionName}>{name}</div>
    </div>
  );
};
