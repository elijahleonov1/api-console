import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivatRote = ({ component: Component, isAuth, ...res }) => {
    return (
        <Route
            {...res}
            render={(props) =>
                isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.loction },
                        }}
                    />
                )
            }
        />
    )
}

const matToStatePtops = (state, ownProps) => ({
    isAuth: false,
})

export default connect(matToStatePtops, null)(PrivatRote)
