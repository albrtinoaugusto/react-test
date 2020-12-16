import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Login from './componentes/Login';
import Dashboard from './componentes/Dashboard';


class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Dashboard />
            </BrowserRouter>
        )
    }
}

export default Main;