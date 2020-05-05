import React, { Component } from 'react';
import styles from './ProjectPanel.module.scss';

import { appendStyles } from '../../../util/StyleAppender';
import Button from '../../Button/Button';
import Grid from '../../Grid/Grid';

class ProjectPanel extends Component {

    SIZE = {
        large: styles.Large,
        small: styles.Small
    }

    render() {
        const { image, buttons, size, children } = this.props;
        const panelSize = this.SIZE[size];
        const renderedButtons = buttons ? buttons.map((button, index) => {
            return (
                <Button
                    key={index}
                    onButtonClick={() => button.onClickEvent(button)}
                    label={button.label} />
            );
        }) : null;

        return (
            <div className={appendStyles(styles.ProjectPanel, panelSize)}>
                <div className={styles.ImageContainer}>
                    <img src={image} alt='' />
                </div>
                <div className={styles.ContentContainer}>
                    <div className={styles.TextContainer}>
                        {children}
                    </div>
                    <div className={styles.ButtonContainer}>
                        <Grid type='spread'>
                            {renderedButtons}
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectPanel;
