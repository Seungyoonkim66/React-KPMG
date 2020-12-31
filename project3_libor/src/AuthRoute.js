import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthRoute({ authenticated, path, render, Component }) {
    return (
      <Route
        to={path}
        render={(props) =>
          authenticated ? (
            render ? (
              render(props)
            ) : (
              <Component />
            )
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }}/>
          )
        }
      />
    )
  }
  
  export default AuthRoute