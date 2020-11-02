import React  from "react";


function CardInfo(props){
    const nombreP = props.title;
    const contactoP = props.contacto;
    return(
        <div className="o-info-perfil">
            <h1 className="o-title-perfil">{nombreP}</h1>
            <div className="o-contact-perfil">
                <span class="material-icons o-perfil-icon">call</span>
                <p className="o-number-perfil">{contactoP}</p>
            </div>
        </div>
    );
}
export default CardInfo;