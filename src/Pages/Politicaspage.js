import React from 'react'
import { Footers } from '../Componentes/footer/footer2'
import Navbar from '../Componentes/Navbar/Navbar'
import Politicas from '../Componentes/Politicas/Politicas'
import PoliticasP, { PoliticasAcos, Politicasps, Politicassis, Politicassv, Politicastd } from '../Componentes/Politicas/PoliticasP'

export const Politicaspage = () => {
  return (
    <div >
      <Navbar />
      <div className="banner_politicas  flex ">
        <div class=" text-center  mx-auto my-auto text-white  ">
          <h1 className="font-bold text-3xl md:text-6xl "> Políticas </h1>
          <p className=" font-semibold text-xl md:text-3xl ">empresariales</p>
        </div>

      </div>
      
      <div className='grid grid-cols-1  md:grid-cols-3 gap-y-16 place-content-center  w-3/4 my-24 mx-auto'>
        <PoliticasP />
        <Politicassv />
        <Politicasps />
        <PoliticasAcos />
        <Politicastd />
        <Politicassis />

      </div>
      <Footers />



    </div>
  )
}
