import React from "react";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { IModalDetails } from './ModalDetails.interfaces';
import styles from "./ModalDetails.module.scss";

const ModalDetails = ({ closeAction, isVisible, data }: IModalDetails) => {
  const { title, desc, img = '', link } = data;
  const style = !!img
    ? { backgroundImage: `url(${img})` }
    : {}

  const handleRedirection = () => {
    window.location.href = link;
  }
  return (
    <Modal className={styles.modal} isVisible={isVisible}>
      <div className={styles.header} style={style} />
      <div className={styles.body} >
        <h4 className={styles.title}>{title}</h4>
        <span>{desc}</span>

        <div className={styles.options}>
          <Button onClick={closeAction} label='Close' outline />
          {!!link &&
            <Button onClick={handleRedirection} label='See more' />
          }
        </div>
        
      </div>
    </Modal>
  );
};

export default ModalDetails;
