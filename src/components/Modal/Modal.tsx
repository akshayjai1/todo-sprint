import style from './Modal.module.scss';
interface IpModal {
  modalClass?: string;
  modalContent: any;
}
export const Modal = ({ modalClass = '', modalContent }: IpModal) => {
  return (
    <div className={`${modalClass} ${style.modalClass}`}>
      <div className={`${modalClass} ${style.modalContent}`}>
        <span className={`${modalClass} ${style.closeButton}`}>x</span>
        {modalContent}
      </div>
    </div>
  );
};
