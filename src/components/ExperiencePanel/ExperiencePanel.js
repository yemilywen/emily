import React, { Component } from 'react';
import styles from './ExperiencePanel.module.scss';

import WithAnimation from '../../hoc/WithAnimation/WithAnimation';
import SplitContainer from '../SplitContainer/SplitContainer';
import Aux from '../../hoc/Aux/Aux';

class ExperiencePanel extends Component {

    render() {
        const { title, subtitle, date, content, logo } = this.props;
        const experienceContent = content.map((description, index) => {
            return (
                <WithAnimation animation='up' type='scroll' key={index}>
                    <div
                        className={styles.ExperienceContent}>
                        <span className={styles.dash}></span>
                        {description}
                    </div>
                </WithAnimation>
            );
        });

        const leftSide = (
            <Aux>
                <WithAnimation animation='expand' type='scroll'>
                    <div className={styles.ExperienceTitle}>
                        {title}
                    </div>
                    <div className={styles.ExperienceSubtitle}>
                        {subtitle}
                    </div>
                    <div className={styles.ExperienceDate}>
                        {date}
                    </div>
                </WithAnimation>
            </Aux>
        );

        const rightSide = (
            <WithAnimation animation='expand' type='scroll'>
                <img className={styles.Image} src={logo} alt='' />
            </WithAnimation>
        );

        return (
            <div className={styles.ExperiencePanel}>
                <SplitContainer left={leftSide} right={rightSide} split='70' />
                {experienceContent}
            </div>
        );
    }
}

export default ExperiencePanel;