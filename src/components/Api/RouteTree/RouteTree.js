import React from "react";

import { Route, Switch } from "react-router-dom";

import { AuthProvider } from "../AuthContext/AuthContext";
import Login from "../../Views/Login/Login";
import Register from "../../Views/Register/Register";
import WelcomeMessage from "../../Global/WelcomeMessage/WelcomeMessage";

function RouteTree() {
    return (
        <AuthProvider>
            <Switch>
                <Route exact path={"/"} component={Login}/>
                <Route exact path={"/register"} component={Register}/>
                <Route exact path={"/home"} component={WelcomeMessage}/>
            </Switch>
        </AuthProvider>
    );
}

export default RouteTree;