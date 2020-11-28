import React from "react";
import "./ContenedorResultados.css"
import logoUnder from "./LUnderground.png";
import Resultado from "./Resultado/Resultado";
import axios from 'axios';


class ContenedorResultados extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{}]
        };
    };
    render() {
        return (
            <div className="o-container-results">
                {
                    this.state.data.map((emprendimientodata) => {
                        return (
                            <Resultado logo={emprendimientodata.logo}
                                nombre={emprendimientodata.nombre} cat={emprendimientodata.categoria} contacto={emprendimientodata.contacto} des={emprendimientodata.descripcion} key={`key ${emprendimientodata.id}`} />
                        )
                    })
                }
                {/* <Resultado logo={logoUnder} nombre={"Nombre emprendiemiento"}
                cat={"Comidas y bebidas"} contacto={"3003071554"} des={"Emprendimiento dedicado a la venta de Cocteles"}></Resultado>

            <Resultado logo={logoUnder} nombre={"Nombre emprendiemiento"}
                cat={"Comidas y bebidas"} contacto={"3003071554"} des={"Emprendimiento dedicado a la venta de Cocteles"}></Resultado>

            <Resultado logo={logoUnder} nombre={"Nombre emprendiemiento"}
                cat={"Comidas y bebidas"} contacto={"3003071554"} des={"Emprendimiento dedicado a la venta de Cocteles"}></Resultado>

            <Resultado logo={logoUnder} nombre={"Nombre emprendiemiento"}
                cat={"Comidas y bebidas"} contacto={"3003071554"} des={"Emprendimiento dedicado a la venta de Cocteles"}></Resultado>

            <Resultado logo={logoUnder} nombre={"Nombre emprendiemiento"}
                cat={"Comidas y bebidas"} contacto={"3003071554"} des={"Emprendimiento dedicado a la venta de Cocteles"}></Resultado> */}
            </div>
        );
    }
    componentDidMount() {
    this.consultar(this);
    }
    consultar= (context) => {
        axios.get('http://localhost:3000/datos')
        .then(function (json) {
            console.log(json.data);
            context.setState({ data:json.data });
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
export default ContenedorResultados;