import React from 'react'
import logo from "../../assets/img/Logo.png";
import { Link } from 'react-router-dom';

export const Footers = () => {
    return (
        <div className="grid grid-cols-1  md:grid-cols-4  bg-gradient-to-r from-[#2E46B9] to-[#233487] md:h-36 items-center 
         ">

            <div className="border-r-2 h-[70%] my-auto border-r-white flex">
                <Link to='/' className=" my-auto mx-auto" >
                    <img src={logo} alt="logo" />
                </Link>

            </div>
            <div className="text-white p-0  mt-6 md:mt-0 w-6/6 text-left ml-8 md:ml-4 ">
                <p className=" mb-3 text-[14px] leading-none ">Empresa distribuidora y comercializadora de productos de consumo masivo.</p>

                <p className='text-[14px]'><a className='text-[14px]' href="tel:+607 6371018">Tel. 607 6371018</a></p>

                <a href="mailto:contactenos@dpjd.com">contactenos@dpjd.com</a>
            </div>
            <div></div>
            <div className="">
                <ul className=" text-white pt-3 ml-8 text-[14px] ">
                    <li className=" text-white ">
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/Conocenos'>Nuestra compañía</Link>
                    </li>
                    <li>
                        <Link to='/Marcas'>Marcas propias</Link>
                    </li>
                    <li>
                        <Link to='/job'>Trabaja con nosotros</Link>
                    </li>
                    <li>
                        <a href='http://localhost/Formulario/form.html'>Contáctanos</a>
                    </li>

                </ul>
            </div>
            <div class="container pt-9 bg-gradient-to-r from-[#2E46B9] to-[#233487] md:hidden flex ">
                <div class="flex justify-center mb-9 mx-auto">
                    <a href="https://www.facebook.com/Distribuciones-Pastor-Julio-Delgado-111751904962724" class="mr-9 text-white ">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="facebook-f"
                            class="svg-inline--fa fa-facebook-f w-[13px]"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <path
                                fill="currentColor"

                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            ></path>
                        </svg>
                    </a>


                    <a href="https://www.instagram.com/pastorjuliodelgado/" class="mr-9 text-white">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="instagram"
                            class="svg-inline--fa fa-instagram w-[20px]"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            ></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/dpjd/" class="mr-9 text-white ">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="linkedin-in"
                            class="svg-inline--fa fa-linkedin-in w-[20px]"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                            ></path>
                        </svg>
                    </a>

                </div>
            </div>



        </div>
    )
}
