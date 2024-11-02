import React, { useState } from "react";
import './Producto.css'


function Producto({id, imagen, nombre, precio}){


    const [comprar, setComprar] = useState("");


    const handleComprar = (e) => {
        setComprar("Comprado!!")
    }

    return(
        <div className="contenedorProducto">

            <img src={imagen} alt="Imagen telefono" />

            <div className="contenedotNombrePrecio">
                <h2>{nombre}</h2>
                <h3>COP${precio}</h3>
                <h3>{id}</h3>
            </div>

            <div>{comprar}</div>
            <button onClick={handleComprar}> Comprar</button>
            
            <br />
         
        </div>
    )
}

export default Producto;