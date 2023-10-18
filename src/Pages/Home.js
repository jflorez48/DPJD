import React, { useEffect, useState } from "react";
import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material";
import { Bannert } from "../Componentes/Banners/Bannert";
import Slider, { Carouselhome } from "../Componentes/Carrousels/Carouselhome";
import SliderHome from "../Componentes/Carrousels/SliderHome";
import { Containerbtn } from "../Componentes/Containerbtn/Index";
import { Footer } from "../Componentes/footer/footer";
import { Footers } from "../Componentes/footer/footer2";
import { Header } from "../Componentes/Header/Header";
import { Mapa } from "../Componentes/Mapa/Mapa";
import Navbar from "../Componentes/Navbar/Navbar";
import { Redes } from "../Componentes/Redesociales/Redes";

import Wow from "../Componentes/servicios/Servicio";
import Slide from "../Componentes/Slide/Slide";
import ScrollButton from "../Componentes/Containerbtn/Botonup";


export const Home = () => {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    } , 1000);
  } , []);

 

  return (
  <div >
    {/* {loading ? (
      <>
       <Skeleton variant="rectangular" width="100%" height={100} animation="wave"
      className="mb-3" />
      
      <Skeleton variant="rectangular" width="100%" height={350}
      animation="wave"
      />
       <Skeleton variant="rectangular" width="100%" height={100} animation="wave"
      className="my-3" />

      </>
     
     
      
    ) : ( */}
      <>
     <Navbar />

       <SliderHome />
       <Slide />
      

       <Containerbtn />
       <Bannert />

       <div>
         <Redes />
         <div className=" md:flex  hidden">
           <ScrollButton />
         </div>
       </div>

       <Wow />


       <Mapa />
       <Footers />
     
      
      </>
     
    
    </div>
  );
};
