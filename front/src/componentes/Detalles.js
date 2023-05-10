import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./styles/detalles.css"
import { Context } from "./store/appContext";

export const Detalles = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const { producto } = store;

    useEffect(() => {
        actions.getProducto(id);
    }, [actions, id]);

    if (!producto) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="row body-detalle">
                <div className="col-md-6 detalles-img">
                    <img
                        src={`http://localhost:5000${producto.image}`}
                        alt={`Imagen de ${producto.name}`}
                    />
                </div>
                <div className="col-md-6 detalles-card">
                    <h2>{producto.name}</h2>
                    <p>{producto.description}</p>
                    <p>Marca :{producto.brand}</p>
                    <p>Categoria:{producto.category}</p>
                    <p>Stock:{producto.countInStock}</p>
                    <p>Estrella:{producto.rating}</p>
                    <p>Review:{producto.numReviews}</p>
                    <p>Precio: ${producto.price}</p>
                    {producto.countInStock > 0 && (
                        <button className="carrito-add" onClick={() => {
                            actions.agregarAlCarrito(producto);
                            const carritoEnLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];
                            localStorage.setItem("carrito", JSON.stringify([...carritoEnLocalStorage, producto]));
                        }}>Agregar al carrito</button>
                    )}
                    {producto.countInStock === 0 && (
                        <div>No hay stock disponible</div>
                    )}
                </div>
            </div>
        </div>
    );
};
