import React, { useEffect } from "react";
import styles from './Popup.module.scss';

import {ReactComponent as CloseIcon} from '../../images/close.svg'

const Popup = ({ show, handleClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [show]);
    return (
      show ? (
        <div className={styles.popup_overlay}>
          <div className={styles.popup}>
            <button className={styles.close_button} onClick={handleClose}>
              <CloseIcon className={styles.close_icon} />
            </button>
            <div className={styles.popup_content}>
              {children}
            </div>
          </div>
        </div>
      ) : null
    );
  };
  
  export default Popup;