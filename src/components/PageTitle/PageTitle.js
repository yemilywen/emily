import React, { Component } from 'react'
import styles from './PageTitle.module.scss';
import WithTypeAnimation from '../../hoc/WithTypeAnimation/WithTypeAnimation';

const TYPE_ANIMATION_OPTIONS = {
    speed: 50,
    type: 'scroll'
}

class PageTitle extends Component {

    render() {
        const { title } = this.props;

        return (
            <WithTypeAnimation
                className={styles.PageTitle}
                text={title}
                speed={TYPE_ANIMATION_OPTIONS.speed}
                type={TYPE_ANIMATION_OPTIONS.type}
            />
        );
    }
};

export default PageTitle;