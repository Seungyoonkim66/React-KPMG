import React from "react"
import { Route, Redirect } from "react-router-dom"

export default function Auth({ authenticated, component: Component, render }) {
  return (
    <Route render={(props) =>
        authenticated ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  )
}
