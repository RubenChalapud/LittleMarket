import React from "react";
import BotonCard from "../BotonCard/BotonCard";
import "../Card.css"

function InfoCard({titlecard,paragraph, ButtonText}){
    return(
        <div className="o-info-card">
                <h1 className="o-title-card">{titlecard}</h1>
                <p className="o-description-card">{paragraph}</p>
                <BotonCard ButtonText={ButtonText}></BotonCard>
        </div>
    );
}

export default InfoCard;