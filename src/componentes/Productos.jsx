import React, { useState, useEffect } from "react";
import { getAllProductos } from "../servicios/ProductosServicios";
import Producto from "./Producto";
import'./Buscador.css'

function Productos() {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState();
  const [buscar, setBuscar] = useState("Televisores");

  useEffect(() => {
    const request = async () => {

      try {
        const response = await getAllProductos(buscar);

        console.log("Desde productos:", response.results);

        setProductos(response.results)
        setLoading(false);
      } catch (evento) {
        console.log(evento);
      }
    };

    request();

  }, [buscar]);

  const handleChange = (event) => {

    const value = event.target.value;
    console.log(value);
    setBuscar(value);
  }


  if (loading) {
    return (
      <div>Cargando...</div>
    )
  } else {
    return (
      <>
        <div id="buscador"> 
        <input type="text"
        name="buscar"
         value={buscar}
         onChange={handleChange}
         placeholder="buscar"
        /> <br />
        <hr /></div>

        {productos.slice(0, 8).map((producto) =>
          <Producto
            id={producto.id}
            imagen={producto.thumbnail}
            nombre={producto.title}
            precio={producto.price}
          />
        )}
        <br />
        {/*<button onClick={handleClick}>Filtrar</button>*/}
      </>
    );
  }
}

export default Productos;