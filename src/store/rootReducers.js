import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import authentication from './userData/reducer'

export default (history) =>
    combineReducers({
        router: connectRouter(history),
        authentication,
    })
