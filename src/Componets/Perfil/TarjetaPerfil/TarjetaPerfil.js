import React  from "react";
import CardInfo from "./CardInfo/CardInfo";
import ImgPerfil from "./ImgPerfil/ImgPerfil"
import Lunder from "./ImgPerfil/LUnderground.png"
import './TarjetaPerfil.css';

function TarjetaPerfil({srcimg, title, contacto}){
    return(
        <div className="o-tarjeta-perfil">
            <ImgPerfil className="o-img-perfil" srcimg={srcimg}></ImgPerfil>
            <CardInfo title={title} contacto={contacto}></CardInfo> 
        </div>
    );
}
export default TarjetaPerfil;