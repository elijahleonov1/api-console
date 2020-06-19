import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styled.scss'

const Input = ({
    type = 'text',
    defaultValue = '',
    placeholder = '',
    rightLable = '',
    leftLable = '',
    isError = true,
    handlerChange,
}) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(isError)

    const onChangeInput = (e) => {
        setValue(e.target.value)
        handlerChange(value)
    }

    const errorClass = error ? 'Error' : ''

    return (
        <div className="Input-wrapper">
            <p className="Lable-wrapper">
                <lable className={`Lable-right ${errorClass}`}>
                    {rightLable}
                </lable>
                <lable className="Lable-left">{leftLable}</lable>
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
