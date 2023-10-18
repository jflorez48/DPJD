import React from 'react'
import './footer.css'
import Logo from './Logo.png'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div>
       {/* foooter en tailwindcss */}
       <footer class="p-4  sm:p-6 foooter_bg">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a href="" class="flex items-center">
                <img src={Logo} class="" alt="Logo" />
               
            </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                
                <ul className="Text_footer mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    <li class="mb-4">
                       <p>Info</p>
                    </li>
                    <li>
                       <p>Tel. 607 6371018</p>
                       <p className="">contactenos@dpjd.com</p>
                    </li>
                </ul>
            </div>
            
            <div>
               
                <ul className="Text_footer mb-6 text-sm font-semibold text-gray-900  dark:text-white ">
                    <li class="mb-4 ">
                        <Link  to='/' class="hover:underline">Inicio</Link>
                    </li>
                    <li>
                        <Link  to='/Conocenos' class="hover:underline">Nuestra compañía</Link>
                    </li>
                    <li class="mb-4">
                    <Link  to='/Marcas' class="hover:underline">Marcas propias</Link>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">E- Commerce</a>
                    </li>
                    <li class="mb-4">
                    <Link  to='/job' class="hover:underline">Trabaja con nosotros</Link>
                    </li>
                    <li>
                        <Link to='/contacto' class="hover:underline">Contáctanos</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="my-2.5 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2.5" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"> <span>&copy;</span> 2022 <span>Pastor Julio Delgado  All Rights Reserved</span>
        </span>
       
    </div>
</footer>


    </div>
  )
}
