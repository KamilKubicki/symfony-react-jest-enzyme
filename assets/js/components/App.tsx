import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '@components/Home';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/app"/>
                <Route path="/app" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;