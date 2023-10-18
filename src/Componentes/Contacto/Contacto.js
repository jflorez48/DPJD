import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Boton } from "../Containerbtn/Boton";
import Navbar from "../Navbar/Navbar";
import emailjs from "@emailjs/browser";
import "./Contacto.css";
export const Contacto = () => {
    return (
        <div className="  mx-8 relative  ">
            <div className=" grid grid-cols-1  h-96  md:grid-cols-2 gap-4 mx-12 text-center place-content-center p-5">
                <div className=" relative   md:border-r-2 border-blue-900">
                    <h3 className=" font-bold text-blue-800 text-xl  ">
                        {" "}
                        Líneas de atención{" "}
                    </h3>

                    <div className=" hijo  gap-10">
                        <div className=" flex content-center items-center text-center ">
                            <div className="icon">
                                <PhoneIcon />
                            </div>
                            <div>
                                <p className="text-blue-800 font-semibold ">Sede principal</p>
                                <p className="text-neutral-600 font-semibold  text-sm ">
                                    {" "}
                                    <a className='text-[14px]' href="tel:(607) 6371018"> (607) 6371018</a>
                                </p>
                            </div>
                        </div>
                        <div className=" flex content-center items-center text-center  border-b-2 md:border-b-0  ">
                            <div className="icon">
                                <WhatsAppIcon />
                            </div>
                            <div>
                                <p className="text-blue-800 font-semibold ">
                                    Escríbenos a nuestro{" "}
                                </p>
                                <a className="text-cyan-500 font-semibold  text-sm " href="https://api.whatsapp.com/send?phone=576076371018">
                                    {" "}
                                    Chat directo a WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" mt-7 md:mt-0 ">
                    <div>
                        <h1 className="font-bold text-blue-800 text-xl  ">
                            Preguntas <br/> frecuentes{" "}
                        </h1>
                        <p className="text-neutral-500 font-semibold  text-sm text-center mt-2 ">
                            {" "}
                            Resuelve tus dudas <br /> en nuestra sección de FAQs
                        </p>
                    </div>
                    <Boton text=" Ver más" />
                </div>
            </div>
        </div>
    );
};

