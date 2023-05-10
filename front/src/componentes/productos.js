import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/producto.css";
import { Context } from "./store/appContext";

export const Productos = () => {
    const { store, actions } = useContext(Context);
    const { productos } = store;
    const { agregarAlCarrito } = actions;

    const handleClickAgregarCarrito = (producto) => {
        agregarAlCarrito(producto);
    };

    useEffect(() => {
        actions.getProductos();
    }, []);

    return (
        <div className="contenedor">
            {productos.map((producto) => (
                <div className="b-caja" key={producto.id}>
                    <figure>
                        <img
                            className="card-img-top"
                            src={`http://localhost:5000${producto.image}`}
                            alt={`Imagen de ${producto.name}`}
                        />
                        <div className="capa">
                            <h3 className="card-title">{producto.name}</h3>
                            <p className="text-producto">{producto.description}</p>
                            <Link to={`/detalles/${producto._id}`}>
                                <button className="learnmore">Learn More</button>
                            </Link>
                            {producto.countInStock > 0 && (
                                <button
                                    className="carrito-add"
                                    onClick={() => handleClickAgregarCarrito(producto)}
                                    key={`add-to-cart-${producto.id}`}
                                >
                                    Add item to cart
                                </button>
                            )}
                            {producto.countInStock === 0 && (
                                <div key={`out-of-stock-${producto.id}`}>
                                    No hay stock disponible
                                </div>
                            )}
                        </div>
                    </figure>
                </div>
            ))}
        </div>
    );
};
