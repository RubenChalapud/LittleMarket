import React from "react";
import Card from "./Card/Card";
import "./ContenedorCard.css";
import imgProducto2 from "../../Perfil/Productos/c2.jpeg";

function ContenedorCard(){
    return(
        <div className="o-cards-container">
            <Card imagen={"https://i.pinimg.com/originals/58/e2/a7/58e2a75515e24758c508823581686ba1.jpg"} titlecard={"Nike"} paragraph="Something idk" ButtonText="More"></Card>
            <Card imagen={"https://henryshomemadeicecream.com/wp-content/uploads/2018/12/39201744308PM_gallery01.jpg"} titlecard={"Helados"} paragraph="Something idk" ButtonText="More"></Card>
            <Card imagen={imgProducto2} titlecard={"Coctel"} paragraph="Riquisimos" ButtonText="Mas"></Card>
        </div>
    );
}

export default ContenedorCard;