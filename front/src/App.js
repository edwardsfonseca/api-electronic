import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route ,Routes } from "react-router-dom";
import {Productos} from "./componentes/productos"
import { Navbar } from "./componentes/Navbar"
import {Detalles} from "./componentes/Detalles"
import {Footer} from "./componentes/Footer"
import {Home} from "./componentes/Home"
import injectContext from "./componentes/store/appContext";
import { Context } from "./componentes/store/appContext";
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
const { store, actions } = useContext(Context);
  const { carrito } = store;
  const { agregarAlCarrito, eliminarDeCarrito } = actions;
// -------------------------------------------------

return (
    <div style={{ textAlign: "center" }}>
      
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
      
    </div>
  );
};

export default injectContext(App);