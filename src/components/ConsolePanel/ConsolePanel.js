import React, { useState } from 'react'
import s from './ConsolePanel.module.scss'

const ConsolePanel = () => {
    const [codeValue, setCodeValue] = useState('')

    const handlerConsoleValue = (e) => {
        console.log(e.target)
    }

    return (
        <div className={s.Wrapper}>
            <div
                className={s.Console}
                suppressContentEditableWarning
                contentEditable
                spellCheck
            />
            <div className={s.Separator} />
            <div
                className={s.Console}
                suppressContentEditableWarning
                contentEditable
                spellCheck
            />
        </div>
    )
}

export default ConsolePanel
