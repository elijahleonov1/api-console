import { FETH_AUTH } from './actionType'

const initialState = {
    isAuth: null,
    errorMessage: null,
}

export default function userData(state = initialState, action) {
    switch (action.type) {
        case FETH_AUTH:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
