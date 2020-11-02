import React from "react";
import Ofertas from "./Ofertas/Ofertas";
import ProductoPrincipal from "./ProductoPrincipal/ProductoPrincipal";
import './Productos.css';
import ProductoSecundario from "./ProductoSecundario/ProductoSecundario";
import imgProducto2 from "./c1.jpeg";
import imgProducto3 from "./c2.jpeg";
import imgProducto4 from "./c3.jpeg";
import imgProducto5 from "./c4.jpeg";

function Productos(){
    return(
        <div className="o-perfil-productos">
            <h1 className="o-perfil-title">Nuestros productos</h1>
            <div className="o-container-productos">
              <div className="o-productos-principales">
                <Ofertas></Ofertas>
                <ProductoPrincipal></ProductoPrincipal>
              </div>
              <div className="o-productos-secundarios">
                <ProductoSecundario imagen={imgProducto2} titlecard={"Coctél 1"} paragraph="20.000 COP" ButtonText="More"></ProductoSecundario>
                <ProductoSecundario imagen={imgProducto3} titlecard={"Coctél 2"} paragraph="20.000 COP" ButtonText="More"></ProductoSecundario>
                <ProductoSecundario imagen={imgProducto4} titlecard={"Coctél 3"} paragraph="20.000 COP" ButtonText="More"></ProductoSecundario>
                <ProductoSecundario imagen={imgProducto5} titlecard={"Coctél 4"} paragraph="20.000 COP" ButtonText="More"></ProductoSecundario>
              </div>
            </div>
          </div>
    );
}

export default Productos;