import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducers from './store/rootReducers'

import App from './page/App'
import * as serviceWorker from './serviceWorker'

import './assets/styled/index.scss'

const history = createBrowserHistory()

const store = createStore(
    rootReducers(history),
    composeWithDevTools(
        applyMiddleware(compose(thunk, routerMiddleware(history)))
    )
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
