import React from "react";

import { Route, Switch } from "react-router-dom";

import Login from "../../Views/Login/Login";
import Register from "../../Views/Register/Register";
import Home from "../../Views/Home/Home";

function RouteTree() {
    return (
        <Switch>
            <Route exact path={"/"} component={Login}/>
            <Route exact path={"/register"} component={Register}/>
            <Route exact path={"/home"} component={Home}/>
        </Switch>
    );
}

export default RouteTree;