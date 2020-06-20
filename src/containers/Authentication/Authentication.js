import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as API from '@api'
import utils from '@utils/common'

import Logo from '@components/Logo'
import Input from '@components/Input'
import Button from '@components/Button'
import ErrorAlert from '@components/ErrorAlert'
import GitLink from '@components/GitLink'
import './styled.scss'

const auth = ({ login, sublogin, password, setErrorText }) => {
    API.sendsay
        .login({
            login,
            sublogin,
            password,
        })
        .then(() => {
            debugger
            setErrorText('')
        })
        .catch(({ id, explain }) => {
            setErrorText(JSON.stringify({ id, explain: 'explain' }))
        })
}

const Authentication = () => {
    const [login, setLogin] = useState('')
    const [sublogin, setSublogin] = useState('')
    const [password, setPassword] = useState('')

    const [errorLogin, setErrorLogin] = useState(false)
    const [errorSublogin, setErrorSublogin] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    const [errorText, setErrorText] = useState('')

    const handlerLogin = (value) => setLogin(value)
    const handlerSubLogin = (value) => setSublogin(value)
    const handlerPassword = (value) => setPassword(value)

    const handlerSubmit = (e) => {
        e.preventDefault()

        const isLoginValid = utils.validation.email(login)
        const isSubloginValid = utils.validation.sublogin(sublogin)
        const isPasswordValid = utils.validation.password(password)

        setErrorLogin(!isLoginValid)
        setErrorSublogin(!isSubloginValid)
        setErrorPassword(!isPasswordValid)

        if (!isLoginValid || !isSubloginValid || !isPasswordValid) return

        auth({ login, sublogin, password, setErrorText })

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
                        isShow={!!errorText}
                        title={'Вход не вышел'}
                        errorText={errorText}
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

export default connect(null, null)(Authentication)
