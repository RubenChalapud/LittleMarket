import React from "react";
import Catg from "./Catg/Catg";
import "./ContenedorCat.css"

function ContenedorCat(){
    return(
        <div className="o-cards-container">
            <Catg ButtonIcon={"fastfood"} TextButton="Comidas"></Catg>
            <Catg ButtonIcon={"local_bar"} TextButton="Licores"></Catg>
            <Catg ButtonIcon={"local_cafe"} TextButton="Cafe"></Catg>
            <Catg ButtonIcon={"local_pizza"} TextButton="Pizza"></Catg>
        </div>
    );
}

export default ContenedorCat;