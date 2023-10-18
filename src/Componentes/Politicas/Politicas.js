import React from "react";
import Intranet from "../../assets/img/Orion.png";

export default function Politicas({ }) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className="flex ">

            <div className=" my-16">

                <div className="w-44 h-44  flex mx-auto my-auto  ">
                    <button
                        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(true)}
                    >
                        <h3>POLÍTICA DE SEGURIDAD Y SALUD EN EL TRABAJO</h3>
                    </button>
                    {showModal ? (
                        <>
                            <div className="justify-center items-center  overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-[90%]">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                                            <h3 className="text-3xl font-semibold"> POLÍTICA DE SEGURIDAD Y SALUD EN EL TRABAJO</h3>
                                            <button
                                                className=" bg-red-800"
                                                onClick={() => setShowModal(false)}
                                            >

                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className=" p-6 flex-auto ">


                                            <p class="justify">Distribuciones Pastor Julio Delgado S.A., declara su compromiso de proteger, mantener y mejorar las condiciones de Seguridad y Salud de todos sus trabajadores, visitantes, contratistas y demás personas que intervienen directamente en la ejecución de sus procesos; a través de la planeación, implementación y evaluación del Sistema de Gestión de Seguridad y Salud en el Trabajo para la gestión de los riesgos laborales.</p>
                                            <p class="justify">Para Distribuciones Pastor Julio Delgado S.A., el talento humano es su recurso más valioso, por ello, la gerencia se compromete a la mejora continua de la gestión de la seguridad y salud en el trabajo, la oportuna identificación de peligros, valoración de riesgos y determinación de controles encaminados a la promoción y prevención de que puedan generar enfermedades laborales, incidentes, accidentes de trabajo y emergencias, para lo cual dispone de todos los recursos humanos, físicos y financieros respectivos así como los que se requieren para el desarrollo efectivo de actividades y programas que contribuyen a fortalecer la eficiencia de los trabajadores, la competitividad y buena imagen organizacional; cumpliendo estrictamente con la legislación Colombiana de Seguridad y Salud en el Trabajo y otros requisitos que al respecto suscriba la compañía; fomentando la participación de todos los niveles de la organización en cada una de las sucursales y generando un compromiso individual y colectivo de autocuidado en cada uno de los empleados.</p>
                                            <p class="justify">Esta política se comunica a todas las personas que trabajan bajo el control de la organización, está disponible para las partes interesadas y se revisa cada año con el objeto de asegurar su pertinencia y validez.
                                                <p class="justify">La misma se adelanta de forma mancomunada con el COPASST, EL COMITÉ DE CONVIVENCIA LABORAL y la oficina de GESTION HUMANA DE LA COMPAÑÍA.
                                                </p>

                                            </p>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >

                                            </button>
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Cerrar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
            </div>






        </div>

    );
}
