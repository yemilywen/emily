import React, { Component } from 'react';
import styles from './ContentContainer.module.scss';

class ContentContainer extends Component {

    render() {
        const { children } = this.props;
        return (
            <div className={styles.ContentContainer}>
                {children}
            </div>
        );
    }
}

export default ContentContainer;