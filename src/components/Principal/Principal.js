import BotonNavegacion from "../Util/Boton";
import Tabla from "../Util/Tabla";

const Principal = (props) =>{

    function handleButton() {
        props.history.push('/secundaria');
    }

    const products = [{codigo: 1,nombre:"Chocolate",cantidad:12},
    {codigo: 2,nombre:"Arroz",cantidad:5},
    {codigo: 3,nombre:"Pollo",cantidad:10},
    {codigo: 4,nombre:"Lentejas",cantidad:1},
    {codigo: 5,nombre:"Agua",cantidad:2}];

    return (
        <div>
            <h2>Productos</h2>
            <Tabla datos={products}/>
            <BotonNavegacion actionButton={handleButton} nameButton="Secundaria"/>
        </div>
    );

}

export default Principal;