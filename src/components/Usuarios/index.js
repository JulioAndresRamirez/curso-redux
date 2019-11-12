import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

class Usuarios extends Component {
    componentDidMount() {
        this.props.traerTodos();
    }

    ponerfilas = () =>
        this.props.usuarios.map((usuario, i) => (
            <tr key={usuario.id}>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.website}</td>
            </tr>
        ));

    render() {
        console.log(this.props);
        return (
            <div className="margen">
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Enlace</th>
                        </tr>
                    </thead>
                    <tbody>{this.ponerfilas()}</tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = reducers => {
    return reducers.usuariosReducers;
};

export default connect(
    mapStateToProps,
    usuariosActions
)(Usuarios);
