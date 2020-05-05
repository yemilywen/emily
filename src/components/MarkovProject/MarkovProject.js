import React, { Component } from 'react';
import styles from './MarkovProject.module.scss';
import trump_pic from './trump_pic.jpg'
import markovChainJSON from './markov_chain';

import { getRandomNumberBetween } from '../../util/Math';

class MarkovProject extends Component {

    state = {
        pageTitle: "Trump Tweet Generator by Ian Chuck-Yin",
        buttonText: "GENERATE FAKE TWEET!",
        currentTweet: '',
        timeStamp: '',
        numComments: 0,
        numRetweets: 0,
        numLikes: 0,
        tweetInfo: {
            userImage: trump_pic,
            userName: 'Donald J. Trump',
            userTwitterName: '@realDonaldTrump'
        },
        projectDescription: {
            title: "Tweet Generator Using Markov Chains",
            subTitle: "Languages used: Python, JavaScript",
            content:
                ["This project uses the Twitter API to stream tweets of US President Donald Trump, through oauth2 authentication. A Python script is run to authenticate and stream tweets from Jan 1, 2016 through Jan 1, 2019 in batches of 100 tweets. These tweets are then compiled into a text document.",

                    "A second Python script is then used to read this compilation of tweets where the data is cleaned before being processed into a Markov Chain. The Markov Chain is built by tokenizing each tweet and determining the probabilities of each subsequent word appearing in the generated text, until the algorithm hits a 'stop' word. The Markov Chain is then exported in a JSON file and is read by a JavaScript file to display results in the browser.",

                    "The current Markov Chain is built by a collection of 1136 tweets."]
        }
    }

    markovChainBody = null;
    markovStartingWords = null;
    markovStopWords = null;

    constructor(props) {
        super(props);
        this._loadMarkovChain();
    }

    componentDidMount() {
        this._generateTweet();
    }

    _loadMarkovChain() {
        const markovChain = JSON.parse(markovChainJSON());
        this.markovChainBody = markovChain.body;
        this.markovStartingWords = markovChain.starting_words;
        this.markovStopWords = markovChain.stop_words;
    }

    _generateTweet() {
        let generatedText = "";
        let isGenerating = true;
        let randomIndex = getRandomNumberBetween(0, this.markovStartingWords.length - 1);

        let word = this.markovStartingWords[randomIndex];

        generatedText += word;
        while (isGenerating) {
            randomIndex = getRandomNumberBetween(0, this.markovChainBody[word].length - 1);
            let nextWord = this.markovChainBody[word][randomIndex];

            generatedText += " " + nextWord;
            word = nextWord;

            if ((this.markovStopWords.indexOf(nextWord[nextWord.length - 1]) >= 0 || nextWord.length === 0) && nextWord !== "J.") {
                isGenerating = false;
            }
        }

        this.setState({ currentTweet: generatedText });
        this._generateRandomExtraInfo();
    }

    _generateRandomExtraInfo() {
        const numOfComments = getRandomNumberBetween(15, 35) + "K";
        const numOfRetweets = getRandomNumberBetween(20, 45) + "K";
        const numOfLikes = getRandomNumberBetween(100, 230) + "K";

        this.setState({
            numComments: numOfComments,
            numRetweets: numOfRetweets,
            numLikes: numOfLikes
        });
    }

    render() {
        const {
            pageTitle,
            buttonText,
            currentTweet,
            timeStamp,
            numComments,
            numRetweets,
            numLikes,
            tweetInfo,
            projectDescription
        } = this.state;

        const descriptionContent = projectDescription.content.map((description, index) => {
            return (
                <p key={index}>{description}</p>
            );
        });

        return (
            <div className={styles.MarkovProject}>
                <div>
                    <p className={styles.title}>{pageTitle}</p>
                    <hr />
                    <div className={styles.buttonContainer}>
                        <button onClick={() => this._generateTweet()}>{buttonText}</button>
                    </div>
                    <div className={styles.tweetContainer}>
                        <div className={styles.tweetHeader}>
                            <div className={styles.stickyHeader}>
                                <img src={tweetInfo.userImage} className={styles.userAvatar} alt='' />
                                <span className={styles.userName}>{tweetInfo.userName}</span>
                                <span className={styles.twitterName}>{tweetInfo.userTwitterName}</span>
                            </div>
                            <button className={styles.followButton}>Follow</button>
                        </div>
                        <p className={styles.tweetText}>{currentTweet}</p>
                        <div className={styles.extraContainer}>
                            <p className={styles.timestamp}>{timeStamp}</p>
                            <div className={styles.statusFooter}>
                                <div className={styles.footerItem}>
                                    <i className="fas fa-comment"></i>
                                    {numComments}
                                </div>
                                <div className={styles.footerItem}>
                                    <i className="fas fa-retweet"></i>
                                    {numRetweets}
                                </div>
                                <div className={styles.footerItem}>
                                    <i className="fas fa-heart"></i>
                                    {numLikes}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.projectDescription}>
                        <p className={styles.title}>{projectDescription.title}</p>
                        <p className={styles.subtitle}>{projectDescription.subTitle}</p>
                        {descriptionContent}
                        <p>
                            The code can be found on my GitHub <a href="https://github.com/IanChuckYin/trump_tweet_generator">here.</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MarkovProject;
