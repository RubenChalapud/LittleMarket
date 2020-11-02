import React from "react";
import InfoCard from "../../../Emprendimientos/ContenedorCard/Card/InfoCard/InfoCard";
import ImgProductoS from "./ImgProductoS/ImgProductoS";


function ProductoSecundario({imagen,titlecard,paragraph,ButtonText}){
    return(
        <div className="o-card o-card-perfil">
            <ImgProductoS imagen={imagen}></ImgProductoS>
            <InfoCard titlecard={titlecard} paragraph={paragraph} ButtonText={ButtonText}></InfoCard>
        </div>

    );
}

export default ProductoSecundario;