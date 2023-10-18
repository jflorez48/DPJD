import React from 'react'
import { Footer } from '../footer/footer';
import { Header } from '../Header/Header'
import Navbar from '../Navbar/Navbar';
import { CardBlog } from './CardBlog'
import "./Cardblog.css";

export const Blogpage = ({ Titulo, fecha, subtitulo }) => {
    return (
        <div class="container">

        <Navbar/>
            <div class=" grid grid-cols-1  md:grid-cols-4 gap-4 mx-12">
                <div class=" col-span-1 md:col-span-3 ">
                    <div className="blog_titulo">
                        
                        <p class="text-sm text-stone-500">24 Jul 2021, 04:38 pm</p>
                        <h2 class=" text-center md:text-justify font-bold text-2xl  mt-4 mb-3 ">Bienvenidos a la familia, Juan Valdez Café</h2>

                        <img class="  h-40 " src=" https://api.lorem.space/image/house?w=650&h=350" alt="" />


                    </div>
                    <div class="blog_descripcion ">
                        <h4 class=" mt-12 mb-2 text-lg font-semibold"> Historia</h4>

                        <p class="text-stone-500">Procafecol S.A. nace en 2002 con el objetivo de generar negocios de valor agregado para los caficultores y su marca Juan Valdez® que cuenta con cuatro líneas de negocio: Tiendas especializadas, grandes superficies, canal institucional y el portal e-commerce. Nuestra relación con los caficultores colombianos es por varias vías: la primera, es el reconocimiento a la calidad de su café mediante el pago de una prima por calidad; la segunda, es el posicionamiento del café de Colombia en el mundo; y la tercera, es el compromiso permanente de generar valor al Fondo Nacional del Café (FoNC) para la generación de bienes públicos y los proyectos de Sostenibilidad en Acción® de la Federación de Cafeteros de Colombia. </p>

                        <img class=" mt-5 mb-4 " src="https://api.lorem.space/image/house?w=650&h=350" alt="" />

                        <div class="grid grid-cols-1  md:grid-cols-3 gap-2 mt-12 mb-8 ">
                            <div class=" col-span-1 md:col-span-2  text-stone-500  ">
                                <p>Creemos en buscar metas retadoras y en alcanzar objetivos cuidando el bienestar propio y de los demás. Nos gusta planear y priorizar para lograr resultados.</p> <br />

                                <p> Creemos en la comunicación abierta y en compartir la información para tomar buenas decisiones. Valoramos el conocimiento de diferentes prácticas para tomar mejores decisiones, <span class="font-bold"> FELICITACIONES POR ESTA NUEVA ALIANZA.</span> </p>

                            </div>
                            <div class=" ">
                                <img src="https://api.lorem.space/image/house?w=250&h=250" alt="" />
                            </div>




                        </div>


                    </div>




                </div>
                <div class=" color_text  bg-gray-100 text-center">
                    <h2 class="mt-12 mb-6 text-2xl font-semibold "> Recientes</h2>

                    <CardBlog />
                    <CardBlog />
                    
                   
                </div>


            </div>

            <Footer />

        </div>
    )
}
