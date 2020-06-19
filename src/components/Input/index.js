import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styled.scss'

const Input = ({
    type = 'text',
    defaultValue = '',
    placeholder = '',
    rightLable = '',
    leftLable = '',
    isError = false,
    handlerChange,
}) => {
    const [value, setValue] = useState('')

    const onChangeInput = (e) => {
        setValue(e.target.value)
        handlerChange(value)
    }

    const errorClass = isError ? 'Error' : ''

    return (
        <div className="Input-wrapper">
            <p className="Lable-wrapper">
                <span className={`Lable-right ${errorClass}`}>
                    {rightLable}
                </span>
                <span className="Lable-left">{leftLable}</span>
            </p>
            <input
                type={type}
                className={`Input ${errorClass}`}
                defaultValue={defaultValue}
                onChange={onChangeInput}
                placeholder={placeholder}
            />
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    rightLable: PropTypes.string,
    leftLable: PropTypes.string,
    isError: PropTypes.bool,
    handlerChange: PropTypes.func.isRequired,
}

export default Input
