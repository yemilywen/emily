import React, { Component } from 'react';
import styles from './Toolbar.module.scss';

import Toolbarbutton from '../ToolbarButton/ToolbarButton';
import WithAnimation from '../../../hoc/WithAnimation/WithAnimation';
import selectors from '../../../util/Selectors';
import {
    isElementVerticallyIntersectingWith,
    getMostPrevalentElement,
    rgb2hex
} from '../../../util/DomUtil';

const ANIMATION_OPTIONS = {
    animation: 'right',
    type: 'onload'
}

/**
 * Our single page application Toolbar component that does not route to different links.
 * Rather, it scrolls to the component in our SPA 
 */
class Toolbar extends Component {
    state = {
        domPages: [],
        rgbMap: {},
        selectedButton: null
    }

    // Lifecycle hook when component is mounted
    componentDidMount() {
        this._setDomPages();
        this._setReverseRGBMap();
        this._addScrollListener();
    }

    // Lifecycle hook when component is unmounted
    componentWillUnmount() {
        this._removeScrollListener();
    }

    // Adds the scroll listener
    _addScrollListener() {
        window.addEventListener('scroll', this._onScroll.bind(this));
    }

    // Removes the scroll listener
    _removeScrollListener() {
        window.removeEventListener('scroll', this._onScroll.bind(this));
    }

    // Scroll event
    _onScroll() {
        this._updateToolbarStyle();
        this._updateSelectedButton();
    }

    _setDomPages() {
        const { items } = this.props;
        const domPages = items.map(item => document.getElementById(item.props.id));
        this.setState({ domPages: domPages });
    }

    _setReverseRGBMap() {
        const rgbMap = {};
        rgbMap[styles.color4] = styles.color3;
        rgbMap[styles.color3] = styles.color4;
        this.setState({ rgbMap: rgbMap });
    }

    /**
     * Returns an Object that maps colors to an array of DOM elements that have that color as their background
     * @returns {Object}
     */
    _getPageElementMap() {
        const { domPages } = this.state;
        const domToolbarButtons = document.getElementsByClassName(selectors.TOOLBAR_BUTTON);
        const pageElementMap = {};
        // Create a map of all pages, and which toolbar buttons are intersecting them
        domPages.forEach((page) => {
            const currentBackgroundColor = rgb2hex(window.getComputedStyle(page).getPropertyValue('background-color'));
            Array.from(domToolbarButtons).forEach((button) => {
                if (isElementVerticallyIntersectingWith(button, page)) {
                    if (pageElementMap[currentBackgroundColor]) {
                        pageElementMap[currentBackgroundColor].push(button);
                    } else {
                        pageElementMap[currentBackgroundColor] = [button];
                    }
                }
            });
        });
        return pageElementMap;
    }

    // Updates the colors of our toolbar buttons according to the pageElementMap
    _updateToolbarStyle() {
        const { rgbMap } = this.state;
        const pageElementMap = this._getPageElementMap();

        Object.keys(pageElementMap).forEach((colorKey) => {
            pageElementMap[colorKey].forEach(element => {
                const buttonBorder = element.getElementsByClassName(selectors.TOOLBAR_BUTTON_BORDER)[0];
                buttonBorder.style.borderColor = rgbMap[colorKey];
                element.style.color = rgbMap[colorKey];
            });
        });
    }

    // Update the selected button based on what's currently in the viewport
    _updateSelectedButton() {
        const { domPages } = this.state;
        const mostPrevalentPage = getMostPrevalentElement(domPages);
        this.setState({ selectedButton: mostPrevalentPage.id });
    }

    /**
     * Returns a boolean that determines if the given button ID is selected
     * @return {Boolean}
     */
    _isButtonSelected(itemId) {
        return itemId === this.state.selectedButton;
    }

    // General toolbar button click
    _onButtonClick(item) {
        const { id } = item.props;
        const domElement = document.getElementById(id);
        this._scrollIntoView(domElement);
    }

    /**
     * Scrolls into view of the specified DOM element
     * @param {Element} domElement The DOM element to scroll into view
     */
    _scrollIntoView(domElement) {
        domElement.scrollIntoView({ behavior: "smooth" });
    }

    // Render the toolbar components
    _renderToolbarButtons() {
        const { items } = this.props;
        const renderedButtons = items.map((item, index) => {
            const { title, id } = item.props;
            return (
                <Toolbarbutton
                    key={index}
                    selected={this._isButtonSelected(id)}
                    buttonLabel={title}
                    onClick={() => this._onButtonClick(item)}
                />
            );
        });
        return renderedButtons;
    }

    render() {
        return (
            <WithAnimation
                className={styles.Toolbar}
                animation={ANIMATION_OPTIONS.animation}
                type={ANIMATION_OPTIONS.type}>
                {this._renderToolbarButtons()}
            </WithAnimation>
        );
    }
}

export default Toolbar;
