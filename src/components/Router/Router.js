import React, { Component } from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Aux from '../../hoc/Aux/Aux';

const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * The componenet that handles all of our routes
 * @param {Array<Objects>} routes   An array of objects in the format of { path: String, component: Component}
 * @param {Boolean} isHash          A boolean to configure if we want to hash our routes
 */
class Router extends Component {

  static defaultProps = {
      isHash: false
  }

  render() {
    const { routes, isHash } = this.props;

    const switchRoutes = (
        <Switch>
          {routes.map((route, index) => {
              return (
                <Route key={index} exact path={route.path} component={route.component} />
              );
          })}
          <Redirect to={PUBLIC_URL} />
        </Switch>
    );

    const router = isHash ? (
        <HashRouter basename={PUBLIC_URL}>
            {switchRoutes}
        </HashRouter>
    ) : <Aux>
            {switchRoutes}
        </Aux>

    return (
        <Layout>
          {router}
        </Layout>
    );
  }
}

export default Router;
