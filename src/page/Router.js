import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PrivateRote from './PrivatRoute'

import Authentication from '@containers/Authentication'
import Console from '@containers/Console'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" render={() => <Authentication />} />
                <PrivateRote exact path="/" render={() => <div>Home</div>} />

                <PrivateRote path="/console" render={() => <Console />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
