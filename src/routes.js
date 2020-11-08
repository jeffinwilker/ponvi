import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {Content} from './style'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio' 
import Acompanhamento from './pages/Acompanhamento' 

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Content>
                <Switch>
                    <Route path="/" exact component={Inicio} />
                    <Route path="/acompanhamento" component={Acompanhamento} />
                </Switch>
            </Content>
        </BrowserRouter>
    );
}
