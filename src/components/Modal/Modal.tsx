import { useDispatch } from 'react-redux';
import { InfoIcon } from '../../images/InfoIcon';
import { hideModal, toggleModal } from '../../shared/modalSlice';
import { Button } from '../Button/Button';
import style from './Modal.module.scss';
interface IpModal {
  modalClass?: string;
  modalContent: any;
  show?: boolean;
  onApprove(x: any): void;
}
export const Modal = ({
  modalClass = '',
  modalContent,
  onApprove,
  show = false,
}: IpModal) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`${modalClass} ${style.modal}`}
      onClick={() => {
        dispatch(hideModal());
      }}>
      <div className={`${modalClass} ${style.modalContent}`}>
        <div className={style.modalBody}>
          <div className={style.icon}>
            <InfoIcon />
          </div>
          <div className={style.text}>{modalContent}</div>
        </div>
        <div className={style.actionBtn}>
          <Button
            grayish
            onClick={() => {
              dispatch(toggleModal());
            }}
            text="No"></Button>
          <Button onClick={onApprove} text="Yes"></Button>
        </div>
      </div>
    </div>
  );
};
