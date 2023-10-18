import React from 'react'
import Manuelitaimg from '../../assets/img/manuelita.png'
import Blogimg from '../../assets/img/blog.png'
import { Boton } from '../Containerbtn/Boton'
import { CardBlog } from './CardBlog'
import HomeIcon from "@mui/icons-material/Home";
import Logoazul from '../../assets/img/Logoazul.png'
import Sidebar from '../Navbar/Navblog/Sidebar'
import { Link } from 'react-router-dom'



export const Headerblog = () => {
    return (
        <div>
           
            <div className="flex justify-between items-center mx-4  ">
                <Link to="/">  <img src={Logoazul} alt="Logoazul" className="w-[12rem] h-24 object-contain"/></Link>
               
                <form class="flex items-center w-[34rem]  my-8">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full ">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-color-pastor focus:border-color-pastor block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-color-pastor dark:focus:border-color-pastor" placeholder="Ingresa una palabra clave o noticia para buscar" required />
                    </div>
                    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-color-pastor rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span class="sr-only">Search</span>
                    </button>
                </form>
             
              
              <h3 className="ml[18rem] font-bold text-color-pastor text-xl">Temas</h3>
             

                <Sidebar />


            </div>
        </div>
    )
}


export const Blogprincipal = () => {
    return (
        <div className=" w-5/6  flex  mx-auto my-16">

            <div className="grid grid-cols-1  md:grid-cols-3 gap-8 place-content-center ">
                <div className=" col-span-2">
                    <img src={Blogimg} alt="Blog_img" className="" />

                </div>
                <div className="">
                    <p className="text-gray-500 mb-4">JUNIO 24, 2022</p>
                    <h1 className="text-color-titulo2 text-2xl  font-bold">Entrenamiento Gerencial en Coaching</h1>
                    <p className="text-gray-500 mt-4 font-regular text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                    <Boton text="Ver más" 
                    />



                </div>

            </div>

        </div>
    )
}
