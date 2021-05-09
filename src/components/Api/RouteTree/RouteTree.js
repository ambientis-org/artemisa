import React from "react";

import { Route, Switch } from "react-router-dom";

import Login from "../../Views/Login/Login";
import Register from "../../Views/Register/Register";

function RouteTree() {
    return (
        <Switch>
            <Route exact path={"/"} component={Login}/>
            <Route exact path={"/register"} component={Register}/>
        </Switch>
    );
}

export default RouteTree;