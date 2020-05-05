import React, { Component } from 'react';
import styles from './SplitContainer.module.scss';
import { appendStyles } from '../../util/StyleAppender';

/**
 * @param {Boolean} middle  Boolean to align the contents of the container to the middle
 * @param {Boolean} polar   Boolean to determine if the contents are at the polars of the container
 * @param {HTML}    left    The HTML to render in the left container
 * @param {HTML}    right   The HTML to render in the right container
 * @param {String}  split   The number (as a string) to split the containers
 */
class SplitContainer extends Component {
    static defaultProps = {
        middle: false,
        polar: false
    }

    render() {
        const { left, right, split, middle, polar } = this.props;
        const leftWidth = { width: `${split}%`};
        const rightWidth = { width: `${100 - leftWidth}%`};

        const middleStyle = middle ? styles.Middle : null;

        const leftContainerStyle = appendStyles(styles.SplitContainer, middleStyle, polar ? styles.AlignLeft : null);
        const rightContainerStyle = appendStyles(styles.SplitContainer, middleStyle, polar ? styles.AlignRight : null)

        return (
            <div className={styles.Container}>
                <div className={leftContainerStyle} style={leftWidth}>
                    {left}
                </div>
                <div className={rightContainerStyle} style={rightWidth}>
                    {right}
                </div>
            </div>
        )
    }
}

export default SplitContainer;