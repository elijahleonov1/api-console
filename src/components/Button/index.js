import React from 'react'
import PropTypes from 'prop-types'
import Loader from '@components/Loader'
import './styled.scss'

const Button = ({ text, isDisabled = false, isLoading = false }) => {
    return (
        <button className="Button" disabled={isDisabled}>
            {!isLoading && text}
            {isLoading && <Loader />}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
}

export default Button
