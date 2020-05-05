import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';

class Layout extends Component {

    render() {
        const { children } = this.props;
        return (
            <Aux>
                <main>
                    {children}
                </main>
            </Aux>
        );
    }
}
export default Layout;