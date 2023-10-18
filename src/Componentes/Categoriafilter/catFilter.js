import React, { useEffect, useState } from "react";
import "../Slide/slide.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Alimentos from "../../assets/imgcat/Alimentos.png";
import Cuidadoh from "../../assets/imgcat/Cuidado_hogar.png";
import Cuidadop from "../../assets/imgcat/Cuidado_Personal.png";
import farmacia from "../../assets/imgcat/Farmacia.png";
import Mascotas from "../../assets/imgcat/Mascotas.png";
import Papeleria from "../../assets/imgcat/Papeleria.png";

export const CatFilter = () => {
  // Crear array de las imagenes por catergorias

  let i = [
    require("../../assets/imgcat/Alimentos.png"), // Alimentos
    require("../../assets/imgcat/Papeleria/2.png"),
  ];

  let imagenesPapeleria = [
    require("../../assets/imgcat/Papeleria/1.png"),
    require("../../assets/imgcat/Papeleria/2.png"),
    require("../../assets/imgcat/Papeleria/1.png"),
    require("../../assets/imgcat/Papeleria/2.png"),
    require("../../assets/imgcat/Papeleria/1.png"),
    require("../../assets/imgcat/Papeleria/2.png"),
  ];
  let imagenesAlimentos = [
    require("../../assets/imgcat/Alimentos/1.png"),
    require("../../assets/imgcat/Alimentos/2.png"),
    require("../../assets/imgcat/Alimentos/3.png"),
    require("../../assets/imgcat/Alimentos/4.png"),
    require("../../assets/imgcat/Alimentos/5.png"),
    require("../../assets/imgcat/Alimentos/6.png"),
  ];
  let imagenesCuidadoH = [
    require("../../assets/imgcat/CuidadoH/1.png"),
    require("../../assets/imgcat/CuidadoH/2.png"),
    require("../../assets/imgcat/CuidadoH/3.png"),
    require("../../assets/imgcat/CuidadoH/4.png"),
    require("../../assets/imgcat/CuidadoH/5.png"),
    require("../../assets/imgcat/CuidadoH/6.png"),
  ];
  let imagenesCuidadoP = [
    require("../../assets/imgcat/Cuidadop/1.png"),
    require("../../assets/imgcat/Cuidadop/2.png"),
    require("../../assets/imgcat/Cuidadop/3.png"),
    require("../../assets/imgcat/Cuidadop/4.png"),
    require("../../assets/imgcat/Cuidadop/5.png"),
  ];
  let imagenesMascotas = [
    require("../../assets/imgcat/Mascotas/1.png"),
    require("../../assets/imgcat/Mascotas/2.png"),
    require("../../assets/imgcat/Mascotas/1.png"),
    require("../../assets/imgcat/Mascotas/2.png"),
    require("../../assets/imgcat/Mascotas/1.png"),
    require("../../assets/imgcat/Mascotas/2.png"),
  ];
  let imagenesMedicamentos = [
    require("../../assets/imgcat/Medicamentos/1.png"),
    require("../../assets/imgcat/Medicamentos/2.png"),
    require("../../assets/imgcat/Medicamentos/3.png"),
    require("../../assets/imgcat/Medicamentos/4.png"),
    require("../../assets/imgcat/Medicamentos/5.png"),
    require("../../assets/imgcat/Medicamentos/6.png"),
  ];

  let nombre = [
    "Alimentos",
    "Cuidado del Hogar",
    "Cuidado Personal",
    "Mascotas",
    "Farmacia",
    "Papeleria",
  ];
  let categoriasAl = ["Alimentos"];
  let categoriasCuidadoH = ["Cuidado del Hogar"];
  let categoriasCuidadoP = ["Cuidado Personal"];
  let categoriasMascotas = ["Mascotas"];
  let categoriasFarmacia = ["Farmacia"];
  let categoriasPapeleria = ["Papelería"];

  // Imprimir array categorias

  const [dataImg, setDataImg] = useState({ img: imagenesAlimentos });
  const [dataImg2, setDataImg2] = useState({ imge: categoriasAl, idImge: 0 });

 



  const cargarImagenes = () => {
    return dataImg.img.map((img, index) => {
      return (
        <div key={index}>
          {" "}
          <img src={img} alt="imagen" />
        </div>
      );
    });
  };
  const cargarImagenes2 = () => {
    return dataImg2.imge.map((imge, index) => {
      return (
        <p
          key={index}
          className=" ml-8   lg:ml-[200px] text-color-pastor font-semibold"
        >
          Categorias <ChevronRightIcon />
          {imge}
        </p>
      );
    });
  };

  return (
    <div className="container">
      <h1 className=" ml-8 md:ml-12 my-9 font-bold text-4xl  text-color-pastor">
        Categorías
      </h1>

      <div className="flex">{cargarImagenes2()}</div>
      <div> </div>
      <div className=" grid grid-cols-1 md:grid-cols-7  items-center content-center  ">
        <div className="   mx-auto flex flex-col items-center  w-24 h-24 "></div>

        <div className="col-span-5">
          <div className="slider rounded-lg shadow-lg ">
            <div class="slide-track ">
              <div class="slide flex ">{cargarImagenes()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="grid grid-cols-3 md:grid-cols-6 content-center my-10 gap-3 mx-3 md:mx-auto md:gap-16 w-full md:w-[70%]">
          <div
            className="cursor-pointer flex flex-col items-center hover:scale-110"
            onClick={() => {
              setDataImg({ img: imagenesAlimentos });
              setDataImg2({ imge: categoriasAl, idImge: 3 });
            }}
          >
            {dataImg2.idImge === 3 ? (
              <>
                <img
                  src={Alimentos}
                  alt=""
                  className=" scale-105 md:scale-125 "
                />
                <h1 className="text-sm font-semibold text-center  text-color-pastor mt-1 hover:scale-110 scale-110">
                  Alimentos
                </h1>
              </>
            ) : (
              <>
                <img src={Alimentos} alt="" className="w-24 h-24" />
                <h1 className="text-sm font-semibold text-center  text-color-pastor mt-1 hover:scale-110">
                  Alimentos
                </h1>
              </>
            )}
          </div>
          <div
            className="cursor-pointer flex flex-col items-center hover:scale-110 "
            onClick={() => {
              setDataImg({ img: imagenesCuidadoH });
              setDataImg2({ imge: categoriasCuidadoH, idImge: 1 });
            }}
          >
            {dataImg2.idImge === 1 ? (
              <>
                <img
                  src={Cuidadoh}
                  alt=""
                  className=" scale-105 md:scale-125 "
                />
                <h1 className="text-sm font-semibold text-center  text-color-pastor mt-1 scale-110">
                  Cuidado Hogar
                </h1>
              </>
            ) : (
              <>
                <img src={Cuidadoh} alt="" className="w-24 h-24" />
                <h1 className="text-sm font-semibold text-center  text-color-pastor mt-1">
                  Cuidado Hogar
                </h1>
              </>
            )}
          </div>
          <div
            className="cursor-pointer flex flex-col items-center hover:scale-110"
            onClick={() => {
              setDataImg({ img: imagenesCuidadoP });
              setDataImg2({ imge: categoriasCuidadoP, idImge: 2 });
            }}
          >
            {dataImg2.idImge === 2 ? (
              <>
                <img
                  src={Cuidadop}
                  alt=""
                  className=" scale-105 md:scale-125 "
                />
                <h1 className="text-sm font-semibold text-center  text-color-pastor mt-1 hover:scale-110 scale-110 ">
                  Cuidado Personal{" "}
                </h1>
              </>
            ) : (
              <>
                <img src={Cuidadop} alt="" className="w-24 h-24" />
                <h1 className="text-sm font-semibold text-center  text-color-pastor mt-1 hover:scale-110">
                  Cuidado Personal
                </h1>
              </>
            )}
          </div>

          <div
            className="cursor-pointer flex flex-col items-center hover:scale-110"
            onClick={() => {
              setDataImg({ img: imagenesMedicamentos });
              setDataImg2({ imge: categoriasFarmacia, idImge: 4 });
            }}
          >
            {dataImg2.idImge === 4 ? (
              <>
                <img
                  src={farmacia}
                  alt=""
                  className=" scale-105 md:scale-125 "
                />
                <h1 className="text-sm font-semibold text-center  text-color-pastor mt-1 hover:scale-110 scale-110">
                  Farmacia
                </h1>
              </>
            ) : (
              <>
                <img src={farmacia} alt="" className="w-24 h-24" />
                <h1 className="text-sm font-semibold text-center  text-color-pastor mt-1 hover:scale-110">
                  Farmacia
                </h1>
              </>
            )}
          </div>
          <div
            className="cursor-pointer flex flex-col items-center hover:scale-110"
            onClick={() => {
              setDataImg({ img: imagenesMascotas });
              setDataImg2({ imge: categoriasMascotas, idImge: 5 });
            }}
          >
            {dataImg2.idImge === 5 ? (
              <>
                <img
                  src={Mascotas}
                  alt=""
                  className=" scale-105 md:scale-125"
                />
                <h1 className="text-sm font-semibold text-center  text-color-pastor mt-1 hover:scale-110 scale-110">
                  Mascotas
                </h1>
              </>
            ) : (
              <>
                <img src={Mascotas} alt="" className="w-24 h-24" />
                <h1 className="text-sm font-semibold text-center  text-color-pastor mt-1 hover:scale-110">
                  Mascotas
                </h1>
              </>
            )}
          </div>
          <div
            className="cursor-pointer flex flex-col items-center hover:scale-110"
            onClick={() => {
              setDataImg({ img: imagenesPapeleria });
              setDataImg2({ imge: categoriasPapeleria, idImge: 6 });
            }}
          >
            {dataImg2.idImge === 6 ? (
              <>
                <img
                  src={Papeleria}
                  alt=""
                  className=" scale-105 md:scale-125 "
                />
                <h1 className="text-sm font-semibold text-center  text-color-pastor mt-1 hover:scale-110 scale-110">
                  Papeleria
                </h1>
              </>
            ) : (
              <>
                <img src={Papeleria} alt="" className="w-24 h-24" />
                <h1 className="text-sm font-semibold text-center  text-color-pastor mt-1 hover:scale-110">
                  Papeleria
                </h1>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
