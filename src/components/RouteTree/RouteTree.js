import React from "react";

import { Route, Switch } from "react-router-dom";

import Login from "../Login/Login";

function RouteTree() {
    return (
        <Switch>
            <Route exact path={"/"} component={Login}/>
        </Switch>
    );
}

export default RouteTree;