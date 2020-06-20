import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import userData from './userData/reducer'

export default (history) =>
    combineReducers({
        router: connectRouter(history),
        userData,
    })
