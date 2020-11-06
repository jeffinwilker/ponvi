import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Acompanhamento from './pages/Acompanhamento';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/acompanhamento" component={Acompanhamento} />
            </Switch>
        </BrowserRouter>
    );
}
