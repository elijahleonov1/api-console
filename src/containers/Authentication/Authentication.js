import React from 'react'
import { connect } from 'react-redux'
import Logo from '@components/Logo'
import Input from '@components/Input'
import Button from '@components/Button'
import './styled.scss'

const Authentication = () => {
    const handlerLogin = (value) => {
        console.log(value)
    }

    const handlerSubLogin = (value) => {
        console.log(value)
    }

    const handlerPassword = (value) => {
        console.log(value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        console.log(1)
    }

    return (
        <div className="Authentication-wrapper">
            <div className="Authentication-container">
                <div className="Authentication-logo">
                    <Logo />
                </div>
                <form className="Authentication" onSubmit={handlerSubmit}>
                    <h4 className="Authentication-title">API-консолька</h4>
                    <div className="Authentication-input">
                        <Input
                            rightLable={'Логин'}
                            handlerChange={handlerLogin}
                        />
                    </div>
                    <div className="Authentication-input">
                        <Input
                            rightLable={'Сублогин'}
                            leftLable={'опционально'}
                            handlerChange={handlerSubLogin}
                        />
                    </div>
                    <div className="Authentication-input">
                        <Input
                            type={'password'}
                            rightLable={'Пароль'}
                            isError={true}
                            handlerChange={handlerPassword}
                        />
                    </div>
                    <div className="Authentication-button">
                        <Button text={'Войти'} />
                    </div>
                </form>
                <a href="#" target="_blank" className="link">
                    @gitn-link
                </a>
            </div>
        </div>
    )
}

export default connect(null, null)(Authentication)
