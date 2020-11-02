import React  from "react";
import CardInfo from "./CardInfo/CardInfo";
import ImgPerfil from "./ImgPerfil/ImgPerfil"
import Lunder from "./ImgPerfil/LUnderground.png"
import './TarjetaPerfil.css';

function TarjetaPerfil(props){
    return(
        <div className="o-tarjeta-perfil">
            <ImgPerfil className="o-img-perfil" srcimg={Lunder}></ImgPerfil>
            <CardInfo title="Undertground Cocktails & Drinks" contacto="3003071555"></CardInfo> 
        </div>
    );
}
export default TarjetaPerfil;