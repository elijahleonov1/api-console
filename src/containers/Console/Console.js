import React, { useEffect } from 'react'
import Header from '@components/Header'
const Console = () => {
    const fullScreen = () => {}
    const logout = () => {}

    return (
        <div style={{ width: '100%' }}>
            <Header
                email={'ssss@asd.com'}
                sublogin={'sss'}
                handlerFullScreen={fullScreen}
                handlerLogout={logout}
            />
        </div>
    )
}

export default Console
