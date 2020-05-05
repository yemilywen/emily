import React, { Component } from 'react';

import Toolbar from '../SpaToolbar/Toolbar/Toolbar';
import SplashPage from '../SplashPage/SplashPage';
import { AboutMe, Projects, Resume, SkillSet } from '../../util/PageContainerUtil';
import Footer from '../Footer/Footer';
import Aux from '../../hoc/Aux/Aux';

// Images
import splashImage from '../../images/slider-bg.jpg';

/**
 * Our single page application Home page that includes the SpaToolbar, SplashPage, renderedPage, and Footer.
 * Since it's a single page application, the SpaToolbar and Footer are rendered here since we don't want
 * external routes to include these (for our projects routes)
 */
class Home extends Component {

    state = {
        pages: [
            <AboutMe id='about-me' title='ABOUT ME' />,
            <SkillSet id='skill-set' title='SKILL SET' />,
            <Projects id='projects' title='PROJECTS' />,
            <Resume id='resume' title='RESUME' />
        ]
    }

    render() {
        const { pages } = this.state;
        const renderedPages = pages.map((page, index) => {
            return <Aux key={index}>{page}</Aux>
        });

        return (
            <Aux>
                <Toolbar items={pages} />
                <SplashPage image={splashImage} />
                {renderedPages}
                <Footer />
            </Aux>
        );
    }
}

export default Home;
