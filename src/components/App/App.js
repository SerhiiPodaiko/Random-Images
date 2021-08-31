import React from "react";
import {Route, Switch} from "react-router-dom";
import "./App.scss";
import CatPage from "../../pages/CatPage";
import DogPage from "../../pages/DogPage";
import FoxPage from "../../pages/FoxPage";
import HomePage from "../../pages/HomePage";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/cat" component={CatPage}/>
            <Route path="/dog" component={DogPage}/>
            <Route path="/fox" component={FoxPage}/>
        </Switch>
    );
}

export default App;

