import React from 'react'
import PropTypes from 'prop-types'
import './styled.scss'

const ErrorAlert = ({ title = '', errorText = '' }) => {
    return (
        <div className="Error-wrapper">
            <div className="Smail">
                <div className="eye"></div>
                <div className="eye"></div>
                <div className="mouth"></div>
            </div>
            <div>
                <h6 className="Error-title">{title}</h6>
                <pre className="Error-text">{errorText}</pre>
            </div>
        </div>
    )
}

ErrorAlert.propTypes = {
    title: PropTypes.string,
    errorText: PropTypes.string,
}

export default ErrorAlert
