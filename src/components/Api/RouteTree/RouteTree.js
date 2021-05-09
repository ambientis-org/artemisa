import React from "react";

import { Route, Switch } from "react-router-dom";

import Login from "../../Views/Login/Login";

function RouteTree() {
    return (
        <Switch>
            <Route exact path={"/"} component={Login}/>
        </Switch>
    );
}

export default RouteTree;