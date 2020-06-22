import { FETH_AUTH } from './actionType'
import * as API from '@api'

export const fethAuth = ({ login, sublogin, password }) => async (dispatch) => {
    const data = await API.sendsay.login({
        login,
        sublogin,
        password,
    })
    dispatch({
        type: FETH_AUTH,
        payload: {
            ...data,
            login,
            sublogin,
            password,
        },
    })
}
