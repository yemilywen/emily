import React, { Component } from 'react';
import styles from './Modal.module.scss';

class Modal extends Component {

    modalDomElement = null;

    render() {
        const { component, onCloseClick } = this.props;

        return (
            <div className={styles.Modal} ref={element => this.modalDomElement = element}>
                <div className={styles.ModalContainer}>
                    <button className={styles.CloseButton} onClick={() => onCloseClick()}>
                        <i className="fas fa-times" />
                    </button>
                    {component}
                </div>
            </div>
        );
    }
}

export default Modal;
