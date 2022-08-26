import BotonNavegacion from "../Util/Boton";
import Tabla from "../Util/Tabla";

const Secundaria = (props) =>{

    const handleButton = () => {
        props.history.push('/principal');
    }

    const fruits = [{codigo: 1,nombre:"Fresa",cantidad:2},
                    {codigo: 2,nombre:"Naranja",cantidad:5},
                    {codigo: 3,nombre:"Sandia",cantidad:20},
                    {codigo: 4,nombre:"Manzana",cantidad:12},
                    {codigo: 5,nombre:"Banana",cantidad:0}];

    return (
        <div>
            <h2>Frutas</h2>
            <Tabla datos = {fruits} />
            <BotonNavegacion actionButton={handleButton} nameButton="Primaria"/>
        </div>
    );

}

export default Secundaria;