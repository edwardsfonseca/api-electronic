import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/producto.css"
export const Productos = ({ agregarAlCarrito }) => {
    const [productos, setProductos] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const respuesta = await fetch("http://localhost:5000/api/products");
                const data = await respuesta.json();
                setProductos(data);
            } catch (error) {
                console.log("Danger", error);
            }
        };

        fetchProductos();
    }, []);

    const handleClickAgregarCarrito = (producto) => {
        agregarAlCarrito(producto);
        const carritoEnLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];
        localStorage.setItem("carrito", JSON.stringify([...carritoEnLocalStorage, producto]));
        setTotal(total + producto.price);
    };

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
                            <Link
                                to={`/detalles/${producto._id}`}
                                
                            >
                                <button className="learnmore">Learn More</button>
                            </Link>
                            {producto.countInStock > 0 && (
                                <button className="carrito-add" onClick={() => handleClickAgregarCarrito(producto)} key={`add-to-cart-${producto.id}`} >
                                    Agregar al carrito
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