import { GET_USER_DATA } from './actionType'

const initialState = {}

export default function userData(state = initialState, actions) {
    switch (actions.type) {
        case GET_USER_DATA:
            return {
                ...state,
            }
        default:
            return state
    }
}
