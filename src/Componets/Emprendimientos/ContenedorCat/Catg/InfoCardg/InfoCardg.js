import React from "react";
import {fastfood, local_bar,local_cafe,local_pizza} from "@material-ui/icons";

function InfoCardg({TextButton, ButtonIcon}){
    return(
        <div className="o-info-cardg">
                <button className="o-button"><i class="material-icons md-86 md-dark">{ButtonIcon}</i></button>
                <h3 className="o-buttontext">{TextButton}</h3>
        </div>
    );
}

export default InfoCardg;