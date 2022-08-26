import '../Styles/Estilos.css';

const Tabla = (props) => {

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                    </tr>
                    {props.datos.map(({ codigo, nombre, cantidad }) =>
                        <tr key={codigo}>
                            <td>{nombre}</td>
                            <td>{cantidad}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Tabla;