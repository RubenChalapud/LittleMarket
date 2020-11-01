import React from "react";
import "../Card.css"

function InfoCard({titlecard,paragraph}){
    return(
        <div className="o-info-card">
                <h1 className="o-title-card">{titlecard}</h1>
                <p className="o-description-card">{paragraph}</p>
        </div>
    );
}

export default InfoCard;