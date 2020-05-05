import React, { Component } from 'react';
import styles from './AboutMe.module.scss';

import PageTitle from '../PageTitle/PageTitle';
import ContentContainer from '../ContentContainer/ContentContainer';
import SplitContainer from '../SplitContainer/SplitContainer';
import WithAnimation from '../../hoc/WithAnimation/WithAnimation';

// Images
import me from '../../images/profile_pic_website.png';

/**
 * Our About Me component
 */
class AboutMe extends Component {
    state = {
        content: [
            'I am a self taught Software Engineer who graduated from the University of Waterloo. Although my official degree is a Bachelor of Science in Health Studies, my true passion was in the field of software. This led me to pursue a Health Informatics specialization and a minor in Computer Science, as well as enrolling in extra curricular computer science courses to further develop my skills.',
            'After exposing myself to different programming languages, I was able to develop multiple web applications as well as exploring the video game industry by developing games of my own. With this experience, I decided to pursue a professional career in software engineering.',
            'My professional work experience consists of web application development on both the client and server side, database management and script writing.'
        ]
    }

    render() {
        const { title, id } = this.props;
        const { content } = this.state;
        const leftContent = content.map((content, index) => {
            return (
                <WithAnimation animation='right' type='scroll'>
                    <p key={index}>{content}</p>
                </WithAnimation>
            );
        });

        const rightContent = (
            <WithAnimation animation='left' type='scroll'>
                <div>
                    <img src={me} alt='' />
                </div>
            </WithAnimation>
        )

        return (
            <div className={styles.AboutMe} id={id}>
                <PageTitle title={title} />
                <WithAnimation animation='up' type='scroll'>
                    <ContentContainer>
                        <SplitContainer
                            left={leftContent}
                            right={rightContent}
                            split='50'
                            polar={true} />
                    </ContentContainer>
                </WithAnimation>
            </div>
        );
    }
}

export default AboutMe;
