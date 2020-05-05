import React, { Component } from 'react';
import styles from './SkillSetPanel.module.scss';

class SkillSetPanel extends Component {

    render() {
        const { image, title, description } = this.props;

        return (
            <div className={styles.SkillSetPanel}>
                <img src={image} className={styles.Image} alt='' />
                <div className={styles.Title}>{title}</div>
                <div className={styles.Description}>{description}</div>
            </div>
        );
    }
}

export default SkillSetPanel;