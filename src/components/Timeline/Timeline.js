import React, { Component } from 'react';
import styles from './Timeline.module.scss';

class Timeline extends Component {

    render() {
        const { children } = this.props;

        return (
            <div className={styles.Timeline}>
                {children}
            </div>
        );
    }
}

export default Timeline;