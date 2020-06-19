import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styled.scss'

const Input = ({ defaultValue = '', placeholder = '', handlerChange }) => {
    const [value, setValue] = useState('')

    const onChangeInput = (e) => {
        setValue(e.target.value)
        handlerChange(value)
    }

    return (
        <input
            type="text"
            className="Input"
            defaultValue={defaultValue}
            onChange={onChangeInput}
            placeholder={placeholder}
        />
    )
}

Input.propTypes = {
    defaultValue: string,
    placeholder: string,
    handlerChange: func.isRequired,
}

export default Input
