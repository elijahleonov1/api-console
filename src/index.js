import React from 'react'
import ReactDOM from 'react-dom'

import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import utils from '@utils'

import Router from './page/Router'
import rootReducers from './store/rootReducers'

import * as serviceWorker from './serviceWorker'

import './assets/styled/index.scss'

const AUTH = 'IS_AUTH_REDUX'

const history = createBrowserHistory()

const initialState = () => {
    const data = {}
    const authentication = utils.loadFromLocalStorege(AUTH)

    if (authentication) {
        data.authentication = authentication
    }

    return data
}

const store = createStore(
    rootReducers(history),
    initialState(),
    composeWithDevTools(applyMiddleware(compose(thunk)))
)

store.subscribe(() => {
    const { authentication } = store.getState()
    utils.saveToLocalStorege(AUTH, authentication)
})

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
