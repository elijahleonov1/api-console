import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivatRote = ({ component: Component, isAuth, ...res }) => {
    const render =
        res.render && typeof res.render === 'function' ? res.render : null

    return (
        <Route
            {...res}
            render={(props) => {
                return isAuth ? (
                    render ? (
                        <Route {...props} render={render} />
                    ) : (
                        <Component {...props} />
                    )
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.loction },
                        }}
                    />
                )
            }}
        />
    )
}

PrivatRote.propTupes = {
    component: PropTypes.element,
    isAuth: PropTypes.bool,
}

const matToStatePtops = (state, ownProps) => ({
    isAuth: true,
})

export default connect(matToStatePtops, null)(PrivatRote)
