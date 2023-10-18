import React from 'react'
import Vacantes, { Jobs } from '../Componentes/Jobs/Jobs'
import Navbar from '../Componentes/Navbar/Navbar'
import { Footer } from '../Componentes/footer/footer'
import './pages.css'
import { Redes } from '../Componentes/Redesociales/Redes'
import { Footers } from '../Componentes/footer/footer2'
export const Job = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="banner_jobs flex ">
                    <div class=" text-center  mx-auto my-auto text-white  ">
                        <h1 className=" text-3xl md:text-6xl font-bold"> Trabaja con</h1>
                        <p className=" text-3xl  md:text-6xl font-semibold Darkline">nosotros</p>
                    </div>

                </div>


            </div>
            <Redes />
            <Jobs />
            <Vacantes/>
           <Footers/>
        </div>
    )
}
