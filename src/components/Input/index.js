import React, { useState } from 'react'
import PropTypes from 'prop-types'
import s from './Input.module.scss'

const Input = ({
    type = 'text',
    value = '',
    placeholder = '',
    rightLable = '',
    leftLable = '',
    isError = false,
    handlerChange,
}) => {
    const onChangeInput = (e) => {
        handlerChange(e.target.value)
    }

    const errorClass = isError ? s.Error : ''

    return (
        <div className={s.InputWrapper}>
            <p className={s.LableWrapper}>
                <span className={`${s.LableRight} ${errorClass}`}>
                    {rightLable}
                </span>
                <span className={s.LableLeft}>{leftLable}</span>
            </p>
            <input
                type={type}
                className={`${s.Input} ${errorClass}`}
                value={value}
                onChange={onChangeInput}
                placeholder={placeholder}
            />
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    rightLable: PropTypes.string,
    leftLable: PropTypes.string,
    isError: PropTypes.bool,
    handlerChange: PropTypes.func.isRequired,
}

export default Input
