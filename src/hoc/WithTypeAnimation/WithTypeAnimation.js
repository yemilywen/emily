import React, { Component } from 'react';
import typeAnimation from './typeAnimationUtil';

import { isElementInViewport } from '../../util/DomUtil';

const TYPE_ENUMS = {
    scroll: 'SCROLL',
    onload: 'ONLOAD'
}

class WithTypeAnimation extends Component {
    domElement = null;
    animated = false;

    // Lifecycle hook when component is mounted
    componentDidMount() {
        const { type } = this.props;
        if (TYPE_ENUMS[type] === TYPE_ENUMS.onload) {
            this._animateContent();
        }
        else if (TYPE_ENUMS[type] === TYPE_ENUMS.scroll) {
            this._addScrollListener();
        }
    }

    // Lifecycle hook when component is unmounted
    componentWillUnmount() {
        const { type } = this.props;
        if (TYPE_ENUMS[type] === TYPE_ENUMS.scroll) {
            this._removeScrollListener();
        }
    }

    // Adds the scroll listener
    _addScrollListener() {
        window.addEventListener('scroll', this._onScroll.bind(this));
    }

    // Removes the scroll listener
    _removeScrollListener() {
        window.removeEventListener('scroll', this._onScroll.bind(this));
    }

    _onScroll() {
        if (isElementInViewport(this.domElement) && !this.animated) {
            this._animateContent();
            this.animated = true;
        }
    }

    _animateContent() {
        const { text, speed } = this.props;
        typeAnimation(text, this.domElement, speed);
    }

    render() {
        const { className } = this.props;
        return (
            <div className={className} ref={element => this.domElement = element}></div>
        );
    }
}

export default WithTypeAnimation;