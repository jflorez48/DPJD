import React from "react";

import { Header } from "../Componentes/Header/Header";
import Valores, { Mision } from "../Componentes/Mision/Mision";
import { Footer } from "../Componentes/footer/footer";
import { BannerConocenos } from "../Componentes/Banners/Banner_conocenos";
import Navbar from "../Componentes/Navbar/Navbar";
import { Redes } from "../Componentes/Redesociales/Redes";
import SliderTrayectoria from "../Componentes/Carrousels/Slidetrayectoria";
import { Footers } from "../Componentes/footer/footer2";

/**
 * It returns a div with a Navbar, Mision, Valores, SliderTrayectoria, and Footers components.
 * @returns A div with a className of bg-gradient-to-r from-white to-[#E2DFE1]
 */
export const Conocenos = () => {
  return (
    <div className="bg-gradient-to-r from-white to-[#E2DFE1]">
      <Navbar />
      <Mision />
      <Valores />
      <div>
        <SliderTrayectoria />
      </div>

      <Footers />
    </div>
  );
};
