import ConsolePanel from '@components/ConsolePanel'
import Header from '@components/Header'

import React, { useState } from 'react'

import Fullscreen from 'react-full-screen'

import s from './Console.module.scss'

const Console = () => {
    const [isFullScreen, setIsFullScreen] = useState(false)

    const toogleFullScreen = () => {
        setIsFullScreen(!isFullScreen)
    }

    const fullScreenOnChange = (enabled) => {
        if (!enabled) {
            setIsFullScreen(false)
        }
    }

    const logout = () => {}

    return (
        <div className={s.Console}>
            <Fullscreen onChange={fullScreenOnChange} enabled={isFullScreen}>
                <Header
                    email={'ssss@asd.com'}
                    sublogin={'sss'}
                    isFullScreen={isFullScreen}
                    handlerFullScreen={toogleFullScreen}
                    handlerLogout={logout}
                />
                <ConsolePanel />
            </Fullscreen>
        </div>
    )
}

export default Console
