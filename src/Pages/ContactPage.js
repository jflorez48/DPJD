import React from 'react'
import { Contacto, Formcontact } from '../Componentes/Contacto/Contacto'
import { Formcontacto } from '../Componentes/Contacto/Formulario'
import { Footer } from '../Componentes/footer/footer'
import { Footers } from '../Componentes/footer/footer2'
import Navbar from '../Componentes/Navbar/Navbar'


export const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="banner_contact flex ">
          <div class=" text-center  mx-auto my-auto text-white  ">
            <h1 className="font-bold text-3xl md:text-6xl "> Contáctanos</h1>
            <p className=" font-semibold text-xl md:text-3xl ">Cuenta con nosotros</p>
          </div>

        </div>



      </div>
      <Contacto />

      <Formcontacto />
      <Footers />
    </div>
  )
}
