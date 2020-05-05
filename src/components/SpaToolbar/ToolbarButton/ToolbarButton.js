import React, { Component } from 'react';
import styles from './ToolbarButton.module.scss';

import { appendStyles } from '../../../util/StyleAppender';
import selectors from '../../../util/Selectors';

class ToolbarButton extends Component {

    render() {
        const { buttonLabel, onClick, selected } = this.props;
        const selectedStyle = selected ? styles.Selected : '';
        return (
            <div className={appendStyles(styles.ToolbarButton, selectors.TOOLBAR_BUTTON, selectedStyle)}>
                <div
                    className={appendStyles(styles.Button, selectors.TOOLBAR_BUTTON_BORDER)}
                    onClick={onClick}>
                </div>
                <div
                    className={styles.Label}
                    onClick={onClick}>
                    {buttonLabel}
                </div>
            </div>
        );
    }
}

export default ToolbarButton;
