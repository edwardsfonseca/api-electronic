import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/detalles.css"
export const Detalles = ({ carrito, agregarAlCarrito }) => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`)
            .then((respuesta) => respuesta.json())
            .then((valornew) => setProducto(valornew))
            .catch((error) => console.log("Danger", error));
    }, [id]);

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
                            agregarAlCarrito(producto);
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


{/* <button type="button" className="description-btn">
                                Get Back home
                            </button> */}
/* {producto.countInStock > 0 && (
    <button onClick={() => {
        agregarAlCarrito(producto);
        const carritoEnLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];
        localStorage.setItem("carrito", JSON.stringify([...carritoEnLocalStorage, producto]));
    }}>Agregar al carrito</button>
)}
{producto.countInStock === 0 && (
    <div>No hay stock disponible</div>
)} */