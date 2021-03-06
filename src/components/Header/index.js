import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import s from './Header.module.scss'

import Logo from '@components/Logo'

const Header = ({
    email,
    sublogin,
    isFullScreen,
    handlerLogout,
    handlerFullScreen,
}) => {
    return (
        <header className={s.Header}>
            <div className={s.LeftPanel}>
                <Logo />
                <h1 className={s.Title}>API-консолька</h1>
            </div>

            <div className={s.RightPanle}>
                <div className={s.Login}>
                    <div className={s.Email}>{email}</div>
                    <div className={s.Separator}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={s.Sublogin}>{sublogin}</div>
                </div>
                <button className={s.Logout} onClick={handlerLogout}>
                    Выйти
                </button>
                <button
                    className={classNames(
                        s.FullScrin,
                        isFullScreen ? s.Active : ''
                    )}
                    onClick={handlerFullScreen}
                ></button>
            </div>
        </header>
    )
}

Header.propTypes = {
    email: PropTypes.string.isRequired,
    sublogin: PropTypes.string,
    isFullScreen: PropTypes.bool,
    handlerLogout: PropTypes.func,
    handlerFullScreen: PropTypes.func,
}

export default Header
