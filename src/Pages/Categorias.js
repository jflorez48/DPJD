import React from "react";
import { CardListBlog } from "../Componentes/Blog/CardBlog";
import { CatFilter } from "../Componentes/Categoriafilter/catFilter";
import { Header } from "../Componentes/Header/Header";
import { Footer } from "../Componentes/footer/footer";
import "./pages.css";
import Navbar from "../Componentes/Navbar/Navbar";
import { Redes } from "../Componentes/Redesociales/Redes";
import { Footers } from "../Componentes/footer/footer2";

export const Categorias = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="banner_marcas flex  ">
          <div class=" text-center  mx-auto my-auto text-white ">
            <h1 className="text-6xl font-bold"> Nuestras marcas</h1>
            <p className="text-3xl font-semibold">Proveedoras</p>
          </div>
        </div>
      </div>
      <CatFilter />
      {/* <h1 class="md:ml-4 lg:ml-16 my-12 font-bold text-4xl  text-color-pastor">Ultimas Alianzas </h1>
      */}
      <Footers />
     
    </div>
  );
};
