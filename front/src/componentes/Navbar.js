import React, { useState, useEffect } from 'react'
import "./styles/navbar.css"
export const Navbar = ({ carrito, eliminarDelCarrito }) => {
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            total += carrito[i].precio;
        }
        setTotal(total)
    }, [carrito])
    return (
        <>
            <nav className='navbar'>
                <div className='name-nav'>
                    <h1>Electronic Dev</h1>
                </div>
                <div className='navbar-carrito'>
                    <button onClick={() => setMostrarCarrito(true)}>
                        Carrito ({carrito.length})
                    </button>
                </div>
                {mostrarCarrito && (
                    <div className='carrito-modal-p1'>
                        <div className='carrito-modal'>
                            <div className='carrito-modal-header'>
                                <h2>Carrito</h2>
                                <button onClick={() => setMostrarCarrito(false)}>X</button>
                            </div>
                            <div className='carrito-modal-body'>
                                {carrito.length !== 0 ? (
                                    carrito.map((producto, i) => (
                                        <div key={i} className='producto'>
                                            <div className='name'>{producto.name}</div>
                                            <div className='price'>{producto.price}</div>
                                            <button className='eliminar' onClick={() => eliminarDelCarrito(i)}> Eliminar</button>
                                        </div>
                                    ))
                                ) : (
                                    <div className='mensaje-vacio'> El carrito esta vacio</div>
                                )}
                                <h2 className='price-total'>${total}</h2>
                            </div>
                        </div>
                    </div>
                )}

            </nav>
        </>
    )
}
