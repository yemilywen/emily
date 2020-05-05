import React, { Component } from 'react';
import styles from './ProjectPanelContent.module.scss';

import { appendStyles } from '../../../util/StyleAppender';

const THEME = {
    light: styles.Light,
    dark: styles.Dark
}

class ProjectPanelContent extends Component {
    static defaultProps = {
        theme: 'light'
    }

    render() {
        const { title, subtitle, description, features, theme } = this.props;
        const panelFeatures = features.map((feature, index) => <p key={index}>{feature}</p>);
        const panelTheme = THEME[theme];
        return (
            <div className={appendStyles(styles.ProjectPanelContent, panelTheme)}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.features}>{panelFeatures}</div>
            </div>
        );
    }
}

export default ProjectPanelContent;
