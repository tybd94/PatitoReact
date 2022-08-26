import { useEffect, useState } from "react";


const BotonNavegacion = (props) =>{

    const [names,setNames] = useState("Siguiente");

    useEffect(()=>{
        if(props.nameButton != null)
        {
            setNames(props.nameButton);
        }
    });

    return (
        <div>
            <button type="button" onClick={props.actionButton}> {names} </button>
        </div>
    );

}

export default BotonNavegacion;