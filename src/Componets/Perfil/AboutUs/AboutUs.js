import React from "react";
import "./AboutUs.css"

function AboutUs({description}){
    return(
        <div className="o-container-about-perfil">
            <h1 className="o-perfil-title">Acerca de nosotros:</h1>
            <div className="o-about-perfil">
            <p className="o-info-about">{description}</p>
            </div>
        </div>  

    );
}

export default AboutUs;