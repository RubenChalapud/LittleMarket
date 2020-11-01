import React  from "react";
import "./Links.css"

function Link(props){
    return <a className="o-links" href={props.url}> {props.texto} </a>
}

function Links(){
    return(
        <div className="o-links-container">
            <Link url="#" texto="Inicio"/>
            <Link url="#" texto="¿Quienes somos?"/>
            <Link url="#" texto="Emprendimientos"/>
            <Link url="#" texto="Servicios"/>
        </div>
    );

}
export default Links;