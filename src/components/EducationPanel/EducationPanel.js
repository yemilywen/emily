import React, { Component } from 'react';
import styles from './EducationPanel.module.scss';

import SplitContainer from '../SplitContainer/SplitContainer';
import WithAnimation from '../../hoc/WithAnimation/WithAnimation';
import Aux from '../../hoc/Aux/Aux';

class EducationPanel extends Component {

    render() {
        const { iconItems, content, logo } = this.props;
        const renderedIconItems = iconItems.map((item, index) => {
            return (
                <div key={index} className={styles.EducationIconItem}>
                    <i className={item.icon} />
                    <div>{item.label}</div>
                </div>
            );
        });

        const renderedContent = content.map((description, index) => {
            return (
                <p key={index}>{description}</p>
            )
        });

        const leftSide = (
            <Aux>
                {renderedIconItems}
                {renderedContent}
            </Aux>
        )

        const rightSide = (
            <WithAnimation animation='expand' type='scroll'>
                <img className={styles.Image} src={logo} alt='' />
            </WithAnimation>
        )

        return (
            <div className={styles.EducationPanel}>
                <SplitContainer split='70' left={leftSide} right={rightSide} />
            </div>
        );
    }
}

export default EducationPanel;