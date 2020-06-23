import { FETH_AUTH } from './actionType'

const initialState = {
    isAuth: null,
    errorMessage: '',
}

export default function authentication(state = initialState, action) {
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
