import React, { useEffect, useState } from "react";
import "./servicio.css";
import clientes from "../../assets/Imagenes Caracteristicas/Clientes.png";
import cobertura from "../../assets/Imagenes Caracteristicas/Cobertura.png";
import distribucion from "../../assets/Imagenes Caracteristicas/Distribucion.png";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import WOW from "wowjs";






class Servicio extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }


  render() {
    return (
      <div
        className="Contenedor_servicio wow animate__animated animate__fadeInUp  "
        data-wow-duration="2s"
      >
        <div className="servicio">
          <div className="w-full mx-auto">
            <img src={cobertura} alt="Imagen" className="w-full md:w-[120px]" />
          </div>
          <div className="servicio_text">
            <b className=" text-[20px] " data-wow-duration="5s">
              Cobertura
            </b>

            <p>
              Contamos con un gran alcance de 252 municipios a nivel nacional.{" "}
            </p>
          </div>
        </div>
        <div className="servicio">
          <div className="w-full ">
            <img src={distribucion} alt="Imagen" className="w-full md:w-[120px]" />
          </div>
          <div className="servicio_text">
            <b  className="text-[20px] ">Distribución</b>

            <p>
              Actualmente tenemos 5 centros de distribución ubicados
              estratégicamente alrededor del país.{" "}
            </p>
          </div>
        </div>
        <div className="servicio">
          <div className="w-full">
            <img src={clientes} alt="Imagen" className="w-full md:w-[120px]" />
          </div>
          <div className="servicio_text">
            <b className="text-[20px] ">Clientes</b>

            <p>
              Hemos impactado alrededor de 22.000 empresas naturales y
              jurídicas.{" "}
            </p>
          </div>
        </div>
      </div>
    )

  }
}
export default Servicio;
//



