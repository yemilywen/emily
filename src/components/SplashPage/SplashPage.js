import React, { Component } from 'react';
import styles from './SplashPage.module.scss';

import WithAnimation from '../../hoc/WithAnimation/WithAnimation';
import WithTypeAnimation from '../../hoc/WithTypeAnimation/WithTypeAnimation';

const TYPE_ANIMATION_OPTIONS = {
    speed: 80,
    type: 'onload'
}

const CONTAINER_ANIMATION_OPTIONS = {
    animation: 'fadeIn',
    type: 'onload'
}

const CONTENT_ANIMATION_OPTIONS = {
    animation: 'up',
    type: 'onload'
}

class SplashPage extends Component {
    state = {
        title: "EMILY WEN",
        subtitle: "DATA ANALYST"
    }

    render() {
        const { title, subtitle } = this.state;
        const { image } = this.props;

        return (
            <WithAnimation
                animation={CONTAINER_ANIMATION_OPTIONS.animation}
                type={CONTAINER_ANIMATION_OPTIONS.type}>
                <div className={styles.SplashPage}>
                    <WithAnimation
                        animation={CONTENT_ANIMATION_OPTIONS.animation}
                        type={CONTENT_ANIMATION_OPTIONS.type}>
                        <div className={styles.SplashContent}>
                            <WithTypeAnimation
                                className={styles.Title}
                                text={title}
                                speed={TYPE_ANIMATION_OPTIONS.speed}
                                type={TYPE_ANIMATION_OPTIONS.type}
                            />
                            <WithTypeAnimation
                                className={styles.Content}
                                text={subtitle}
                                speed={TYPE_ANIMATION_OPTIONS.speed}
                                type={TYPE_ANIMATION_OPTIONS.type}
                            />
                        </div>
                    </WithAnimation>
                    <div className={styles.SplashImageContainer}>
                        <img
                            className={styles.SplashImage}
                            src={image}
                            alt="splash" />
                    </div>
                </div>
            </WithAnimation>
        );
    }
}

export default SplashPage;
