import React from "react";
import { CardListBlog } from "../Componentes/Blog/CardBlog";
import { CatFilter } from "../Componentes/Categoriafilter/catFilter";
import { Footer } from "../Componentes/footer/footer";
import "./pages.css";
import Navbar from "../Componentes/Navbar/Navbar";
import { Redes } from "../Componentes/Redesociales/Redes";
import Autlok from "../assets/img/Autlok.png";
import Intranet from "../assets/img/Intranet.png";
import Orion from "../assets/img/Orion.png";
import Sarglaft from "../assets/img/Sarglaft.png";
import Soporte from "../assets/img/Soporte.png";
import Sap from "../assets/img/Sap.png";
import { Footers } from "../Componentes/footer/footer2";

export const Plataformas = () => {
  return (
    <div>
     

      <Navbar />
      <div>
        <div className="banner_plataformas ">
          <div class=" text-center text_plataformas">
            <h1> Apps Corporativo</h1>
            <p>Miembros Pastor Julio Delgado</p>
          </div>
        </div>
      </div>
      <div className=" my-16">
        <h1 className="text-center font-bold text-4xl color_text mt-8 mb-12  text_color ">
          {" "}
          Aplicaciones
        </h1>
        <div className=" grid grid-cols-1  md:grid-cols-3 gap-y-16 text-center place-content-center  w-3/4 my-auto mx-auto">
          <div className="w-44 h-44  flex mx-auto my-auto caja ">
            <div className=" content-center items-center mx-auto my-auto ">
              <img
                className=" w-20 h-20 mx-auto "
                src={Intranet}
                alt="Intranet"
                border="0"
              />
              <p className="sub_title font-bold">Intranet DPJD</p>
            </div>
          </div>

          <div className=" w-44 h-44   flex mx-auto my-auto caja ">
            <div className=" content-center items-center mx-auto my-auto ">
              <img
                src={Orion}
                alt="Orion"
                border="0"
                className="w-28 h-24 mx-auto object-contain"
              />
              <p className="sub_title font-bold">Soft Admin</p>
            </div>
          </div>

          <div className="w-44 h-44   flex mx-auto my-auto caja">
            <div className=" content-center mx-auto my-auto ">
              <img
                src={Soporte}
                alt="soporte"
                border="0"
                className="w-20 h-24 mx-auto object-contain"
              />
              <p className="sub_title font-bold">Soporte Interno</p>
            </div>
          </div>
          <div className="w-44 h-44   flex mx-auto my-auto caja ">
            <div className=" content-center items-center mx-auto my-auto  ">
              <img
                src={Autlok}
                alt="Autlook"
                border="0"
                className="w-16 h-24 mx-auto object-contain"
              />
              <p className="sub_title font-bold my-2">Correo Corporativo</p>{" "}
            </div>
          </div>
          <div className="w-44 h-44   flex mx-auto my-auto caja">
            <div className=" content-center items-center  mx-auto my-auto ">
              <img
                src={Sap}
                alt="Sap"
                border="0"
                className="w-20 h-20 mx-auto object-contain "
              />
              <p className="sub_title font-bold my-2">
                Software Gestión <p>de Procesos</p>{" "}
              </p>
            </div>
          </div>
          <div className="w-44 h-44   flex mx-auto my-auto caja">
            <div className=" content-center items-center  mx-auto my-auto ">
              <img
                src={Sarglaft}
                alt="Outlooks"
                border="0"
                className="w-20 h-20 mx-auto object-contain"
              />
              <p className="sub_title font-bold"> Políticas </p>{" "}
              <p className="sub_title font-bold">SAGRILAFT</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Redes />
      </div>
      <Footers />
    </div>
  );
};
