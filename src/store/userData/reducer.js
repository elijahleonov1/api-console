import { FETH_AUTH } from './actionType'

const initialState = {
    isAuth: null,
    errorMessage: null,
}

export default function userData(state = initialState, actions) {
    switch (actions.type) {
        case FETH_AUTH:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
