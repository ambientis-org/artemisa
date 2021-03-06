import React from "react";

import { Route, Switch } from "react-router-dom";

import { AuthProvider } from "../AuthContext/AuthContext";
import Login from "../../Views/Login/Login";
import Register from "../../Views/Register/Register";
import Home from "../../Views/Home/Home";
import DoctorRegister from "../../Views/DoctorRegister/DoctorRegister";
import CreatePost from "../../Views/Posts/CreatePost";
import Posts from "../../Views/Posts/Posts";
import Post from "../../Views/Posts/Post";


function RouteTree() {
    return (
        <AuthProvider>
            <Switch>
                <Route exact path={"/"} component={Login}/>
                <Route exact path={"/register"} component={Register}/>
                <Route exact path={"/registerDoctor"} component={DoctorRegister}/>
                <Route exact path={"/home"} component={Home}/>
                <Route exact path={"/posts"} component={Posts}/>
                <Route exact path={"/posts/new"} component={CreatePost}/>
                <Route path={"/posts/:id"} component={Post}/>
                
            </Switch>
        </AuthProvider>
    );
}

export default RouteTree;