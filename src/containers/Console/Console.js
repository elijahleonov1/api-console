import React, { useEffect } from 'react'
import * as API from '@api'

const Console = () => {
    useEffect(() => {
        API.sendsay
            .request({ action: 'sys.settings.get', list: ['about.id'] })
            .then(function (res) {
                debugger
            })
    })

    return <div>console</div>
}

export default Console
