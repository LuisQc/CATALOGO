import React, { useState } from 'react';
import Producto from "./Producto/Producto";

const Catalogo = () => {
    const[productos,setProductos] = useState([
        {
            id: 1,
            name: "CocaCola",
            desc: " 500ml HELADA",
            img: "https://www.cocacola.es/content/dam/one/es/es2/coca-cola/products/productos/dic-2021/CC_Origal.jpg",
          },
          {
            id: 2,
            name: "InkaCola",
            desc: "500ml HELADA",
            img: "http://cdn.shopify.com/s/files/1/0012/4862/4736/products/inca_1.5_600x600.jpg?v=1561406048",
          },
          {
            id: 3,
            name: "Guarana",
            role: "350ml Sabor Guarana",
            img: "https://www.backus.pe/sites/g/files/yrakuj241/files/2021-12/original_394x833_0.png",
          },
        ]);
   
  return (
    <div className="row">
        {productos.map((producto) => {
            return (
                <Producto
                    key={producto.id}
                    name={producto.name}
                    img={producto.img}
                    desc={producto.desc}
                />
            );
        })}
    </div>
  );
};

export default Productos;