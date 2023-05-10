const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            carrito: JSON.parse(localStorage.getItem("carrito")) || [],
            productos: [],
            producto:[],
        },
        actions: {
            getProductos: () => {
                console.log("Fetching productos...");
                fetch("http://localhost:5000/api/products")
                    .then((respuesta) => respuesta.json())
                    .then((resultado) => {
                        setStore({ productos: resultado });
                    })
                    .catch((error) => console.log("DANGER", error));
            },// -------------------------------------------------
            getProducto: (id) => {
                console.log("Fetching productos...");
                fetch("http://localhost:5000/api/products/"+ id)
                    .then((respuesta) => respuesta.json())
                    .then((resultado) => {
                        setStore({ producto: resultado });
                    })
                    .catch((error) => console.log("DANGER", error));
            },// -------------------------------------------------
            agregarAlCarrito: (producto) => {
                const { carrito } = getStore();
                const newCarrito = [...carrito, producto];
                setStore({ carrito: newCarrito });
                localStorage.setItem("carrito", JSON.stringify(newCarrito));
            },// -------------------------------------------------
            eliminarDeCarrito: (id) => {
                const { carrito } = getStore();
                const newCarrito = carrito.filter((producto, index) => index !== id);
                setStore({ carrito: newCarrito });
                localStorage.setItem("carrito", JSON.stringify(newCarrito));
            },// -------------------------------------------------
        },
    };
};

export default getState;
