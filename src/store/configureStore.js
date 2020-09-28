import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore(
    rootReducer,
    preloadedState,
    middlewares = []
) {
    const enhancers = []
    const middlewareEnhancer = applyMiddleware(...middlewares)

    if (process.env.NODE_ENV === 'development') {
        enhancers.push(composeWithDevTools())
    }

    const store = createStore(
        rootReducer,
        preloadedState,
        compose(middlewareEnhancer, ...enhancers)
    )

    return store
}
