import React from "react";
import ImagenCard from "./ImagenCard/ImagenCard";
import InfoCard from "./InfoCard/InfoCard";
import "./Card.css";

function Card ({imagen,titlecard,paragraph,ButtonText}){
    return(
        <div className="o-card">
            <ImagenCard imagen={imagen}></ImagenCard>
            <InfoCard titlecard={titlecard} paragraph={paragraph} ButtonText={ButtonText}></InfoCard>
        </div>
    )
}

export default Card;