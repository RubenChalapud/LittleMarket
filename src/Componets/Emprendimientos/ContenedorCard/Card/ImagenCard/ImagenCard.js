import React from "react";
import "./ImagenCard.css"

function ImagenCard({imagen}){
    return(
            <img className = "o-img-card" src={imagen}></img>
    )
}

export default ImagenCard;
