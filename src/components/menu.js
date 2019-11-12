import React from "react";
import { Link } from "react-router-dom";

const Menu = props => {
    return (
        <nav id="menu">
            <Link to="/"> Usuarios</Link>
            <Link to="/tareas"> Tareas </Link>
        </nav>
    );
};

export default Menu;
