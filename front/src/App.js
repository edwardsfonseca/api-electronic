import React, { useEffect, useState } from "react";
import { BrowserRouter, Route ,Routes } from "react-router-dom";
import {Productos} from "./componentes/productos"
import { Navbar } from "./componentes/Navbar"
import {Detalles} from "./componentes/Detalles"
import {Footer} from "./componentes/Footer"
import {Home} from "./componentes/Home"
const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState("");

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/")
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();
  }, []);
  // -------------------------------------------------
const [carrito, setCarrito]= useState(JSON.parse(localStorage.getItem("cart"))?? []);
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(carrito));
    },[carrito]);  
// -------------------------------------------------
const agregarAlCarrito = (producto) =>{
  setCarrito([...carrito,producto]);
};
// -------------------------------------------------
const eliminarDeCarrito = (id) =>{
  setCarrito(carrito.filter((producto,index)=>index !== id))
}
// -------------------------------------------------
return (
    <div style={{ textAlign: "center" }}>
      <h1> Prueba tecnica front Ecomsur 2021</h1>
      <BrowserRouter>
      <Navbar carrito={carrito} eliminarDeCarrito={eliminarDeCarrito}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productos/" element={<Productos agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path="/detalles/:id" element={<Detalles carrito={carrito} agregarAlCarrito={agregarAlCarrito}/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      {/* Check to see if express server is running correctly */}
      <h5>{response}</h5>
    </div>
  );
};

export default App;
