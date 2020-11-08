import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {Content, SystemTitle} from './style'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio' 
import Acompanhamento from './pages/Acompanhamento' 

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Content>
                <SystemTitle>Sitema de ponto</SystemTitle>
                <Switch>
                    <Route path="/" exact component={Inicio} />
                    <Route path="/acompanhamento" component={Acompanhamento} />
                </Switch>
            </Content>
        </BrowserRouter>
    );
}
