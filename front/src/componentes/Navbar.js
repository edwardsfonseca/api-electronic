import React, { useState, useEffect } from "react";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
export const Navbar = ({ carrito, eliminarDeCarrito }) => {
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            total += carrito[i].price;
        }
        setTotal(Math.trunc(total));

    }, [carrito]);

    return (
        <nav class="nav">
            <div class="collapse ">
                <div><h1 class="navbar-brand">DevChefElectronic</h1></div>
            </div>
            <div className="list">
                <ul class="navbar-nav">
                    <Link to={"/"}>
                        <li class="nav-item">
                            <strong class="nav-link ">Home</strong>
                        </li>
                    </Link>
                    <Link to={"/productos"}>
                        <li class="nav-item">
                            <strong class="nav-link" >Productos</strong>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="navbar-cart">
                <button onClick={() => setMostrarCarrito(true)}>
                    Carrito ({carrito.length})
                </button>
            </div>
            {mostrarCarrito && (
                <div className="carrito-modal-overlay">
                    <div className="carrito-modal">
                        <div className="carrito-modal-header">
                            <h2>Carrito</h2>
                            <button
                                className="cerrar"
                                onClick={() => setMostrarCarrito(false)}
                            >
                                X
                            </button>
                        </div>
                        <hr className="line" />
                        <div className="carrito-modal-body">
                            {carrito.length !== 0 ? (
                                carrito.map((producto, i) => (
                                    <div key={i} className="producto">
                                        <div className="nombre">{producto.name}</div>
                                        <div className="precio">${producto.price}</div>
                                        <button
                                            className="eliminar"
                                            onClick={() => eliminarDeCarrito(i)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div className="mensaje-vacio">El carrito está vacío</div>
                            )}
                            <hr className="line" />
                            <h2 className="total">Total de los valores agregados: ${Math.trunc(total)}</h2>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

