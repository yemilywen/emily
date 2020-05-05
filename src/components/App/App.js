import React, { Component } from 'react';
import styles from './App.module.scss';

import Home from '../Home/Home';
import MarkovProject from '../MarkovProject/MarkovProject';
import Router from '../Router/Router';

/**
 * The root of our App
 */
class App extends Component {
  state = {
    routes: [
      {
        component: MarkovProject,
        path: '/tweet_generator'
      },
      {
        component: Home,
        path: '/'
      }
    ]
  }

  render() {
    const { routes } = this.state;

    return (
      <div className={styles.App}>
        <Router routes={routes} isHash={true} />
      </div>
    );
  }
}

export default App;
