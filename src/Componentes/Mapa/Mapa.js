import React, { useEffect, useState } from "react";
import "./Mapa.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import mapa from "../../assets/img/Mapa_dpjd.png";
import slogan from "../../assets/img/banner2.jpg";
import { ReactComponent as Location } from "../../assets/img/Location.svg"
import { ReactComponent as Locationred } from "../../assets/img/Locationred.svg"
import { Boton } from "../Containerbtn/Boton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";

export const Mapa = () => {
    // array de objetos direccion y telefono de los distintos locales de la empresa
    const direcciones = [
        {

            ciudad: "Bucaramanga",
            direccion: " Calle 70 No. 44W - 150",
            complemento: "Vía Girón",
            telefono: "(607) 6371018",
            Email: "contactenos@dpjd.com",
            // Horarios
            horario: " 7:00 a.m. - 5:00 p.m.",
            horario2: " 7:00 a.m. - 12:30 p.m.",

        },
        {

            ciudad: "Cúcuta",
            direccion: " N.S. Avda. 6 No.8N-70 zona industrial",
            complemento: "vía aeropuerto zona industrial",
            telefono: "(607) 5780670",
            Email: "contactenos@dpjd.com",
            // Horarios
            horario: " 7:00 a.m. - 5:00 p.m.",
            horario2: " 7:00 a.m. - 12:30 p.m.",
        },
        {

            ciudad: "Valledupar",
            direccion: " Manzana 29-30",
            complemento: "vía aeropuerto zona industrial",
            telefono: "(605) 5820404",
            Email: "contactenos@dpjd.com",
            // Horarios
            horario: " 7:00 a.m. - 5:00 p.m.",
            horario2: " 7:00 a.m. - 12:30 p.m.",

        },
        {

            ciudad: "Duitama",
            direccion: " Calle 3 No. 3-Manzana 1 bodega 1",
            complemento: " Ciudadela industrial",
            telefono: "(608) 7638012",
            Email: "contactenos@dpjd.com",
            // Horarios
            horario: " 7:00 a.m. - 5:00 p.m.",
            horario2: " 7:00 a.m. - 12:30 p.m.",

        },
        {

            ciudad: "Aguachica",
            direccion: " Calle 5 No. 37 - 40",
            complemento: "Barrio Maria Eugenia",
            telefono: "3174287168",
            Email: "contactenos@dpjd.com",
            // Horarios
            horario: " 7:00 a.m. - 5:00 p.m.",
            horario2: " 7:00 a.m. - 12:30 p.m.",

        }
    ];
    // imprimir el array de direcciones
    

    const [dataMap, setDataMap] = useState({ dir: direcciones[0], idMap: 0 });


    useEffect(() => {
        setDataMap({ ...dataMap, dir: direcciones[0] });
    }, [])


    return (
        <div className="contenedor_section mt-32">

            <div className="contenedor_mapa     ">
                <div className="mapa_informacion z-50  border-slate-300 rounded-lg shadow-[4px_2px_10px_rgba(192,192,192,0.9)] ">
                    <h3> Centros de distribución</h3>
                    <div className="mapa_informacion_title flex">

                        <LocationOnIcon className="mx-auto" />

                        <p className="mapa_informacionp mx-auto"> {dataMap.dir.ciudad}</p>
                    </div>

                    <div className="mapa_informacion_contacto ">
                        <div className="">
                            <b className="text-color-pastor"> Dirección</b>
                            <p  className="mb-4">

                                {dataMap.dir.direccion} <br />  {dataMap.dir.complemento}
                            </p>

                            <b className="text-color-pastor">Email</b>
                            <p className="mb-4">{dataMap.dir.Email}</p>
                            
                        </div>
                        <div className="">
                            <b className="text-color-pastor">Teléfono</b>
                            <p>{dataMap.dir.telefono}</p>
                        </div>
                    </div>

                    <b className="text-color-pastor">Horario</b>
                    <div className="mapa_horario">
                        <div>
                            <p >Lunes a Viernes </p>
                            <p className="font-semibold">{dataMap.dir.horario}</p>
                           


                        </div>
                        <div>
                            <p className="text-color-pastor">Sábados </p>
                            <p className="font-semibold">{dataMap.dir.horario2}</p>
                        </div>
                    </div>
                </div>
                <div className="mapa  ">
                    <img src={mapa} alt="mapa" className="  h-[420px] w-[600px]  " />
                    <div className="flex " onClick={() => { setDataMap({ dir: direcciones[1], idMap: 1 }) }}>
                        {/* Cucuta */}
                      
                        {dataMap.idMap === 1
                        
                        
                        
                         ? <Locationred width="40px" className="-mt-[47.5%] ml-[65%] cursor-pointer scale-125" /> : <Location width="40px" className="-mt-[47.5%] ml-[65%] cursor-pointer" />}


                    </div>
                    <div className="flex z-20 " onClick={() => { setDataMap({ dir: direcciones[3], idMap: 3 }) }}>
                        {/* Duitama */}
                      
                        {dataMap.idMap === 3 ? <Locationred width="40px" className="-mt-[28%] ml-[59%] cursor-pointer scale-125" /> : <Location width="40px" className="-mt-[28%] ml-[59%] cursor-pointer" />}



                    </div>
                    <div className="flex z-20  " onClick={() => { setDataMap({ dir: direcciones[4], idMap: 4 }) }}>





                        {/* Aguachica */}
                        {dataMap.idMap === 4 ? <Locationred width="40px" className="-mt-[57%] ml-[51.5%] cursor-pointer scale-125" /> : <Location width="40px" className="-mt-[57%] ml-[51.5%] cursor-pointer" />}


                    </div>
                    <div className="flex z-20 "  onClick={() => { setDataMap({ dir: direcciones[2], idMap: 2 }) }}>
                        {/* Valledupar */}
                       
                        {dataMap.idMap === 2 ? <Locationred width="40px" className="-mt-[72%] ml-[56.8%] cursor-pointer scale-125" /> : <Location width="40px" className="-mt-[72%] ml-[56.8%] cursor-pointer" />}



                    </div>
                    <div className="flex z-20 "  onClick={() => { setDataMap({ dir: direcciones[0], idMap: 0 }) }}>
                        {/* Bucaramanga */}
                   
                        {dataMap.idMap === 0 ? <Locationred width="40px" className="-mt-[40%] ml-[58%] cursor-pointer scale-125" /> : <Location width="40px" className="-mt-[40%] ml-[58%] cursor-pointer" />}


                       

                    </div>



                </div>
            </div>

            <div className="Contenedor_direcciones_mobil">
                <div class="faq-container">
                    <details open>
                        <summary>Sede principal <ExpandMoreIcon className="ml-32" /></summary>
                        <h4> Dirección</h4>
                        <p>

                            Calle 70 No. 44W - 150 <br /> Autopista Girón
                        </p>

                        <h4>E-Mail</h4>
                        <p> contactenos@dpjd.com</p>
                        <h4>Teléfono</h4>
                       
                        <p className='text-[14px]'><a className='text-[16px]' href="tel:607 6371018"> 607 6371018</a></p>
                    </details>

                    <details>
                        <summary> Sucursal Cucuta <ExpandMoreIcon className="ml-28" /> </summary>
                        <h4> Dirección</h4>
                        <p>

                            N.S. Avda. 6 No.8N-70 zona industrial
                            <br /> vía aeropuerto zona industrial
                        </p>

                        <h4>Teléfono</h4>
                       
                        <p className='text-[14px]'><a className='text-[16px]' href="tel:5780670"> 5780670</a></p>
                    </details>

                    <details>
                        <summary>Sucursal Valledupar <ExpandMoreIcon className="ml-20" /> </summary>
                        <h4> Dirección</h4>
                        <p>

                            Manzana 29-30 <br /> vía aeropuerto zona industrial
                        </p>

                        <h4>Teléfono</h4>
                       
                        <p className='text-[14px]'><a className='text-[16px]' href="tel:5820404"> 5820404</a></p>
                    </details>

                    <details>
                        <summary> Sucursal Duitama <ExpandMoreIcon className="ml-24" />  </summary>
                        <h4> Dirección</h4>
                        <p>

                            Calle 3 No. 3-Manzana 1 bodega 1 <br /> Ciudadela industrial
                        </p>

                        <h4>Teléfono</h4>
                        

                        <p className='text-[14px]'><a className='text-[16px]' href="tel:7638012"> 7638012</a></p>
                    </details>

                    <details>
                        <summary>Sucursal Aguachica <ExpandMoreIcon className="ml-20" />  </summary>
                        <h4> Dirección</h4>
                        <p>

                            Calle 5 No. 37 - 40 <br /> Barrio Maria Eugenia
                        </p>

                        <h4>Teléfono</h4>
                        
                        <p className='text-[14px]'><a className='text-[16px]' href="tel:3174287168"> 3174287168</a></p>
                    </details>
                </div>
            </div>

            <div className="slogan_container">
                <img src={slogan} alt="slogan" />

            </div>
            <div className="flex">
                <div className="alinear_boton">
                    <Link to="/contacto"> <Boton text="Contactar ahora" /></Link>
                </div>
            </div>
        </div>
    );
};
