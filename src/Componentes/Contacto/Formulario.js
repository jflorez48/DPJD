import React, { useEffect, useState } from 'react';

import InlineError from "../../Componentesform/InlineError";

import cors from 'cors';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';

import "./Contacto.css";
import SweetAlert from 'sweetalert2-react';

const InputClass =
  'w-full py-4 placeholder:text-gray px-6 text-main border-2 mt-2 border-border rounded-md';




export const Formcontacto = () => {
 

   const [state, setState] = useState(false)
   const [data, setData] = useState({name: '', email: '', tel: '', message: '', unidad: '', subject: ''})

      
    const handleSubmit = async (e) => {
      const tempData = new FormData();
      tempData.append('name', data.name);
      tempData.append('email', data.email);
      tempData.append('tel', data.tel);
      tempData.append('message', data.message);
      tempData.append('unidad', data.unidad);
      tempData.append('subject', data.subject);


       await fetch ('https://correodpjd.000webhostapp.com/index.php', {
        
        method: 'POST',
      //  enviar data
        body: tempData,
      
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      }).then(res => {setState(true); console.log(res)})
        .catch(error => console.error('Error:', error)) 
  
      /* e.preventDefault(); */
    }

  return (
    <>
       <SweetAlert 
            show={state}
            title="Mensaje enviado"
            text="Nos comunicaremos a la brevedad"
             
           
           onConfirm={() => window.location.href = "/"}
      /> 
     
     <div className="grid   ">

        
        <div className=" grid grid-cols-1 w-[80%]  md:grid-cols-5 gap-4  mx-auto my-8  place-content-center      contenedorform bg-slate-100 ">
          <div className=" contact_fomr rounded-l-lg flex  flex-col col-span-2">
            <h2 className="font-bold w-2/3  place-content-center mx-auto    rounded md:mt-64 text-white   text-base  md:text-2xl text-center">
              Nuestro propósito como empresa es brindarte la mejor atención al
              cliente
            </h2>

            <p className="font-semibold w-2/3 place-content-center mx-auto my-6 rounded md:mt-48 text-white text-sm md:text-xl text-center">
              {" "}
              Ingresa los datos solicitados. Todos los campos son requeridos.
            </p>


          </div>
          <div  className="bg-[#f5f5f5a1]  overflow-hidden  flex justify-center p-8 rounded-3xl col-span-3">
            <div   
                  className="w-full max-w-lg mg-3 " 
            >
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-full  px-3 mb-4 md:mb-0">
                  <label
                    className="block tracking-wide text-color-pastor text-base font-bold mb-2 "
                    for="grid-first-name"
                  >
                    Nombre
                  </label>
                  <input
                    className="appearance-none block w-full shadow-md  text-gray-700 border border-gray-200 rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"

                    required
                    type="text"
                    placeholder="Ingresa tu nombre completo"
                    onChange={(e) => setData({...data, name: e.target.value})}
                    name={data.name}

                  />

                </div>


              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-color-pastor text-base font-bold mb-2 "
                    for="grid-password"
                  >
                    Correo
                  </label>
                  <input
                    className="appearance-none block w-full shadow-md  text-gray-700 border border-gray-200 rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"


                    required
                    type="email"
                    placeholder="Ingresa tu correo"
                    onChange={(e) => setData({...data, email: e.target.value})}
                    name={data.email}
                  />

                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-color-pastor text-base font-bold mb-2 "
                    for="grid-password"
                  >
                    Teléfono
                  </label>
                  <input
                    className="appearance-none block w-full shadow-md  text-gray-700 border border-gray-200 rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    required

                    type="number"
                    placeholder="Ingresa tu teléfono"
                    onChange={(e) => setData({...data, tel: e.target.value})}
                    name={data.tel}



                  />

                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-color-pastor text-base font-bold mb-2 "
                    for="grid-password"
                  >
                    Asunto
                  </label>
                  <input
                    className="appearance-none block w-full shadow-md  text-gray-700 border border-gray-200 rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"


                    required
                    type="text"
                    placeholder="Ingresa el asunto de tu mensaje"
                    onChange={(e) => setData({...data, subject: e.target.value})}
                    name={data.subject}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label
                    className="block tracking-wide text-color-pastor text-base font-bold  mb-2"
                    for="grid-state"
                  >
                    Unidad de trabajo
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full shadow-md  border border-gray-200 bg-white text-gray-700 py-3 px-4 pr-8 rounded-2xl text-center leading-tight focus:outline-none focus:bg-white "
                      id="grid-state"
                      name={data.unidad}
                      onChange={(e) => setData({...data, unidad: e.target.value})}
                    > <option >-----Selecciona-----</option>
                      <option> Sistemas</option>
                      <option>Recursos humanos</option>
                      <option>Comercial</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      ></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label
                  for="message"
                  class="block tracking-wide text-color-pastor text-base font-bold mt-6 mb-2 "
                >

                  Mensaje
                </label>
                <textarea
                  name={data.message}
                  onChange={(e) => setData({...data, message: e.target.value})}
                  placeholder="Ingresa tu mensaje"
                  rows={8}


                  class="appearance-none block w-full shadow-md  text-gray-700 border border-gray-200 rounded-2xl  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"

                ></textarea>

              </div>
              <div className="w-full md:w-1/2 " >
                <button
              
               

                  id="submit" type="submit" value="Send" name="enviar" onClick={() => handleSubmit()}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-color-btn1 to-color-btn2 text-white font-semibold before:text-xs leading-tight  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out my-4 boton_primary"
                > Enviar

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};



