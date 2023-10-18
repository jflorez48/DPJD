import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

export const PoliticasP = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <div className=" w-44 h-44  flex mx-auto my-auto ">
                <button
                    className=" text-color-pastor caja  font-bold uppercase text-sm px-6 py-3 rounded shadow  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-110"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    POLÍTICA DE SEGURIDAD Y SALUD EN EL TRABAJO
                </button>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center  overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-[90%]">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-3 border-2 border-solid border-slate-200 rounded-t">
                                        <h3 className="text-2xl font-semibold text-center">
                                            POLÍTICA DE SEGURIDAD Y SALUD EN EL TRABAJO
                                        </h3>
                                        <button
                                            className=""
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className=" text-white bg-slate-500  opacity-60 p-2 rounded-[60%] ">
                                                <CloseIcon />
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <p className="my-4 text-slate-500 text-[16px] leading-relaxed">
                                            <p class="font-bold">DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</p>
                                            <p class="mb-4">Empresa dedicada a la comercialización de productos de consumo masivo, establece su compromiso hacia la implementación del Sistema de Gestión de la Seguridad y Salud en el Trabajo-SG-SST, para la mejora de la calidad de vida laboral en cada una de sus unidades de trabajo y sucursales a nivel nacional, contribuyendo de esta forma al bienestar integral de todos sus trabajadores, visitantes, contratistas, y demás personas que intervienen directamente en la ejecución de sus procesos.</p>

                                            <p class="mb-4">De igual manera se compromete con la identificación de peligros, evaluación y valoración de riesgos inherentes a las actividades de la empresa y los que se puedan presentar en el momento de realizar desplazamientos laborales, determinando los controles necesarios que permitan el desarrollo del trabajo de forma segura, y con el objetivo de promover y prevenir eventos que puedan generar enfermedades laborales, incidentes, accidentes de trabajo, accidentes de tránsito y emergencias.</p>

                                            <p class="mb-4">Con el propósito de llevar a cabo la planificación, implementación, seguimiento y mejora continua del SG-SST y el Plan Estratégico de Seguridad Vial (PESV), la empresa se compromete a disponer de todos los recursos humanos, físicos y financieros necesarios para el desarrollo efectivo de actividades y programas de gestión de riesgos críticos que contribuyan a un ambiente laboral seguro y sano, fomentado la participación de todos los niveles de la compañía y generando compromiso individual y colectivo de autocuidado en cada uno de sus empleados directos e indirectos.</p>

                                            <p class="mb-4">Lo anterior demarcado bajo el cumplimiento de la Legislación Colombiana Vigente aplicable en materia de Seguridad y Salud en el Trabajo, Seguridad Vial y normas de otra índole que la compañía suscriba.</p>

                                            <p class="mb-4">Esta política se comunica a todos los niveles de la organización, está disponible a las partes interesadas en instalaciones y página web, se revisa cada año y de requerirse se actualiza de acuerdo con los cambios en materia de Seguridad y Salud en el Trabajo y Seguridad Vial.</p>

                                            <p class="mb-4">La misma se adelanta de forma mancomunada con el COPASST, COMITÉ DE CONVIVENCIA LABORAL y la oficina de GESTIÓN HUMANA DE LA COMPAÑÍA.</p>

                                            <p class="font-bold">MAURICIO MONTOYA DELGADO</p>
                                            <p class="mb-4">Representante Legal</p>

                                            <p class="font-bold">Fecha de Revisión:</p>
                                            <p class="mb-1">22-06-2023</p>

                                            <p class="font-bold">Fecha de Actualización:</p>
                                            <p class="mb-4">24-06-2023</p>


                                        </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                                        <button
                                            className="bg-color-btn1 text-white active:bg-color-pastor font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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


        </>

    )
}
export default PoliticasP;



export const Politicassv = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className=" w-44 h-44  flex mx-auto my-auto ">
            <button
                className=" text-color-pastor caja  font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-110"
                type="button"
                onClick={() => setShowModal(true)}
            >
                POLITICA DE DESCONEXIÓN LABORAL
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center  overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-[90%]">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-3 border-2 border-solid border-slate-200 rounded-t">
                                    <h3 className="text-2xl font-semibold text-center">
                                        POLITICA DE DESCONEXIÓN LABORAL
                                    </h3>
                                    <button
                                        className=""
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className=" text-white bg-slate-500  opacity-60 p-2 rounded-[60%] ">
                                            <CloseIcon />
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-[16px] leading-relaxed p-4">
                                        <p class="font-bold">DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</p>
                                        <p class="mb-4">Se compromete con la protección y promoción de la salud física y mental de los trabajadores, para garantizar el goce efectivo del tiempo libre, los tiempos de descanso, licencias, permisos y/o vacaciones para conciliar la vida personal, familiar y laboral. Por tal razón establece:</p>

                                        <ul class="list-disc ml-8 mb-4">
                                            <li>Promover en todas las unidades de trabajo la planificación de reuniones dentro del horario laboral, considerando horarios de almuerzo y pausas de descanso.</li>
                                            <li>Se evitará enviar mensajes por correo electrónico, mensajería instantánea u otros medios de comunicación fuera del horario laboral, estando prohibido el envío, además, en fines de semana, festivos y vacaciones.</li>
                                            <li>En caso de que las comunicaciones sean emitidas o recibidas por fuera del horario laboral, el emisor de estas deberá tener presente que no podrá exigir respuesta al destinatario por fuera del horario laboral del mismo.</li>
                                            <li>Las comunicaciones de índole laboral serán emitidas a través de medios digitales que no tengan lugar entre la finalización de la jornada laboral y el inicio de la siguiente.</li>
                                            <li>Se promueve la libertad del emisor de mensajes con la utilización de herramientas de programación que están disponibles en los sistemas de correo electrónico para que sean recibidos dentro del horario laboral.</li>
                                            <li>Para las unidades Logística y Comercial que cuentan con un horario variable, se refuerza el cumplimiento de la jornada laboral dentro de las 48 horas semanales reglamentarias.</li>
                                            <li>Para reportar el incumplimiento de la presente política, favor comunicarse a través del correo: <a href="mailto:gestionhumana@dpjd.com">gestionhumana@dpjd.com</a></li>
                                        </ul>

                                        <p class="mb-4">Según las excepciones definidas en la Ley 2191 de 2022, la presente política no aplica para los trabajadores que desempeñen cargos de dirección, confianza y manejo; así mismo, en situaciones de fuerza mayor o casos fortuitos en los que se requiera cumplir deberes extra de colaboración con la empresa cuando sea necesario para la continuidad del servicio o para dar solución a situaciones difíciles o de urgencia en la operación de la empresa, siempre que se justifique la inexistencia de otra alternativa viable.</p>

                                        <p class="font-bold">MAURICIO MONTOYA DELGADO</p>
                                        <p class="mb-4">Representante Legal</p>

                                        <p class="font-bold">Fecha de Revisión:</p>
                                        <p class="mb-1">22-06-2023</p>

                                        <p class="font-bold">Fecha de Actualización:</p>
                                        <p class="mb-4">24-06-2023</p>

                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                                    <button
                                        className="bg-color-btn1 text-white active:bg-color-pastor font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
    )
}

export const Politicasps = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className=" w-44 h-44  flex mx-auto my-auto ">
            <button
                className=" text-color-pastor caja  font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-110"
                type="button"
                onClick={() => setShowModal(true)}
            >
                POLÍTICA DE NO CONSUMO DE ALCOHOL, TABACO Y SUSTANCIAS PSICOACTIVAS
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center  overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-[90%]">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-3 border-2 border-solid border-slate-200 rounded-t">
                                    <h3 className="text-2xl font-semibold text-center">
                                        POLÍTICA DE NO CONSUMO DE ALCOHOL, TABACO Y SUSTANCIAS PSICOACTIVAS
                                    </h3>
                                    <button
                                        className=""
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className=" text-white bg-slate-500  opacity-60 p-2 rounded-[60%] ">
                                            <CloseIcon />
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-[16px] leading-relaxed p-4">
                                        <p class="font-bold">DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</p>
                                        <p class="mb-4">Es consciente que el consumo de alcohol, tabaco y sustancias psicoactivas sin indicación médica en el entorno laboral aumenta los riesgos ocupacionales y afecta la salud de los trabajadores, por tanto, asume una posición de prevención de riesgos y promoción de la salud a través de la generación de hábitos saludables y la regulación de la conducta de los trabajadores. Por tal razón, establece como política:</p>

                                        <ul class="list-disc ml-8 mb-4">
                                            <li>Prohibido presentarse al sitio de trabajo, sea este en oficina o en campo, en estado de embriaguez o bajo el efecto de cualquier tipo de sustancia psicoactiva.</li>
                                            <li>Está prohibido el consumo de alcohol, tabaco o cualquier tipo de sustancia psicoactiva en el desarrollo de sus funciones o 24 horas antes de iniciar la jornada laboral.</li>
                                            <li>Prohibida la distribución y venta de alcohol, tabaco y otras sustancias psicoactivas en el contexto laboral.</li>
                                            <li>Se prohíbe el consumo de bebidas alcohólicas en cualquier establecimiento de comercio portando el uniforme de la empresa.</li>
                                            <li>Los colaboradores que por prescripción médica estén tomando cualquier fármaco que pueda interferir en sus capacidades para la realización normal de sus labores deberán reportarlo anticipadamente a su jefe inmediato.</li>
                                            <li>Se sensibiliza la responsabilidad de cada uno de los empleados en el cuidado de la propia vida y la seguridad de sus compañeros durante el desarrollo de las actividades laborales, para ejercer cuidado mutuo e informar a su jefe inmediato a la mayor brevedad sobre el consumo de alcohol, tabaco o cualquier tipo de sustancia psicoactiva.</li>
                                            <li>En eventos controlados y organizados por la empresa, solo la Gerencia, previa autorización escrita, tendrá la facultad para permitir el consumo de bebidas alcohólicas.</li>
                                            <li>Ningún colaborador podrá operar vehículos o cualquier medio de transporte durante su jornada laboral bajo los efectos del alcohol, tabaco o alguna sustancia psicoactiva o medicamento que pudiera afectar su capacidad para trabajar de manera segura.</li>
                                            <li>La empresa podrá realizar pruebas de alcohol y sustancias psicoactivas, directa o a través de terceros, en cualquier momento o cuando existan razones para sospechar del consumo de las mismas.</li>
                                            <li>Se realizan campañas y actividades de prevención del tabaquismo, consumo de alcohol y sustancias psicoactivas, a través de programas de promoción de estilos de vida saludables.</li>
                                            <li>La prevención del alcoholismo, tabaquismo y drogadicción forma parte del sistema de gestión de seguridad y salud en el trabajo, por lo que su divulgación se realizará en la inducción de los colaboradores de la organización DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</li>
                                        </ul>

                                        <p class="mb-4">Esta política es coherente con la legislación vigente y el reglamento interno de trabajo, por lo tanto, cualquier conducta que vaya en contra de su cumplimiento constituye justa causa para la toma de acciones disciplinarias o la terminación del contrato laboral, por parte de la oficina de Gestión Humana de la compañía.</p>

                                        <p class="font-bold">MAURICIO MONTOYA DELGADO</p>
                                        <p class="mb-4">Representante Legal</p>

                                        <p class="font-bold">Fecha de Revisión:</p>
                                        <p class="mb-1">22-06-2023</p>

                                        <p class="font-bold">Fecha de Actualización:</p>
                                        <p class="mb-4">24-06-2023</p>

                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                                    <button
                                        className="bg-color-btn1 text-white active:bg-color-pastor font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
    )
}

export const PoliticasAcos = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <div className=" w-44 h-44  flex mx-auto my-auto ">
                <button
                    className=" text-color-pastor caja  font-bold uppercase text-sm px-6 py-3 rounded shadow  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-110"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    POLÍTICA DE PREVENCIÓN DEL ACOSO LABORAL
                </button>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center  overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-[90%]">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-3 border-2 border-solid border-slate-200 rounded-t">
                                        <h3 className="text-2xl font-semibold text-center">
                                            POLÍTICA DE PREVENCIÓN DEL ACOSO LABORAL
                                        </h3>
                                        <button
                                            className=""
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className=" text-white bg-slate-500  opacity-60 p-2 rounded-[60%] ">
                                                <CloseIcon />
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <p className="my-4 text-slate-500 text-[16px] leading-relaxed p-4">
                                            <p class="font-bold">DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</p>
                                            <p class="mb-4">Buscando promover y mantener un ambiente de convivencia laboral sano, seguro y adecuado para sus trabajadores, visitantes, contratistas y demás personas que intervienen directamente en la ejecución de sus procesos, fomenta relaciones laborales positivas, respaldando la dignidad de los trabajadores con enfoque diferencial interseccional y de género, comprometiéndose en adoptar medidas para prevenir, corregir y sancionar cualquier forma de acoso laboral y otros hostigamientos en el marco de las relaciones de trabajo.</p>

                                            <p class="mb-4">Distribuciones Pastor Julio Delgado S.A., asigna los recursos físicos, técnicos y humanos necesarios para implantar y vigilar el cumplimiento de la normatividad vigente dirigida a prevenir cualquier conducta o comportamiento que implique la calificación de acoso laboral y a la vez a dar trámite oportuno a las quejas que puedan aparecer en torno al acoso laboral en el Comité de Convivencia Laboral según Resoluciones No. 652 y 1356 de 2012.</p>

                                            <p class="mb-4">La presente política se revisa periódicamente, se difunde e implementa en todos los niveles de organización y está disponible para todas las partes interesadas con el objeto de asegurar su pertinencia y validez.</p>

                                            <p class="font-bold">MAURICIO MONTOYA DELGADO</p>
                                            <p class="mb-4">Representante Legal</p>

                                            <p class="font-bold">Fecha de Revisión:</p>
                                            <p class="mb-1">22-06-2023</p>

                                            <p class="font-bold">Fecha de Actualización:</p>
                                            <p class="mb-4">24-06-2023</p>

                                        </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                                        <button
                                            className="bg-color-btn1 text-white active:bg-color-pastor font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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


        </>

    )
}
export const Politicastd = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className=" w-44 h-44  flex mx-auto my-auto ">
            <button
                className=" text-color-pastor caja  font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-110"
                type="button"
                onClick={() => setShowModal(true)}
            >
                POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center  overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-[90%] ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-3 border-2 border-solid border-slate-200 rounded-t">
                                    <h3 className="text-2xl font-semibold text-center">
                                        POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES
                                    </h3>
                                    <button
                                        className=""
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className=" text-white bg-slate-500  opacity-60 p-2 rounded-[60%] ">
                                            <CloseIcon />
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-[16px] leading-relaxed p-4">
                                        <span className="font-semibold"> 1. AMBITO DE APLICACION. </span>La presente política de tratamiento de datos personales se realiza en cumplimiento de lo dispuesto por la Ley 1581 de 2012 y Decreto Reglamentario 1377 de 2013, y será de obligatorio cumplimiento para los empleados, encargados y responsables del tratamiento de datos personales vinculados o que se llegaren a vincular con DISTRIBUCIONES PASTOR JULIO DELGADO S.A.  y se aplicaran tanto a la oficina principal del responsable como en sus sucursales. <br /> <br />

                                        <span className="font-semibold">2. PRINCIPIOS:</span>Todas las operaciones de tratamiento de datos personales que realice <span className="font-semibold"> DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</span>, así como los procedimientos elaborados para la protección de datos personales tratados, deberán sujetarse a los principios establecidos en el artículo 4 de la ley 1581 de 2012, relacionados a continuación: <br />
                                        <br />
                                        <ul className="list-disc">
                                            <li>
                                                <span className="font-semibold">  Principio de legalidad en materia de Tratamiento de datos: </span> El Tratamiento de datos personales que realiza  <span className="font-semibold"> DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</span> está alineado a una actividad legitima de acuerdo a la Constitución  Política, Ley Estatutaria 1581 de 2012, Decreto 1377 de 2013, Legislación civil, comercial y laboral.
                                            </li>
                                            <li>
                                                <span className="font-semibold">  Principio de libertad: </span>      Con excepción de los datos personales de naturaleza pública,  <span className="font-semibold"> DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</span> realiza las operaciones de tratamiento de datos con el consentimiento, previo, expreso e informado del Titular. Los datos personales no podrán ser obtenidos o divulgados sin previa autorización, o en ausencia de mandato legal o judicial que releve el consentimiento.
                                            </li>
                                            <li>
                                                <span className="font-semibold">  Principio de veracidad o calidad: </span>      Los datos personales registrados o que se llegaren a registrar en las bases de datos de  <span className="font-semibold"> DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</span>, serán completos, exactos, actualizados, comprobables y comprensibles.


                                            </li>
                                            <li>
                                                <span className="font-semibold">  Principio de transparencia:  </span>         <span className="font-semibold"> DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</span> garantiza el derecho del Titular a obtener, en cualquier momento de forma gratuita y sin restricciones, información acerca de la existencia de datos que le conciernan y que están almacenados en las bases de datos de la responsable, bajo los lineamientos del artículo 21 del Decreto 1377 de 2013.
                                            </li>
                                            <li>
                                                <span className="font-semibold"> Principio de acceso y circulación restringida: </span>         El Tratamiento de datos personales que realiza  <span className="font-semibold"> DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</span> se sujeta a los límites que se derivan de la naturaleza de los datos personales, de las disposiciones de la ley y la Constitución. En este sentido, el Tratamiento sólo podrá hacerse por personas autorizadas por el Titular y/o por las personas previstas en la Ley 1581 de 2012.



                                                Los datos personales, salvo la información pública, no podrán estar disponibles en Internet u otros medios de divulgación o comunicación masiva, salvo que el acceso sea técnicamente controlable para brindar un conocimiento restringido sólo a los Titulares o terceros autorizados conforme a la Ley 1581 de 2012 o para publicar imágenes de nuestros empleados en el entorno laboral con el objetivo de resaltar los valores corporativos e imagen institucional, previo el consentimiento, expreso e informado del trabajador. Para estos propósitos, la obligación de  <span className="font-semibold"> DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</span> será de medio y no de resultado.
                                            </li>
                                            <li><span className="font-semibold"> Principio de seguridad: </span>  <span className="font-semibold"> DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</span> como responsable del tratamiento de datos personales, proporciona con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.
                                            </li>
                                            <li>
                                                <span className="font-semibold"> Principio de confidencialidad: </span>     Todas las personas que intervengan en el Tratamiento de datos personales que no tengan la naturaleza de públicos están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el Tratamiento, pudiendo sólo realizar suministro o comunicación de datos personales cuando ello corresponda al desarrollo de las actividades autorizadas en la presente ley y en los términos de la misma. Los empleados y proveedores, aliados comerciales vinculados con  <span className="font-semibold"> DISTRIBUCIONES PASTOR JULIO DELGADO S.A.</span> que participen en la administración y manejo de bases de datos deberán suscribir acuerdos de confidencialidad, cuyas obligaciones persisten incluida después de finalizado el vínculo contractual con algunas labores que comprenden el tratamiento.
                                            </li>




                                        </ul>
                                        <br />
                                        La seguridad está enmarcada dentro de un ámbito integral de los procesos de la organización enfocados en la prevención de accidentes, cumplimiento de los requisitos legales aplicables y la mejora continua del Plan Estratégico de Seguridad Vial, para ello la gerencia garantiza la asignación de todos los recursos necesarios para desarrollar las actividades referentes a la Salud, Seguridad, Higiene y Ambiente, a través de la oficina de Gestión Humana de la empresa.

                                        <br />
                                        <br />
                                        <span className="font-semibold">  3. DEFINICIONES:</span>  Las siguientes definiciones fueron tomadas literalmente de la Ley 1581 de 2012 y sus Decretos reglamentarios, así como los conceptos, guías, circulares emitidos por la Superintendencia de Industria y Comercio, las cuales son necesarios para una correcta interpretación de la normatividad de protección de datos personales.    <br />     <br />



                                        Aviso de privacidad: Comunicación verbal o escrita generada por el Responsable, dirigida al Titular para el Tratamiento de sus datos personales, mediante la cual se le informa acerca de la existencia de las políticas de Tratamiento de información que le serán aplicables, la forma de acceder a las mismas y las finalidades del Tratamiento que se pretende dar a los datos personales.     <br />   <br />



                                        Autorización: Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de datos personales.    <br />    <br />

                                        Titular: Persona natural cuyos datos personales sean objeto de Tratamiento. <br />    <br />

                                        Base de Datos: Conjunto organizado de datos personales que sea objeto de Tratamiento. <br />    <br />

                                        Dato personal: Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables. <br />    <br />

                                        Dato público: Es el dato que no sea semiprivado, privado o sensible. Son considerados datos públicos, entre otros, los datos relativos al estado civil de las personas, a su profesión u oficio y a su calidad de comerciante o de servidor público. Por su naturaleza, los datos públicos pueden estar contenidos, entre otros, en registros públicos, documentos públicos, gacetas y boletines oficiales y sentencias judiciales debidamente ejecutoriadas que no estén sometidas a reserva. <br />    <br />



                                        Datos sensibles: Se entiende por datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías de partidos políticos de oposición, así como los datos relativos a la salud, a la vida sexual, y los datos biométricos. <br />    <br />



                                        Tratamiento: Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión. <br />    <br />



                                        Encargado del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del Responsable del Tratamiento. <br />    <br />



                                        Responsable del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el Tratamiento de los datos. <br />    <br />



                                        Transferencia: La transferencia de datos tiene lugar cuando el Responsable y/o Encargado del Tratamiento de datos personales, ubicado en Colombia, envía la información o los datos personales a un receptor, que a su vez es Responsable del Tratamiento y se encuentra dentro o fuera del país. <br />    <br />



                                        Transmisión: Tratamiento de datos personales que implica la comunicación de los mismos dentro o fuera del territorio de la República de Colombia cuando tenga por objeto la realización de un Tratamiento por el Encargado por cuenta del Responsable. <br />    <br />



                                        Registro Nacional De Bases De Datos: Es el Directorio público de las bases de datos con información personal sujetas a Tratamiento que operan en el país, administrado por la SUPERINTENDENCIA DE INDUSTRIA Y COMERCIO. <br />    <br />



                                        Incidentes de seguridad. Se refiere a la violación de los códigos de seguridad o la pérdida, robo y/o acceso no autorizado de información de una base de datos administrada por el Responsable del Tratamiento o por su Encargado, que deberán reportarse al RNBD dentro de las veinticuatro (24) horas siguientes al momento en que se detecten. <br />    <br />



                                        Reclamos presentados por los Titulares: Corresponde a la información de los reclamos presentados por los Titulares ante el Responsable y/o el Encargado del Tratamiento, según sea el caso, dentro de un semestre calendario (enero – junio y julio – diciembre), de acuerdo con la tipología establecida en el RNBD para ello. La información reportada deberá ser el resultado de consolidar los reclamos presentados por los Titulares ante el Responsable y el (los) Encargado (s) del Tratamiento. <br />    <br />

                                        <span className="font-semibold">  4.    IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO DE LA INFORMACIÓN:</span>

                                        <br />    <br />

                                        DISTRIBUCIONES PASTOR JULIO DELGADO S.A. identificada con NIT 890.204.134 con domicilio principal en la ciudad de Bucaramanga, oficina principal ubicada en la Calle 70 N° 44W – 150 KM 4 Vía Girón, Contiguo a la Dirección de Transito de Bucaramanga, teléfono 6371018 correo electrónico protecciondatos@dpjd.com.
                                        <br />    <br />

                                        <span className="font-semibold"> 5.    TRATAMIENTO DE LOS DATOS PERSONALES</span>
                                        <br />    <br />



                                        Los datos personales de las personas naturales que consta en las bases de datos de DISTRIBUCIONES PASTOR JULIO DELGADO S.A. son sometidos a distintas formas de tratamiento, como recolección, almacenamiento, consulta, uso, transmisión, transferencia, actualización, supresión, todos ellos de forma parcial o total en cumplimiento de las finalidades aquí establecidas. La información podrá ser entregada, transmitida o transferida a entidades públicas, aliados comerciales, proveedores, únicamente con el fin de cumplir con las finalidades de la base de datos correspondiente. En todo caso, la entrega, transmisión o transferencia se hará previa suscripción de los compromisos que sean necesarios para salvaguardar la confidencialidad de la información. En cumplimiento de deberes legales, DISTRIBUCIONES PASTOR JULIO DELGADO S.A. podrá suministrar la información personal a entidades judiciales o administrativas. DISTRIBUCIONES PASTOR JULIO DELGADO S.A. velará por el correcto uso de datos personales de menores de edad, garantizando que se cumpla con las exigencias legales aplicables y que todo tratamiento esté previamente autorizado y se encuentre justificado en el interés superior de los menores.
                                        <br />    <br />
                                        <span className='font-semibold'> 6.    FINALIDAD DE LOS DATOS PERSONALES </span>
                                        <br />   <br />



                                        Los datos personales suministrados tendrán como finalidades las siguientes:
                                        <br />

                                        <span className='font-semibold'> 6.1  Empleados, Aprendices, Aspirantes.
                                        </span>
                                        <br />


                                        a.     Mantener una eficiente comunicación de la información que sea de utilidad en los vínculos contractuales en los que sea parte el Empleado Titular de la Información. <br />

                                        b.    Dar cumplimiento de las obligaciones contraídas por la sociedad DISTRIBUCIONES PASTOR JULIO DELGADO S.A. con los Empleados Titulares de la Información, con relación a pago de salarios, seguridad social, prestaciones sociales y demás consagradas en el contrato de trabajo. <br />

                                        c.     Informar las modificaciones que se presenten en desarrollo del contrato de trabajo al Empleado Titular de la Información. <br />

                                        d.    Evaluar la calidad de los servicios ofrecidos por el Empleado Titular de la Información. <br />

                                        e.     Realizar estudios internos sobre los hábitos del Empleado Titular de la Información para programas de bienestar corporativo. <br />

                                        f.      Informarlo y hacerlo partícipe a través de cualquier medio acerca de actividades publicitarias y/o promocionales de DISTRIBUCIONES PASTOR JULIO DELGADO S.A. <br />

                                        g.    Utilizar la información para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. realice todas las gestiones administrativas, financieras y de mercadeo relacionadas directamente con el giro ordinario de sus actividades. <br />

                                        h.    Utilizar la información suministrada para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. la transmita o transfiera cuando sea requerido por alguna entidad estatal o tercero debidamente autorizado. <br />

                                        i.      Utilizar los datos personales recolectados para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. pueda acceder, consultar, comparar y evaluar mi información con bases de datos de centrales de riesgo crediticio, financiero, de antecedentes judiciales o de empresas de seguridad privada. <br />

                                        j.      Utilizar la información personal suministrada para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. pueda realizar y/o publicar informes estadísticos. <br />

                                        k.     Contactarlo mediante cualquier medio para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. pueda cumplir con su objeto social y para llevar a cabo el giro ordinario de sus negocios. <br />

                                        l.      Utilizar los datos personales sensibles (como fotos y huellas) para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. pueda identificarlo plenamente para cumplir con las finalidades relacionadas con el giro ordinario de sus negocios y sus actividades comerciales. <br />

                                        m.   Solicitar soportes de la hoja de vida. <br />

                                        n.    Incluirlo en una base de datos para tener un registro de la inscripción. <br />

                                        o.    Verificar el cumplimiento de requisitos como parte del proceso de selección. <br />

                                        p.    Tener un registro de quienes se presentaron y quienes fueron descartados del proceso de selección, para citación y aplicación de pruebas y entrevistas.  <br />

                                        q.    Circular y/o transmitir sus datos personales a Los trabajadores de DISTRIBUCIONES PASTOR JULIO DELGADO S.A. o terceros que realicen la evaluación de las pruebas. <br />

                                        r.     Informar resultados generales del proceso de selección en sus diferentes filtros. <br />

                                        s.     Archivar los resultados de las pruebas, para dejar registro de la asistencia a las pruebas y a la entrevista; para que los datos sean tratados directamente por DISTRIBUCIONES PASTOR JULIO DELGADO S.A. o por alguno o algunos de sus encargados. <br />
                                        <br />
                                        <span className='font-semibold'> 6.2  Clientes</span>
                                        <br /> <br />



                                        a.    Mantener informado  a los clientes a través de cualquier medio acerca de productos o servicios que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. ofrezca o llegue a ofrecer en el mercado, o los que sean ofrecidos por sus subsidiarias o aliados estratégicos. <br />

                                        b.    Informar y hacerle partícipe a través de cualquier medio acerca de actividades publicitarias y/o promocionales de DISTRIBUCIONES PASTOR JULIO DELGADO S.A. <br />

                                        c.    Utilizar su información para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. realice todas las gestiones administrativas, financieras y de mercadeo relacionadas directamente con el giro ordinario de sus actividades. <br />

                                        d.    Utilizar su información para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. la transmita o transfiera a sus aliados comerciales estratégicos con fines de impulsar el mercado y cuando sea requerido por alguna entidad estatal y/o tercero debidamente autorizado <br />

                                        e.    Utilizar su información para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. pueda acceder, consultar, comparar, evaluar y reportar mi información con bases de datos de centrales de riesgo crediticio, financiero, de antecedentes judiciales o de empresas de seguridad privada. <br />

                                        f.     Utilizar su información para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. pueda realizar y/o publicar informes estadísticos. <br />

                                        g.    Contactar a los clientes mediante cualquier medio para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. pueda cumplir con su objeto social y para llevar a cabo el giro ordinario de sus negocios. <br />

                                        h.    Utilizar sus  huellas para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. pueda identificarlo plenamente para cumplir con las finalidades relacionadas con el giro ordinario de sus negocios, sus actividades comerciales, y la constitución de garantías reales y personales.  Con ocasión a las relaciones de crédito con el titular de la información. <br /> <br />



                                        <span className='font-semibold'>  6.3  Proveedores y Contratistas</span>  <br /> <br />



                                        a.    Mantener informado a Proveedores y Contratistas a través de cualquier medio acerca de productos o servicios que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. ofrezca o llegue a ofrecer en el mercado, o los que sean ofrecidos por sus subsidiarias o aliados estratégicos. <br />

                                        b.     Informar y hacerle partícipe a través de cualquier medio acerca de actividades publicitarias y/o promocionales de DISTRIBUCIONES PASTOR JULIO DELGADO S.A. <br />

                                        c.    Utilizar su información para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. realice todas las gestiones administrativas, financieras y de mercadeo relacionadas directamente con el giro ordinario de sus actividades. <br />

                                        d.    Utilizar su información para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. la transmita o transfiera a sus aliados comerciales estratégicos con fines de impulsar el mercado y cuando sea requerido por alguna entidad estatal y/o tercero debidamente autorizado. <br />

                                        e.    Utilizar su información para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. pueda acceder, consultar, comparar y evaluar mi información con bases de datos de centrales de riesgo crediticio, financiero, de antecedentes judiciales o de empresas de seguridad privada. <br />

                                        f.     Utilizar su información para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. pueda realizar y/o publicar informes estadísticos. <br />

                                        g.    Contactarlo mediante cualquier medio para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. pueda cumplir con su objeto social y para llevar a cabo el giro ordinario de sus negocios. <br />

                                        h.    Utilizar sus  huellas para que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. pueda identificarlo plenamente para cumplir con las finalidades relacionadas con el giro ordinario de sus negocios, sus actividades comerciales y la suscripción de acuerdos contractuales con ocasión a las relaciones de crédito con el titular de la información. <br />  <br />



                                        <span className='font-semibold'> 6.4  Accionistas</span>
                                        <br /> <br />
                                        a.    Mantener una eficiente comunicación de la información que sea de utilidad en los vínculos contractuales en los que sea parte el Accionista Titular de la Información. <br />

                                        b.    Dar cumplimiento de las obligaciones contraídas por la Sociedad con el Accionista Titular de la Información. <br />

                                        c.    Informar las modificaciones que se presenten en desarrollo del contrato de sociedad al Accionista Titular de la Información. <br />
                                        <br /> <br />

                                        <span className='font-semibold'> 6.5  DATOS SENSIBLES: DISTRIBUCIONES  PASTOR JULIO DELGADO S.A.</span>    restringirá el tratamiento de datos personales sensibles a lo estrictamente indispensable y solicitará del titular su consentimiento previo y expreso, informando sobre la finalidad exclusiva de su tratamiento y que no está obligado a suministrarlo. DISTRIBUCIONES PASTOR JULIO DELGADO S.A. utilizará y tratará los datos sensibles, en los siguientes eventos: <br /> <br />

                                        <ul className='list-disc'>
                                            <li>El tratamiento haya sido autorizado expresamente por el titular de los datos sensibles, salvo en los casos que por Ley, no se requiera el otorgamiento de dicha autorización.</li>
                                            <li>El tratamiento sea necesario para salvaguardar el interés vital del titular y éste se encuentre física o jurídicamente incapacitado; para tal evento, los representantes deberán otorgar la autorización.</li>
                                            <li>El tratamiento se refiera a datos que sean necesarios para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial </li>
                                            <li>El tratamiento tenga una finalidad histórica, estadística o científica o dentro del marco de procesos de mejoramiento, siempre y cuando se adopten las medidas de anonimización de los titulares.</li>
                                        </ul>
                                        <br /> <br />
                                        <span className='font-semibold'> DATOS NIÑOS Y ADOLESCENTES: DISTRIBUCIONES  PASTOR JULIO DELGADO S.A.</span>   <br />

                                        Entiende que el tratamiento de datos personales de niños, niñas y adolescentes está proscrito por la ley a excepción de los datos de naturaleza pública, de conformidad con lo establecido en el artículo 7 de la ley 1581 de 2012, y excepcionalmente podrá realizarse tratamiento cuando se cumpla con los siguientes requisitos: <br />



                                        a.    Que responda y respete el interés superior de los niños, niñas y adolescentes. <br />

                                        b.    Que se asegure el respeto a sus derechos fundamentales. <br />



                                        Bajo los anteriores requisitos, el representante legal o tutor del niño, niña o adolescente otorgará la autorización previo ejercicio del menor de su derecho a ser escuchado, opinión que se valorará teniendo en cuenta la madurez, autonomía y capacidad para entender el asunto. <br />



                                        Cumplido lo anterior, DISTRIBUCIONES PASTOR JULIO DELGADO S.A. realiza tratamiento de datos personales de los hijos menores de edad de sus empleados, con las únicas finalidades de asegurar al niño, niña o adolescente su afiliación y cobertura en salud ante las entidades promotoras de salud e instituciones prestadoras de salud y en recreación a través de las cajas de compensación, así mismo, para otorgar regalos en fechas especiales, hacerlos participe en eventos recreativos organizados por DISTRIBUCIONES PASTOR JULIO DELGADO S.A. para los hijos de sus empleados, cuya comunicación siempre se realizará a través de sus padres. <br /> <br />
                                        <span className='font-semibold'> 7.    DERECHOS DEL TITULAR DE LA INFORMACIÓN</span> <br />
                                        <span className='font-semibold'>7.1  Del Derecho al acceso y consulta.</span> <br />

                                        DISTRIBUCIONES PASTOR JULIO DELGADO S.A. garantiza a los titulares de la información el derecho de acceso y consulta de conformidad con lo establecido en la Ley 1581 de 2012 y sus Decretos reglamentarios, previa debida acreditación como titular, representación y/o legitimidad; poniendo a su disposición de forma gratuita los datos personales objeto de tratamiento, dentro de los límites establecidos en  el artículo 21 incisos segundo y tercero.
                                        <br /> <br />



                                        <span className='font-semibold'>7.2  Del derecho de rectificación y consulta.</span>    <br />



                                        DISTRIBUCIONES PASTOR JULIO DELGADO S.A. se obliga a rectificar y actualizar a solicitud del titular, la información que a consideración del mismo, sea incompleta, incorrecta o inexacta parcial o totalmente, previa verificación y viabilidad de la solicitud; para tal efecto, DISTRIBUCIONES PASTOR JULIO DELGADO S.A. revisará que el titular informe las correcciones a realizar y aporte la documentación que sustente dicha solicitud. <br /> <br />
                                        <span className='font-semibold'>7.3  Del derecho de supresión.</span> <br />


                                        Los titulares de datos personales tienen el derecho a solicitar a DISTRIBUCIONES PASTOR JULIO DELGADO S.A. la supresión de sus datos personales contenidos en las bases de datos; siempre y cuando dichos datos no sea de naturaleza públicos según lo señalado en la ley, esto es, aquellos relativos a su estado civil, profesión u oficio, calidad de comerciante, servidor público, entre otros. <br />



                                        No obstante lo anterior, el derecho a la supresión no es un derecho absoluto,  por lo cual, DISTRIBUCIONES PASTOS JULIO DELGADO S.A. podrá negar o limitar el ejercicio del mismo en los siguientes eventos: <br />



                                        a.    El titular tenga el deber legal o contractual de permanecer en la base de datos. <br />

                                        b.    La supresión de los datos obstaculice actuaciones judiciales, administrativas vinculadas a obligaciones fiscales, parafiscales y la investigación de delitos <br />

                                        c.    Los datos personales tanto del titular como de sus hijos menores, sean necesarios para proteger los intereses jurídicamente tutelados, para realizar una función del interés  público, o para cumplir una obligación legalmente adquirida por el titular. <br />

                                        d.    Los datos sean de naturaleza pública según lo dispuesto en el artículo 3 numeral 2 del Decreto 1377 de 2013. <br /> <br />
                                        <span className='font-semibold'> Del derecho a revocar la autorización:</span> <br />

                                        Las personas naturales titulares de datos personales, podrán revocar en cualquier momento, el consentimiento al tratamiento de estos, siempre y cuando, no lo impida una disposicion legal o contractual. Para ello DISTRIBUCIONES PASTOR JULIO DELGADO S.A. dispone de mecanismos sencillos y gratuitos para revocar su consentimiento. <br /> <br />



                                        En los eventos que sea procedente la revocatoria de la autorización, se resolverá bajo las siguientes modalidades: <br />



                                        a.    Total: Sobre la totalidad de las finalidades autorizadas,  esto es, que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. deberá dejar de tratar por completo los datos del titular de datos personales. <br />

                                        b.    Parcial: Sobre ciertas finalidades consentidas como por ejemplo para fines publicitarios o estudio de mercados. En ese evento, DISTRIBUCIONES PASTOR JULIO DELGADO S.A., deberá suspender parcialmente el tratamiento y se mantendrá entonces otros fines autorizados por el titular. <br />  <br />



                                        Al igual que la supresión de datos, la revocatoria de la autorización tampoco es un derecho absoluto, y DISTRIBUCIONES PASTOR JULIO DELGADO S.A. como responsable del tratamiento de datos personales, podrá negar o limitar el ejercicio del mismo,  cuando:   <br />  <br />



                                        a.    El titular de los datos tenga el deber legal o contractual de permanecer en la base de datos. <br />

                                        e.    La revocatoria de la autorización del tratamiento obstaculice actuaciones judiciales, administrativas vinculadas a obligaciones fiscales, parafiscales y la investigación de delitos. <br />

                                        f.     Los datos personales tanto del titular como de sus hijos menores, sean necesarios para proteger los intereses jurídicamente tutelados, para realizar una función del interés  público, o para cumplir una obligación legalmente adquirida por el titular. <br />

                                        g.    Los datos sean de naturaleza pública según lo dispuesto en el artículo 3 numeral 2 del Decreto 1377 de 2013. <br /> <br />





                                        <span className='font-semibold'>8.    PROCEDIMIENTO PARA QUE LOS TITULARES DE LA INFORMACIÓN PUEDAN EJERCER LOS DERECHOS A CONOCER, ACTUALIZAR, RECTIFICAR Y SUPRIMIR INFORMACIÓN Y REVOCAR LA AUTORIZACIÓN</span> <br /> <br />

                                        <span className=' font-semibold'> 8.1  Consultas</span>  <br /> <br />



                                        Requisitos para la atención de consultas. <br />



                                        a.    Se debe enviar una comunicación física o electrónica, la cual deberá contener como mínimo fecha de solicitud, fotocopia del documento de identificación, dirección de contacto (física o electrónica) y teléfono de notificación, para el representante del titular, documento autenticado que acredite la representación si es del caso. <br />

                                        b.    Para ejercer la consulta por medio electrónico, el titular, su causahabiente, tercero autorizado o apoderado podría formularla a través del correo electrónico protecciondatos@dpjd.com adjuntando la información anteriormente señalada. <br />

                                        c.    Para ejercer este derecho por medio físico, el titular, su causahabiente, tercero autorizado o apoderado podrá radicarla en la siguiente dirección, Calle 70 N° 44W – 150 KM 4 Vía Girón, Contiguo a la Dirección de Transito de Bucaramanga adjuntando la información anteriormente señalada. <br />

                                        d.    La persona interesada en ejercer este derecho, deberá en todo caso, utilizar un medio que permita acreditar el envío y la recepción de la solicitud. Cualquiera que sea el medio utilizado; DISTRIBUCIONES PASTOR JULIO DELGADO S.A. <br /> <br />
                                        <span className='font-semibold'>Términos para la atencion de consultas.</span>  <br /> <br />



                                        Independiente del mecanimos utilizado por el titular para la solicitud de consulta, estas será atendidas en un término máximo de diez (10) dias hábiles, contados a partir de su fecha de recibo. En el evento en el que una solicitud de consulta no pueda ser atendida dentro del término antes señalado, se informará al interesado antes del vencimiento del plazo las razones por las cuales no se ha dado respuesta a su consulta, la cual en ningun caso podrá superar los cinco (5) dias hábiles siguientes al vencimiento del primer término. Si el consultante no aporta los documentos ni cumple con los requisitos establecidos con anterioridad,  se le requerirá dentro de los dos días hábiles siguientes al recibo de la solicitud, para que dentro de los cinco (5) días hábiles siguientes a la recepción de la solicitud, subsane las fallas. Transcurridos dos (2) meses desde la fecha del requerimiento, sin que el solicitante presente la información requerida, se entenderá que ha desistido de la solicitud. <br /> <br />


                                        <span className='font-semibold'> 8.2  RECLAMOS</span>   <br /> <br />



                                        El titular o sus causahabientes que consideren que la informacion contenida en una base de datos debe ser objeto de rectificación, actualización, supresión, revocatoria de autorización o cuando adviertan el presunto incumplimiento de cualquier de los deberes contenidos en la normatividad sobre proteccion de datos personlaes, podrán presentar una reclamo ante el responsable del tratamiento.
                                        <br /> <br />


                                        Requisitos para la atención de reclamos, rectificaciones, actualización o supresión de datos.
                                        <br /> <br />



                                        a.    Se debe enviar una comunicación física o electrónica, la cual deberá contener como mínimo fecha de solicitud, fotocopia del documento de identificación, dirección de contacto (física o electrónica) y teléfono de notificación, para el representante del titular, documento autenticado que acredite la representación si es del caso. <br />

                                        b.    Para ejercer el reclamo por medio electrónico, el titular, su causahabiente, tercero autorizado o apoderado podría formularla a través del correo electrónico protecciondatos@dpjd.com adjuntando la información anteriormente señalada.  <br />

                                        c.    Para ejercer este derecho por medio físico, el titular, su causahabiente, tercero autorizado o apoderado podrá radicarla en la siguiente dirección, Calle 70 N° 44W – 150 KM 4 Vía Girón, Contiguo a la Dirección de Transito de Bucaramanga adjuntando la información anteriormente señalada.    <br />

                                        d.    La persona interesada en ejercer este derecho, deberá en todo caso, utilizar un medio que permita acreditar el envío y la recepción de la solicitud. Cualquiera que sea el medio utilizado; DISTRIBUCIONES PASTOR JULIO DELGADO S.A.
                                        <br />
                                        e.    En las solicitudes de rectificación y actualización de datos personales, el titular debe indicar las correciones a realizar y aportar la documentación que avale su petición. <br />  <br />



                                        El reclamo lo podrá presentar el titular teniente en cuenta la siguiente informacion señalada en el articulo 15 de la ley 1581 de 2012 y las presentes reglas:  <br /> <br />



                                        a.    Si el reclamo estuviere incompleto, el titualr lo puede completar dentro de los cinco (5) dias hábiles siguientes a la recepción del reclamo para que subsane las fallas. Transcurridos dos (2) meses desde la fecha del requerimiento, sin que el solicitante presente la información requerida, se entenderá que ha desistido del reclamo.  <br />

                                        b.    En caso de que quien reciba el reclamo no sea competente para resolverlo, dará traslado a quien corresponda en un término máximo de dos (2) días hábiles e informará de la situación al interesado. <br />

                                        c.    Una vez recibido el reclamo completo, se incluirá en la base de datos una leyenda que diga "reclamo en trámite" y el motivo del mismo, en un término no mayor a dos (2) días hábiles. Dicha leyenda deberá mantenerse hasta que el reclamo sea decidido. <br /> <br />



                                        Reglas especiales para la Supresión: El titular de datos personales tiene el derecho, en todo momento, a solicitar a DISTRIBUCIONES PASTOR JULIO DELGADO S.A. la supresión de sus datos cuando:                                   <br /> <br />

                                        a.    Considere que los mismos no están siendo tratados conforme a los principios, deberes y obligaciones previstas en la normatividad vigente.     <br />

                                        b.    Hayan dejado de ser necesarios o pertinentes para la finalidad para la cual fueron recabados. <br />

                                        c.    Se haya superado el periodo necesario para el cumplimiento de los fines para los que fueron recabados. <br />

                                        Reglas especiales para la revocatoria de autorización: Todo titular de datos personales puede revocar, en cualquier momento, el consentimiento al tratamiento siempre y cuando no lo impida una disposición legal o contractual. <br /> <br />

                                        Se deberá tener en cuenta que existen dos modalidades en las que la revocatoria de la autorización puede darse: La primera, puede ser sobre la totalidad de las finalidades autorizadas,  esto es, que DISTRIBUCIONES PASTOR JULIO DELGADO S.A. deberá dejar de tratar por completo lo datos del titular de datos personales; la segunda, Sobre ciertas finalidades consentidas como por ejemplo para fines publicitarios o estudio de mercados. En ese evento, DISTRIBUCIONES PASTOR JULIO DELGADO S.A., deberá suspender parcialmente el tratamiento y se mantendrá entonces otros fines autorizados por el titular. <br /> <br />
                                        <span className='font-semibold'> Términos para la atención de reclamos
                                        </span>     <br></br> <br></br>
                                        El término máximo para atenderlo será de quince (15)  dias habiles, contados a partir de su fecha de recibo. Cuando no fuera posible atender el reclamo dentro de dicho término, se informará al interesado antes del vencimiento del plazo los motivos de la demora y la fecha en que se atenderá su reclamo, el cual en ningun caso podrá superar los ochos (8) dias habiles siguientes al vencimiento del primer término. Si el reclamante no aporta los documentos ni cumple con los requisitos establecidos con anterioridad,  se le requerirá dentro de los dos dias habiles siguientes al recibo de la solicitud, para que dentro de los cinco (5) dias habiles siguientes a la recepción de la solicitud, subsane las fallas. Transcurridos dos (2) meses desde la fecha del requerimiento, sin que el reclamante presente la información requerida, se entenderá que ha desistido del reclamo. <br /> <br />



                                        <span className='font-semibold'>9.    PERSONA RESPONSABLE DE LA ATENCIÓN DE PETICIONES, CONSULTAS Y RECLAMOS ANTE LA CUAL EL TITULAR DE LA INFORMACIÓN PUEDE EJERCER SUS DERECHOS A CONOCER, ACTUALIZAR, RECTIFICAR Y SUPRIMIR EL DATO Y REVOCAR LA AUTORIZACIÓN.
                                        </span> <br></br> <br></br>


                                        La Gerencia de DISTRIBUCIONES PASTOR JULIO DELGADO S.A. designó como oficial de Protección a la señora VIVIANA SANTOS DELGADO,  quien será la persona responsable de atender y resolver las peticiones, consultas y reclamos y el ejercicio de los derechos del titular de la información concernientes a conocer, actualizar, rectificar y suprimir el dato y revocar la autorización, en los siguientes canales de atención: Medio físico a la siguiente dirección, Calle 70 N° 44W – 150 KM 4 Vía Girón, Contiguo a la Dirección de Transito de Bucaramanga y medio electrónico al siguiente e-mail protecciondatos@dpjd.com.
                                        <br></br> <br></br>




                                        <span className='font-semibold'>  10.  VIGENCIA DE LAS BASES DE DATOS</span>
                                        <br></br> <br></br>



                                        Las bases de datos administradas por DISTRIBUCIONES PASTOR JULIO DELGADO S.A. se mantendrán indefinidamente, mientras desarrolle su objeto, y mientras sea necesario para asegurar el cumplimiento de obligaciones de carácter legal, particularmente laboral y contable, pero los datos podrán ser eliminados en cualquier momento a solicitud de su titular, en tanto esta solicitud no contraríe una obligación legal de la responsable o una obligación contenida en un contrato entre DISTRIBUCIONES PASTOR JULIO DELGADO S.A. y el Titular.
                                        <br></br> <br></br>


                                        <span className='font-semibold'>   11.  VIGENCIA Y ACTUALIZACION DE LA POLITICA.</span>                               <br /> <br />



                                        La presente política reemplaza aquella contenida en el Manual de tratamiento y protección de datos personales del 2009, publicados en sus respectivas fechas, en la página web de DISTRIBUCIONES PASTOR JULIO DELGADO S.A.  <br />



                                        Actualización de la política: DISTRIBUCIONES PASTOR JULIO DELGADO S.A. podrá modificar los términos y condiciones de la presente política, al igual que los procedimiento que adoptará para el cumplimiento de la misma, dentro del compromiso de la organización en el acatamiento de las disposiciones legales vigentes. En los eventos que ocurran cambios y actualizaciones el nuevo documento se publicará en la página web www.dpjd.com. <br /> <br />



                                        La presente Política rige a partir del veinticuatro (24) de septiembre de 2018.

                                    </p>



                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                                    <button
                                        className="bg-color-btn1 text-white active:bg-color-pastor font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
    )
}

export const Politicassis = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <div className=" w-44 h-44  flex mx-auto my-auto ">
                <button
                    className=" text-color-pastor caja  font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-110"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    POLÍTICA DE SISTEMAS
                </button>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center  overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-[90%]">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-3 border-2 border-solid border-slate-200 rounded-t">
                                        <h3 className="text-2xl font-semibold text-center">
                                            POLÍTICAS DE USO RESPONSABLE DE LOS SISTEMAS DE INFORMACIÓN Y RECURSOS INFORMÁTICOS DE DISTRIBUCIONES PASTOR JULIO DELGADO
                                        </h3>
                                        <button
                                            className=""
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className=" text-white bg-slate-500  opacity-60 p-2 rounded-[60%] ">
                                                <CloseIcon />
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <p className="my-4 text-slate-500 text-[16px] leading-relaxed p-4">

                                            <span className='font-semibold'>PROPÓSITO</span>   <br></br> <br></br>



                                            Es el propósito de este documento definir la política con respecto al uso responsable de los sistemas de información en Distribuciones Pastor Julio Delgado. Se entiende por uso responsable el seguimiento de normas, políticas y buenas prácticas que salvaguarden la seguridad de la información, sistemas de información y recursos tecnológicos institucionales. <br /> <br />



                                            <span className='font-semibold'>ALCANCES</span>
                                            <br /> <br />


                                            Esta política se aplicará a todos los empleados cualquiera sea su jerarquía, a los vendedores, proveedores y a cualquier persona que tenga acceso a los sistemas de información de la empresa.
                                            <br />
                                            También se aplica esta política a todos los equipos y sistemas informáticos (Servidores, Computadores personales, estaciones de trabajo, elementos de infraestructura tecnológica, bases de datos, sistemas de información que apoyan los procesos de la fuerza de ventas o administrativos) que se encuentre bajo responsabilidad operacional de Distribuciones Pastor Julio Delgado.
                                            <br /> <br />

                                            <span className='font-semibold'>TÉRMINOS/DEFINICIONES</span>
                                            <br /> <br />



                                            Para los propósitos de esta política se aplicarán las siguientes definiciones: <br />

                                            <span className='font-semibold'>Comunicaciones Electrónicas:</span>  Incluyendo todo uso de los sistemas de información para comunicar, publicar material y contenido por medio de servicios como correo electrónico, Skype, plataformas de soporte, Intranet, foros de discusión o alguna herramienta similar. <br />

                                            <span className='font-semibold'>Exploits:</span>  Es un método concreto de uso de un error de algún programa (bug) para entrar en un sistema informático. Generalmente, un exploit suele ser un programa que se aprovecha de algún error del sistema operativo, por ejemplo: Obtener los privilegios del administrador y así tener un control total sobre el sistema. <br />

                                            <span className='font-semibold'>Material no permitido:</span>     Incluye la transmisión, distribución o almacenamiento de todo material que viole cualquier ley aplicable. Se incluye su limitación, material protegido por derechos de reproducción, marca comercial, secreto comercial, u otro derecho sobre la propiedad intelectual utilizada sin la debida autorización y material que resulte obsceno, difamatorio o ilegal bajo las leyes nacionales. <br />

                                            <span className='font-semibold'>Packet Spoofing:</span>   Es el procedimiento que cambia la fuente de origen de un conjunto de datos en una red, por ejemplo adoptando otra identidad de remitente para engañar al programa o sistema que protege la red contra intrusos (Firewall). <br />

                                            <span className='font-semibold'> Red Corporativa:</span>   Es el conjunto de recursos de conectividad computacional que permite la comunicación de datos e información a través de toda la compañía incluyendo la internet. <br />

                                            <span className='font-semibold'>Redes:</span>    Incluye cualquier sistema de cableado o equipos físicos como enrutadores, switches, además de varios sistemas electrónicos como redes de video, datos, voz, dispositivos y almacenamiento. <br />

                                            <span className='font-semibold'>Sistemas de Información:</span>     Incluye cualquier sistema o aplicación de software que sea administrado por la empresa y de los cuales ella es responsable, como SAP, Xeon System, Intranet, aplicaciones de servidores y escritorio, sistemas operativos y aplicaciones de internet. <br />

                                            <span className='font-semibold'>Usuario(s):</span>     Incluye toda aquella persona no necesariamente vinculada con la empresa, a quien Distribuciones Pastor Julio Delgado proporcione los medios y niveles de autorización y acceso necesarios para hacer uso de los servicios o sistemas de información de ésta (personal administrativo, Vendedores, proveedores, directivos, etc.). <br /> <br />

                                            <span className='font-semibold'>GENERALIDADES</span>    <br /> <br />



                                            DPJD permite el acceso al personal administrativo, proveedores, vendedores y directivos, a fuentes de información que permitan mejorar su productividad y fomente la difusión del conocimiento, el proceso de creación y los esfuerzos de colaboración, en el marco de la misión comercial. <br />

                                            El acceso a los sistemas de información en Distribuciones Pastor Julio Delgado son un privilegio y no un derecho, y debe ser tratado de esta manera por todos los usuario de dichos sistemas. Los usuarios deben actuar honesta y responsablemente. Cada usuario es responsable por la integridad de estos recursos y tiene el deber de respetar los derechos de otros usuarios, la integridad de las instalaciones físicas y sus métodos de control, además de respetar toda licencia pertinente y acuerdo contractual que esté relacionado con los sistemas de información de la compañía. <br />

                                            Todos los usuarios deberán actuar de acuerdo con estos lineamientos y las leyes nacionales pertinentes. El incumplimiento de esta política puede resultar en la negación de acceso a los sistemas de información de la empresa o a otras acciones disciplinarias o legales. <br />

                                            Distribuciones Pastor Julio Delgado no es un regulador del contenido de la información que circule por la red  y no asume responsabilidad alguna por el contenido de la misma, excepto por la información que la misma compañía y los que actuando en su nombre publiquen. Aceptar cualquier cuenta o utilizar cualquier sistema de información de la compañía se constituye en aceptación de esta política por parte de los usuarios. <br />

                                            Distribuciones Pastor Julio Delgado puede restringir o prohibir el uso de sus sistemas de información en cualquier caso en el que se demuestre alguna violación de estas políticas o de alguna ley. <br /> <br />



                                            <span className='font-semibold'> USO PERMITIDO DE LA RED CORPORATIVA
                                            </span> <br /> <br />


                                            El uso es permitido para asuntos de la compañía y uso personal limitado. Los sistemas de información de la compañía son primordialmente para uso de asuntos relacionados con la misma. Los sistemas de información pueden ser usados para asuntos personales siempre y cuando su utilización esté de acuerdo con estas políticas y no interfiera con las operaciones de la compañía o con las tareas de los demás usuarios. El uso personal de cualquier sistema de información para acceder, descargar, transmitir, distribuir o almacenar material obsceno está enteramente prohibido. Bajo ninguna circunstancia el uso personal puede ser negado en casos en los que se haga uso excesivo de los recursos de los sistemas de información. <br />

                                            Se requiere autorización  previa por parte del departamento de sistemas de Distribuciones Pastor Julio Delgado para el uso personal o uso fuera de los límites de la compañía. El uso de los recursos de sistemas de información o equipo que tenga como objetivo cualquier tipo de ganancia económica personal para cualquier usuario está prohibido con excepción de algún uso especial que sea autorizado formalmente por la empresa a través de la Gerencia general. <br />  <br />

                                            <span className='font-semibold'>ACCESO A LA RED CORPORATIVA Y A SUS SERVICIOS</span> <br />  <br />



                                            Las identificaciones y claves de acceso a SAP, Wifi, correo, plataforma de soporte, intranet, XeonSystem o a cualquier otro sistema de información son propiedad de Distribuciones Pastor Julio Delgado. Estas identificaciones y claves son para uso estrictamente personal y la responsabilidad de su uso debido recae exclusivamente en el usuario al que se le asignen. <br />

                                            El acceso no autorizado a los sistemas de información de la compañía está prohibido. Nadie debe usar la identificación, identidad o contraseña de otro usuario y de la misma manera ningún usuario debe dar a conocer su contraseña o identificación a otro, excepto en casos que faciliten la reparación o el mantenimiento de algún servicio o equipo y en este caso debe dar a conocer estos datos única y exclusivamente a miembros del departamento de sistemas de Distribuciones Pastor Julio Delgado. Cuando un usuario termina su relación con Distribuciones Pastor Julio Delgado, sus identificaciones y contraseñas para todos los sistemas de información serán eliminadas inmediatamente. <br />

                                            El usuario no deberá sin permiso escrito de la empresa hacer modificaciones a la Red corporativa o a sus recursos. No se permitirá ningún intento de vulnerar o de atentar contra los sistemas de protección o de seguridad de la red. Ante cualquier acción de este tipo la empresa procederá a ejecutar cualquier acción de carácter administrativo, laboral, penal y/o civil que corresponda. <br />

                                            En la Red corporativa no está permitida la operación de software para la descarga y distribución de archivos de música, videos y similares. Cualquier aplicación de este tipo que requiera ser utilizada, deberá ser previamente consultada con el centro de Sistemas de Distribuciones Pastor Julio Delgado. <br />

                                            El acceso a Internet dentro de las instalaciones debe hacerse desde una estación debidamente registrada y/o autorizada por el Departamento de sistemas de Distribuciones Pastor Julio Delgado. Dicho de otra forma, el computador debe estar registrado dentro del DNS (Domain Name Server) primario de la empresa y estar localizado con una dirección IP legitima. <br /> <br />

                                            <span className='font-semibold'>  USO INDEBIDO DE LAS REDES, LAS COMUNICACIONES ELECTRÓNICAS Y SISTEMAS DE INFORMACIÓN.</span>   <br /> <br />



                                            El uso indebido de cualquiera de estos tres elementos está prohibido e incluye: <br />

                                            Intentar instalar u operar puntos de acceso inalámbricos (Acces  Point) conectados a la red cableada de Distribuciones Pastor Julio Delgado sin autorización del departamento de sistemas.

                                            <br /> Intentar modificar, reubicar o sustraer del lugar donde han sido instalados o configurados, equipos de cómputo, software, información o periféricos sin la debida autorización.

                                            <br /> Acceder sin la debida autorización del departamento de sistemas al servidores mediante computadores, software, o acceder a información o redes de la compañía, a recursos externos o internos que pertenezcan a Distribuciones Pastor Julio Delgado (Base de datos, sistemas de Información, redes externas a las cuales esté vinculada la empresa).

                                            <br /> Interferir sin autorización al acceso de otros usuarios a los recursos de los sistemas de información de la empresa.

                                            <br /> Transgredir o burlar las verificaciones de identidad u otros sistemas de seguridad.

                                            <br /> Utilizar los sistemas de información para propósitos ilegales o no autorizados.

                                            <br /> Enviar cualquier comunicación electrónica fraudulenta.

                                            <br /> Violar cualquier licencia de Software o derechos de autor, incluyendo la copia o distribución de software protegido legalmente sin la autorización escrita del propietario del software.

                                            <br /> Usar las comunicaciones electrónicas para violar los derechos de propiedad de los autores.

                                            <br /> Usar comunicaciones electrónicas para acosar o amenazar a las usuarios de la empresa o externos, de alguna manera que sin razón interfiera con el comercio o el desempeño de los empleados.

                                            <br /> Usar comunicaciones electrónicas para revelar información privada sin el permiso explícito del dueño.

                                            <br /> Leer la información o archivos de otros usuarios sin su permiso.

                                            <br /> Alterar o falsificar de manera fraudulenta los registros de la empresa (incluyendo registros computarizados, permisos, documentos de identificación, u otros documentos o propiedades.)

                                            <br /> Usar las comunicaciones electrónicas para apropiarse de los documentos de otros usuarios.

                                            <br /> Lanzar cualquier tipo de virus, gusano o programa de computador cuya intención sea hostil o destructiva.

                                            <br /> Descargar o publicar material ilegal, con derechos de propiedad o material nocivo usando un computador de la empresa.

                                            <br /> Transportar o almacenar material con derechos de propiedad o material nocivo usando las redes de la empresa.

                                            <br /> Utilizar cualquier sistema de información de la empresa para acceder, descargar, imprimir, almacenar, redirigir, transmitir o distribuir material obsceno.

                                            <br /> Violar cualquier ley o regulación nacional respecto al uso de sistemas de información

                                            <br /> Instalar o usar software de espionaje, monitoreo de tráfico o programas maliciosos en la Red corporativa.

                                            <br /> Introducir cualquier tipo de programa o instalar cualquier software sin la autorización por escrito departamento de sistemas de Distribuciones Pastor Julio Delgado.

                                            <br /> Efectuar violaciones a la seguridad o interrupciones de la comunicación de la red. Las violaciones de la seguridad incluyen “sniffer”, “floodeos”, “packet spoofing”, negación del servicio (DOS), manipulación de ruteo, etc.

                                            <br /> Monitorear o escanear puertos de servidores o switches, a menos que se cuente con la autorización necesaria el departamento de sistemas de Distribuciones Pastor Julio Delgado.

                                            <br /> Evitar o interceptar la autenticación de cualquier usuario por cualquier método. Usar cualquier método (exploits, scripts, comandos) para acceder a recursos a los que no se tiene acceso a áreas protegidas. <br /> <br />


                                            <span className='font-semibold'>PRIVACIDAD</span>
                                            <br /> <br />



                                            La privacidad de los usuarios no está garantizada. Cuando los sistemas de información de la compañía funcionan correctamente, un usuario puede considerar que sus datos generados son información privada, a menos que él mismo realice alguna acción pera revelarlos a otros. Los usuarios deben estar conscientes sin embargo que ningún sistema de información es completamente seguro, por lo cual personas dentro y fuera de la empresa pueden encontrar formas de tener acceso a la información. DE ACUERDO CON ESTO, DISTRIBUCIONES PASTOR JULIO DELGADO NO PUEDE Y NO GARANTIZA LA PRIVACIDAD DE LOS USUARIOS. <br />

                                            Reparación y mantenimiento de equipos. El Departamento de Sistemas tiene la autoridad para acceder archivos individuales o datos cada vez que deban realizar mantenimiento, reparación o chequeo de equipos de computación. Sin embargo el personal de soporte técnico de sistemas no puede exceder su autoridad en ninguna de estas eventualidades para usar esta información con propósitos diferentes al de mantenimiento y reparación. <br />

                                            Respuesta al uso indebido de computadores y sistemas de información. Cuando por alguna causa razonable determinada por el Director de Sistemas, sospeche de algún tipo de uso indebido como se describe en la sección siete (7) de este documento, el departamento de sistemas puede acceder cualquier cuenta, datos, archivos, o servicio de información perteneciente a los involucrados en el incidente, para investigar y de acuerdo a los hallazgos o evidencias dar traslado a la dirección del área respectiva y/o al Departamento de Recursos Humanos, para que éstos de acuerdo al marco de actuación, reglamentos, normas y políticas institucionales apliquen las sanciones respectivas. Los miembros del Departamento de Sistemas están en la obligación de monitorear constantemente los sistemas de información de la empresa a través de los medios correspondientes para responder oportunamente a cualquier acción que atente contra la integridad, disponibilidad, seguridad y desempeño correcto de los mismos mediante la negación, restricción de acceso a usuarios o sistemas, aislamiento y desconexión de equipos o servicios. Los incidentes deben ser informados al Director del departamento de sistemas con la mayor cantidad de evidencia posible, para tomar las medidas correspondientes. <br />

                                            Monitoreo de la Red Corporativa y los servicios. Debido a que la empresa se esforzará en mantener la privacidad de las comunicaciones personales y un nivel de servicio apropiado, el departamento de sistemas monitoreará la carga de tráfico de la red y cuando sea necesario tomará acción para proteger la integridad y operatividad de sus redes. Además se recolectarán estadísticas de utilización basado en las direcciones de red, protocolo de red y tipo de aplicación. Progresivamente se restringirán usuarios y aplicaciones no esenciales cuando su utilización de la red resulte en la degradación del rendimiento. Tal restricción será modificada a los usuarios a través de medios apropiados. <br /> <br />



                                            <span className='font-semibold'> INSTALACIÓN Y USO DE SOFTWARE</span>

                                            <br /> <br />

                                            De acuerdo con las normas locales e internacionales relativas a los derechos de propiedad intelectual, el único software que será instalado en el computador del usuarios será aquel que previamente haya sido estandarizado y/o autorizado por la empresa y para lo cual esta dispone de las licencias respectivas a su nombre. <br />

                                            Todo usuario está obligado a conocer el alcance de uso de cada una de las licencias de software a su disposición por esta razón la información estará disponible en la intranet de la empresa y pueden ser solicitadas al departamento de sistemas. De esta manera el usuario conoce lo que le es permitido y prohibido en cuanto al uso de software y será responsable ante la empresa y/o ante terceros del uso que haga del mismo <br />

                                            El usuario no deberá participar en la copia, distribución, transmisión o cualquier otra práctica no autorizada en las licencias de uso de software <br />

                                            No es permitido la instalación de software de “dominio público” o de “distribución libre” (Shareware y Freeware) sin la debida autorización del departamento de sistemas de Distribuciones Pastor Julio Delgado. <br />

                                            Toda instalación, desinstalación o traslado de software (incluyendo aquellos de “dominio público” o de “distribución libre”) desde y hacia un equipo de la empresa requiere autorización y coordinación previas con el departamento de sistemas. <br />

                                            Cualquier software que se haya instalado en un equipo de la empresa que no cumpla con lo estipulado anteriormente, será desinstalado sin que ello derive ninguna responsabilidad para la empresa. <br />

                                            Al usar una licencia de software que ha sido instalado en un equipo de la empresa o en un equipo Personal, el usuario reconoce los derechos de la empresa anteriormente descritos y es consciente en ellos. <br /> <br />



                                            <span className='font-semibold'>CORREO ELECTRONICO</span>
                                            <br /> <br />



                                            Todas las políticas incluidas en este documento son aplicables al correo electrónico corporativo. El correo electrónico debe usarse de manera profesional y cuidadosa dada su facilidad de envío y redirección. Los usuarios deben ser especialmente cuidadosos con los destinatarios colectivos. Las leyes de derechos de autor y licencias de software también aplican para el correo electrónico. <br />

                                            Los mensajes de correo electrónico corporativo (dominio @dpjd.com) deben ser borrados una vez que información contenida en ellos ya no sea de utilidad. <br />

                                            Participar en una cadena de correos tipo SPAM es una violación seria a las Políticas de Uso responsable. <br />

                                            En ningún caso es permitido suplantar cuentas de usuarios ajenos. <br /> <br />
                                            <span className='font-semibold'>PAGINAS WEB y SISTEMA DE MANEJO DE CONTENIDO
                                            </span> <br /> <br />


                                            El Director del Departamento de Sistemas de Distribuciones Pastor Julio Delgado, acogiendo la directriz organizacional, determinará los estándares para aquellos contenidos considerados como oficiales de la empresa. Ninguna otra página o contenido electrónico puede hacer uso de los logos de Distribuciones Pastor Julio Delgado sin la debida autorización. <br />

                                            Los editores de las páginas Web que usen información asociada con Distribuciones Pastor Julio Delgado deben acogerse a las políticas de la compañía, a la ley que las regula incluyendo derechos de autor, leyes sobre obscenidad, calumnia, difamación y piratería de software. El contenido debe ser revisado periódicamente para asegurar continuamente su veracidad. <br /> <br />



                                            <span className='font-semibold'>INCLUMPIMIENTO</span>
                                            <br /> <br />



                                            Distribuciones Pastor Julio Delgado hará responsable al usuario de la Política y las consecuencias que se derivarían de su incumplimiento. Asimismo, el usuario deberá conocer estas políticas desde su ingreso a la empresa. <br />

                                            Distribuciones Pastor Julio Delgado se reserva el derecho de evaluar periódicamente el cumplimiento de estas Políticas. Cualquier acción disciplinaria derivada periódicamente del cumplimiento de la misma (tales como llamadas de atención, suspensiones o despidos), será considerada de acuerdo a los procedimientos establecidos por la empresa y en estricto acato de las estipulaciones legales vigentes. <br />

                                            En materia de irregularidades o incumplimiento en el uso de software, el usuario que no cumpla con esta política, será directamente responsable de las sanciones legales (que por su responsabilidad laboral, penal y/o civil se incurra) derivadas de sus propios actos. Igualmente, será responsable de los costos y gastos que pudiera incurrir la empresa derivados de la defensa por el uso no autorizado o indebido de licencias de software. En razón de lo anterior, no es permitido alegar ignorancia ni a estas políticas (cuya última versión siempre estará disponible en la Intranet), ni a la documentación que en ellas se mencione, incluyendo por supuesto las demás licencias en uso. <br />

                                            En el caso en que razonablemente se asuma que se está haciendo uso ilegal o incorrecto de los servicios informáticos o sistemas de información, Distribuciones Pastor Julio Delgado estará en absoluta libertad de limitar o remover las cuentas asignadas sin asumir por ello ninguna responsabilidad de  ningún tipo. <br /> <br />



                                            <span className='font-semibold'>NOTIFICACIÓN</span>
                                            <br /> <br />



                                            Con el fin de dar cumplimiento a las  Políticas de uso responsable de los sistemas de Información y Recursos Informáticos, el Departamento de Sistema de Distribuciones Pastor Julio Delgado establecerá un acta de compromiso que firmarán todos los usuarios al momento de recibir la identificación personal.
                                            <br /> <br />


                                            <span className='font-semibold'>  APLICACIÓN Y CUMPLIMIENTO</span>
                                            <br /> <br />



                                            Esta política aplica a todos los integrantes de Distribuciones Pastor Julio Delgado sean vendedores, proveedores, personal administrativo u operario. Cualquier usuario que viole esta política será objeto de sanción disciplinaria, incluyendo la terminación de su relación con Distribuciones Pastor Julio Delgado, sea su elación de cualquier tipo (laboral, comercial, etc.). <br /> <br />


                                        </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                                        <button
                                            className="bg-color-btn1 text-white active:bg-color-pastor font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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


        </>

    )
}

