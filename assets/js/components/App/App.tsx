import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
// @ts-ignore
import Home from '@components/Home';

const App = () => {
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