import React  from "react";

function ImgPerfil(props){
    const imgperfil = props.srcimg;
    return(
        <img className="o-img-perfil" src={imgperfil}></img>
    );
}
export default ImgPerfil;