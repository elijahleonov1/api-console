import React from 'react'
import PropTypes from 'prop-types'
import './styled.scss'

const ErrorAlert = ({ title = '', errorText = '', isShow = false }) => {
    return (
        <div
            className="Error-wrapper"
            style={{ display: isShow ? '' : 'none' }}
        >
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
    isShow: PropTypes.bool,
}

export default ErrorAlert
