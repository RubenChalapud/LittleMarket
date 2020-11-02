import React from "react";
import InfoCardg from "./InfoCardg/InfoCardg"
import "./Catg.css"

function Catg ({ButtonIcon,TextButton}){
    return(
       <div>
           <InfoCardg ButtonIcon={ButtonIcon} TextButton={TextButton}></InfoCardg>
       </div>
    )
}

export default Catg;