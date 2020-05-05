import React, { Component } from 'react';
import styles from './Button.module.scss';

class Button extends Component {

    render() {
        const { onButtonClick, label } = this.props;

        return (
            <div
                className={styles.Button}
                onClick={() => onButtonClick()}>
                {label}
            </div>
        )
    }
}

export default Button;