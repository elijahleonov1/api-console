import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Authentication from '../containers/Authentication/Authentication'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => <Authentication />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
