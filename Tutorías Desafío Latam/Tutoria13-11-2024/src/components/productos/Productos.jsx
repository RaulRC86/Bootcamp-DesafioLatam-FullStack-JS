import { useState } from "react";
import { productos as initialProductos } from "../../db";

const estadoInicialNuevoProducto = {
  id: "",
  nombre: "",
  sku: "",
  stock: 0,
  disponibilidad: "",
  precio: 0,
}

export const Productos = () => {
  const [productos, setProductos] = useState(initialProductos);

  const [nuevoProducto, setNuevoProducto] = useState(estadoInicialNuevoProducto);





  // const [id, setId] = useState(initialProductos.length);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({
      ...nuevoProducto, [name]: value,
    });
  };


  const handleSubmit = (e) => {
    console.log(e.target)
    e.preventDefault();

    // const idIncremental = id + 1;

    setProductos([
      ...productos,
      {
        ...nuevoProducto,
        // id: idIncremental
      }
    ]);

    // setId(idIncremental)

    setNuevoProducto(estadoInicialNuevoProducto);
  };

  return (
    <>
      <main className="container">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={nuevoProducto.nombre}
                onChange={handleChange}
                className="form-control mb-2"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="sku"
                placeholder="SKU"
                value={nuevoProducto.sku}
                onChange={handleChange}
                className="form-control mb-2"
                required
              />
            </div>

            <div className="col-md-4">
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={nuevoProducto.stock}
                onChange={handleChange}
                className="form-control mb-2"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="disponibilidad"
                placeholder="Disponibilidad"
                value={nuevoProducto.disponibilidad}
                onChange={handleChange}
                className="form-control mb-2"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                name="precio"
                placeholder="Precio"
                value={nuevoProducto.precio}
                onChange={handleChange}
                className="form-control mb-2"
                required
              />
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary  w-30">
                Agregar Producto
              </button>
            </div>
          </div>
        </form>


        <section className="row">
          {productos.map((producto) => (
            <article
              key={producto.id}
              className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4"
            >
              <div className="card mx-4">
                <img
                  src={producto.imagenUrl}
                  className="card-img-top"
                  alt={producto.nombre}
                />
                <div className="card-body">
                  <h5 className="card-title fw-light mb-3">
                    {producto.nombre}
                  </h5>
                  <p className="card-text h6 fw-light">SKU: {producto.sku}</p>
                  <p className="fw-light">
                    <i className="fas fa-map-marker-alt fa-xs">Stock: </i>
                    {producto.stock}
                  </p>
                  <hr />
                  <ul className="list-group list-group-flush text-right">
                    <li className="list-group-item ms-auto fw-light gris py-0">
                      {producto.disponibilidad}
                      <span className="h5 fw-bold green ms-3">
                        ${producto.precio}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};
