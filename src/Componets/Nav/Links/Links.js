import React  from "react";
import "./Links.css"
import Emprendimientos from "../../../Emprendimientos.js"

function Link(props){
    return <a className="o-links" href={props.url}> {props.texto} </a>
}

function Links(){
    return(
        <div className="o-link-container">
            <Link url="#" texto="¿Quienes somos?"/>
            <Link url={Emprendimientos} texto="Emprendimientos"/>
            <Link url="#" texto="Servicios"/>
        </div>
    );

}
export default Links;