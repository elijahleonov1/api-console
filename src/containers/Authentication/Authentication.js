import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fethAuth } from '@actions'

import utils from '@utils/common'

import Logo from '@components/Logo'
import Input from '@components/Input'
import Button from '@components/Button'
import ErrorAlert from '@components/ErrorAlert'
import GitLink from '@components/GitLink'
import './styled.scss'

const Authentication = ({ isAuth, errorMessageAuth, fetchLogin }) => {
    const [login, setLogin] = useState('')
    const [sublogin, setSublogin] = useState('')
    const [password, setPassword] = useState('')

    const [errorLogin, setErrorLogin] = useState(false)
    const [errorSublogin, setErrorSublogin] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    const handlerLogin = (value) => setLogin(value)
    const handlerSubLogin = (value) => setSublogin(value)
    const handlerPassword = (value) => setPassword(value)

    const handlerSubmit = (e) => {
        e.preventDefault()

        const isLoginValid = utils.validation.email(login, 5) || true
        const isPasswordValid = utils.validation.password(password, 5)
        const isSubloginValid =
            sublogin.length > 0 ? utils.validation.sublogin(sublogin) : true

        setErrorLogin(!isLoginValid)
        setErrorSublogin(!isSubloginValid)
        setErrorPassword(!isPasswordValid)

        if (!isLoginValid || !isSubloginValid || !isPasswordValid) return

        fetchLogin({ login, sublogin, password })

        setLogin('')
        setSublogin('')
        setPassword('')
    }

    return (
        <div className="Authentication-wrapper">
            <div className="Authentication-container">
                <div className="Authentication-logo">
                    <Logo />
                </div>
                <form className="Authentication" onSubmit={handlerSubmit}>
                    <h4 className="Authentication-title">API-консолька</h4>
                    <ErrorAlert
                        isShow={!!errorMessageAuth}
                        title={'Вход не вышел'}
                        errorText={errorMessageAuth}
                    />
                    <div className="Authentication-input">
                        <Input
                            rightLable={'Логин'}
                            value={login}
                            isError={errorLogin}
                            handlerChange={handlerLogin}
                        />
                    </div>
                    <div className="Authentication-input">
                        <Input
                            rightLable={'Сублогин'}
                            leftLable={'опционально'}
                            value={sublogin}
                            isError={errorSublogin}
                            handlerChange={handlerSubLogin}
                        />
                    </div>
                    <div className="Authentication-input">
                        <Input
                            type={'password'}
                            rightLable={'Пароль'}
                            isError={true}
                            value={password}
                            isError={errorPassword}
                            handlerChange={handlerPassword}
                        />
                    </div>
                    <div className="Authentication-button">
                        <Button text={'Войти'} />
                    </div>
                </form>
                <GitLink>@elijah___leonov</GitLink>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.userData.isAuth,
    errorMessageAuth: state.userData.errorMessage,
})
const mapDispatchToProps = (dispatch) => ({
    fetchLogin: ({ login, sublogin, password }) =>
        dispatch(fethAuth({ login, sublogin, password })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Authentication)
