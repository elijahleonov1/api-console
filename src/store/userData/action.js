import { FETH_AUTH } from './actionType'
import * as API from '@api'

export const fethAuth = ({ login, sublogin, password }) => (dispatch) => {
    API.sendsay
        .login({
            login,
            sublogin,
            password,
        })
        .then((res) => {
            dispatch({
                type: FETH_AUTH,
                payload: {
                    isAuth: true,
                    errorMessage: null,
                },
            })
        })
        .catch(({ id, explain }) => {
            dispatch({
                type: FETH_AUTH,
                payload: {
                    isAuth: false,
                    errorMessage: JSON.stringify({ id, explain }),
                },
            })
        })
}
