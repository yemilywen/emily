import React, { Component } from 'react';
import styles from '../Timeline.module.scss';

import WithAnimation from '../../../hoc/WithAnimation/WithAnimation';
import SplitContainer from '../../SplitContainer/SplitContainer';
import { appendStyles } from '../../../util/StyleAppender';
import { isEven, isOdd } from '../../../util/Math';
import Aux from '../../../hoc/Aux/Aux';

class TimelineContainer extends Component {

    render() {
        const { children, header } = this.props;

        const timelinePanels = children.map((panel, index) => {
            const panelContentBlock = (
                <div className={styles.TimelinePanel}>
                    {panel}
                </div>
            );

            const panelImageBlock = (
                <div className={styles.ImageContainer}>
                    <img src={panel.props.image} alt='' />
                </div>
            )

            const leftContent = isEven(index) ? panelContentBlock : panelImageBlock;
            const rightContent = isOdd(index) ? panelContentBlock : panelImageBlock;

            const leftSide = (
                <div className={appendStyles(styles.container, styles.left)}>
                    <WithAnimation animation='right' type='scroll' fill={true}>
                        {leftContent}
                    </WithAnimation>
                </div>
            );

            const rightSide = (
                <div className={appendStyles(styles.container, styles.right)}>
                    <WithAnimation animation='left' type='scroll' fill={true}>
                        {rightContent}
                    </WithAnimation>
                </div>
            );

            return (
                <SplitContainer
                    key={index}
                    split='50'
                    left={leftSide}
                    right={rightSide}
                />
            );
        });

        return (
            <Aux>
                <WithAnimation animation='up' type='scroll'>
                    <div className={styles.TimelineHeader}>{header}</div>
                </WithAnimation>
                {timelinePanels}
            </Aux>
        );
    }
}

export default TimelineContainer;