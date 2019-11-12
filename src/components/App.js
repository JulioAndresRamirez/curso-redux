import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./menu";
import Usuarios from "./Usuarios/index";

const Tareas = () => (
    <div>
        <h1>Tareas</h1>
    </div>
);

const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/" component={Usuarios} />
                <Route exact path="/tareas" component={Tareas} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
