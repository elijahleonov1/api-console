import React from 'react'
import Loader from '../Loader'
import './styled.scss'

const Button = ({ text, isDisabled = false, isLoading = true }) => {
    return (
        <button className="Button" disabled={isDisabled}>
            {!isLoading && text}
            {isLoading && <Loader />}
        </button>
    )
}

export default Button
