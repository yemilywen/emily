import React, { Component } from 'react';
import animations from './animations.module.scss';

import { appendStyles } from '../../util/StyleAppender';
import { isElementThroughViewport } from '../../util/DomUtil';

const ANIMATION_ENUMS = {
    up: animations.moveUp,
    down: animations.moveDown,
    right: animations.moveRight,
    left: animations.moveLeft,
    expand: animations.expand,
    fadeIn: animations.fadeIn
}

const TYPE_ENUMS = {
    scroll: 'SCROLL',
    onload: 'ONLOAD'
}

const unobstruct = {
    width: `${100}%`,
    height: `${100}%`,
}

class WithAnimation extends Component {
    domElement = null;
    animated = false;

    static defaultProps = {
        fill: false
    }

    componentDidMount() {
        const { type } = this.props;
        if (TYPE_ENUMS[type] === TYPE_ENUMS.onload) {
            this._onLoad();
        }
        else if (TYPE_ENUMS[type] === TYPE_ENUMS.scroll) {
            this._addScrollListener();
        }
    }

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

    // Animate the container when it's halfway through the viewport
    _onScroll() {
        const { animation } = this.props;
        if (this.domElement && isElementThroughViewport(this.domElement, 0.9) && !this.animated) {
            this._animateHiddenElement(this.domElement, ANIMATION_ENUMS[animation], animations);
            this.animated = true;
        }
    }

    _onLoad() {
        const { animation } = this.props;
        this._animateHiddenElement(this.domElement, ANIMATION_ENUMS[animation], animations);
        this.animated = true;
    }

    /**
     * Animates an element with a given animation
     * After two seconds, remove the animation class and .hide class
     */
    _animateHiddenElement = (element, animation, animations) => {
        element.classList.add(animation);
        element.classList.remove(animations.hide);
        setTimeout(() => {
            element.classList.remove(animation);
        }, 2000);
    }

    render() {
        const { children, className, fill } = this.props;
        const isFillingStyleApplied = fill ? unobstruct : {};
        return (
            <div
                style={isFillingStyleApplied}
                className={appendStyles(animations.hide, className)}
                ref={element => this.domElement = element}>
                {children}
            </div>
        );
    }
}

export default WithAnimation;