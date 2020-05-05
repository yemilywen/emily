import React, { Component } from 'react';
import styles from './Grid.module.scss';
import { appendStyles } from '../../util/StyleAppender';

const GRID_ENUMS = {
    spread: styles.Spread,
    center: styles.Center
}

class Grid extends Component {
    static defaultProps = {
        type: 'spread'
    }

    render() {
        const { children, type } = this.props;
        const gridType = GRID_ENUMS[type];

        return (
            <div
                className={appendStyles(styles.Grid, gridType)}>
                {children}
            </div>
        );
    }
}

export default Grid;
