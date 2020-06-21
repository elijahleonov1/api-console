import React from 'react'
import PropTypes from 'prop-types'
import s from './ErrorAlert.module.scss'

const ErrorAlert = ({ title = '', errorText = '', isShow = false }) => {
    return (
        <div className={s.Error} style={{ display: isShow ? '' : 'none' }}>
            <div className={s.Smail}>
                <div className={s.Eye}></div>
                <div className={s.Eye}></div>
                <div className={s.Mouth}></div>
            </div>
            <div>
                <h6 className={s.Title}>{title}</h6>
                <pre className={s.Text}>{errorText}</pre>
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
