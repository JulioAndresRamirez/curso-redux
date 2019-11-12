import React, { useState, useEffect } from "react";
import axios from "axios";

const App2 = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        setUsuarios([
            {
                nombre: "Julio",
                correo: "juli157ramirez@gmail.com",
                enlace: "@juliorafre"
            },
            {
                nombre: "platzi",
                correo: "platzi@gmail.com",
                enlace: "@platzi"
            }
        ]);

        (async function fetchData() {
            try {
                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                setUsuarios(res.data);
            } catch (error) {
                console.log(error);
            }
        })();

        console.log(usuarios);
    }, []);

    const ponerFilas = () =>
        usuarios.map((usuario, i) => (
            <tr key={i}>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.website}</td>
            </tr>
        ));

    return (
        <div className="margen">
            {console.log(usuarios)}
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Enlace</th>
                    </tr>
                </thead>
                <tbody>{ponerFilas()}</tbody>
            </table>
        </div>
    );
};

export default App2;
