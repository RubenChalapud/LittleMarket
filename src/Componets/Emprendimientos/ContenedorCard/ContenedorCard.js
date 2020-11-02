import React from "react";
import Card from "./Card/Card";
import "./ContenedorCard.css";

function ContenedorCard(){
    return(
        <div className="o-cards-container">
            <Card imagen={"https://i.pinimg.com/originals/58/e2/a7/58e2a75515e24758c508823581686ba1.jpg"} titlecard={"Adidas"} paragraph="Something idk" ButtonText="More"></Card>
            <Card imagen={"https://henryshomemadeicecream.com/wp-content/uploads/2018/12/39201744308PM_gallery01.jpg"} titlecard={"Helados"} paragraph="Something idk" ButtonText="More"></Card>
            <Card imagen={"https://bakingfarm.co.kr/shopimages/dhkorea88/0130010001792.jpg?1454249737"} titlecard={"Postres"} paragraph="Something idk" ButtonText="More"></Card>
        </div>
    );
}

export default ContenedorCard;