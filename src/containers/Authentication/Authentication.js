import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fethAuth } from '@actions'

import utils from '@utils/common'

import Logo from '@components/Logo'
import Input from '@components/Input'
import Button from '@components/Button'
import ErrorAlert from '@components/ErrorAlert'
import GitLink from '@components/GitLink'
import s from './Authentication.module.scss'

const Authentication = ({
    isAuth,
    errorMessageAuth,
    fetchLogin,
    login: storeLogin,
    sublogin: storeSublogin,
    password: storePassword,
}) => {
    const [login, setLogin] = useState(storeLogin)
    const [sublogin, setSublogin] = useState(storeSublogin)
    const [password, setPassword] = useState(storePassword)

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
            sublogin && sublogin.length > 0
                ? utils.validation.sublogin(sublogin)
                : true

        setErrorLogin(!isLoginValid)
        setErrorSublogin(!isSubloginValid)
        setErrorPassword(!isPasswordValid)

        if (!isLoginValid || !isSubloginValid || !isPasswordValid) return

        fetchLogin({ login, sublogin, password })

        setLogin('')
        setSublogin('')
        setPassword('')
    }

    if (isAuth) {
        if (login && password) {
            fetchLogin({ login, sublogin, password })
        }
        return <Redirect push to="/console" />
    }

    return (
        <div className={s.Authentication}>
            <div className={s.AuthenticationContainer}>
                <div className={s.LogoContainer}>
                    <Logo />
                </div>
                <form className={s.Form} onSubmit={handlerSubmit}>
                    <h4 className={s.Title}>API-консолька</h4>
                    <ErrorAlert
                        isShow={!!errorMessageAuth}
                        title={'Вход не вышел'}
                        errorText={errorMessageAuth}
                    />
                    <div className={s.InputContainer}>
                        <Input
                            rightLable={'Логин'}
                            value={login}
                            isError={errorLogin}
                            handlerChange={handlerLogin}
                        />
                    </div>
                    <div className={s.InputContainer}>
                        <Input
                            rightLable={'Сублогин'}
                            leftLable={'опционально'}
                            value={sublogin}
                            isError={errorSublogin}
                            handlerChange={handlerSubLogin}
                        />
                    </div>
                    <div className={s.InputContainer}>
                        <Input
                            type={'password'}
                            rightLable={'Пароль'}
                            isError={true}
                            value={password}
                            isError={errorPassword}
                            handlerChange={handlerPassword}
                        />
                    </div>
                    <div className={s.ButtonContainer}>
                        <Button text={'Войти'} />
                    </div>
                </form>
                <GitLink>@elijah___leonov</GitLink>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    login: state.userData.login,
    sublogin: state.userData.sublogin,
    password: state.userData.password,
    isAuth: state.userData.isAuth,
    errorMessageAuth: state.userData.errorMessage,
})

const mapDispatchToProps = (dispatch) => ({
    fetchLogin: ({ login, sublogin, password }) =>
        dispatch(fethAuth({ login, sublogin, password })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Authentication)
