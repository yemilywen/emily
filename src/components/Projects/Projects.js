import React, { Component } from 'react';
import styles from './Projects.module.scss';

import PageTitle from '../PageTitle/PageTitle';
import ProjectPanel from './ProjectPanel/ProjectPanel';
import ProjectPanelContent from './ProjectPanelContent/ProjectPanelContent';
import ContentContainer from '../ContentContainer/ContentContainer';
import Grid from '../Grid/Grid';
import WithAnimation from '../../hoc/WithAnimation/WithAnimation';
import { routeToNewTabHashed, routeToNewTab } from '../../util/RouteUtil';

// Images
import unityLogo from '../../images/unity_logo.png';
import twitterLogo from '../../images/twitter_logo.png';
import youtubeLogo from '../../images/youtube_logo.png';

class Projects extends Component {
    state = {
        projects: [
            {
                imageUrl: twitterLogo,
                textContent: {
                    title: "Trump Tweet Generator",
                    subtitle: "Python, JavaScript",
                    description: "A machine learning project that uses the Markov Chain model to generate a fake tweet from Donald Trump.",
                    features: [
                        "Used Python to stream tweets using the Twitter API",
                        "Built Markov Chain to recognize speech patterns from streamed tweets and to generate a tweet based on these patterns",
                        "Markov Chain model built from 1136 compiled tweets"
                    ]
                },
                panelButtons: [
                    {
                        label: "DEMO",
                        url: '/tweet_generator',
                        onClickEvent: this._routeToNewTabHashed.bind(this)
                    },
                    {
                        label: "VIEW CODE",
                        url: 'https://github.com/IanChuckYin/trump_tweet_generator',
                        onClickEvent: this._routeToNewTab.bind(this)
                    }
                ]
            },
            {
                imageUrl: unityLogo,
                textContent: {
                    title: "Knights",
                    subtitle: "C#",
                    description: "WebGL game built on the Unity engine",
                    features: [
                        "Complete animations for all units",
                        "Background music and audio for all actions",
                        "Unit upgrade system and unique abilities for all units",
                        "Level design"
                    ]
                },
                panelButtons: [
                    {
                        label: "DEMO",
                        url: '/knights',
                        onClickEvent: this._routeToNewTabHashed.bind(this)
                    },
                    {
                        label: "VIEW CODE",
                        url: 'https://github.com/IanChuckYin/knights-game',
                        onClickEvent: this._routeToNewTab.bind(this)
                    }
                ]
            },
            {
                imageUrl: youtubeLogo,
                textContent: {
                    title: "YouTube Webscraper",
                    subtitle: "Python",
                    description: "A web scraper that goes into anyone's YouTube channel and collects data about their sponsors from their videos.",
                    features: [
                        "Written using the Selenium automation tool, BeautifulSoup4 and ChromeDriver",
                        "Exports an Excel file containing data about a channel's sponsor links",
                        "Running the script against the same channel will update the existing Excel file with the new data"
                    ]
                },
                panelButtons: [
                    {
                        label: "VIEW CODE",
                        url: 'https://github.com/IanChuckYin/youtube-scraper',
                        onClickEvent: this._routeToNewTab.bind(this)
                    }
                ]
            }
        ]
    }

    _routeToNewTabHashed(panelButton) {
        routeToNewTabHashed(panelButton.url);
    }

    _routeToNewTab(panelButton) {
        routeToNewTab(panelButton.url);
    }

    _renderProjectPanels() {
        const { projects } = this.state;
        const projectPanels = projects.map((project, index) => {
            const { imageUrl, panelButtons, textContent } = project;
            const { title, subtitle, description, features } = textContent;

            const projectPanelContent = (
                <ProjectPanelContent
                    theme='light'
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    features={features} />
            );
            return (
                <WithAnimation animation='expand' type='scroll' key={index}>
                    <ProjectPanel
                        size='large'
                        image={imageUrl}
                        buttons={panelButtons}>
                        {projectPanelContent}
                    </ProjectPanel>
                </WithAnimation>
            );
        });
        return projectPanels
    }

    render() {
        const { title, id } = this.props;
        const projectPanels = this._renderProjectPanels();

        return (
            <div className={styles.Projects} id={id}>
                <PageTitle title={title} />
                <WithAnimation animation='up' type='scroll'>
                    <ContentContainer>
                        <Grid type='center'>
                            {projectPanels}
                        </Grid>
                    </ContentContainer>
                </WithAnimation>
            </div>
        );
    }
}

export default Projects;
