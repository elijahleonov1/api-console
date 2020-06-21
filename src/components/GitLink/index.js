import React from 'react'
import PropTypes from 'prop-types'
import s from './GitLink.module.scss'

const GitLink = ({ text = '', href = '#', children }) => {
    const textLink = text.leading > 0 ? text : children
    return (
        <a href={href} className={s.GitLink} target="_blank">
            {textLink}
        </a>
    )
}

GitLink.propTypes = {
    text: PropTypes.string,
    href: PropTypes.string,
}

export default GitLink
