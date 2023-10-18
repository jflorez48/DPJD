import React from "react";
import { Boton } from "../Containerbtn/Boton";
import "./Cardblog.css";
import Manuelitaimg from "../../assets/img/manuelita.png";
import { Link } from "react-router-dom";

export const CardBlog = ({ img }) => {
  return (
    <div>
      <div class="card-container place-content-center   mx-auto    ">
        <div class="cardimg   align-content: center ">
          <img class="rounded-lg  w-full  " src={Manuelitaimg} alt="prueba" />
        </div>
        <div class="cardbody ">
          <h2 class="text-center font-bold text-blue-700 my-3  ">
            Bienvenidos a la familia{" "}
          </h2>
          <p class="text-center text-base  text-gray-400 ">
            Juan Valdez Café es una cadena multinacional de cafeterías con sede
            en Colombia que ...{" "}
          </p>
          <div class=" mx-auto align-content: center btn">
            <Link to="/noticias">
              {" "}
              <Boton text="Ver alianza" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardListBlog = () => {
  return (
    <div className="w-[90%] mx-auto ">
      
      <div class="  grid grid-cols-1  md:grid-cols-3  gap-y-28 mb-52 lg:mb-8 ">
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </div>
  );
};

export const Newsletter = () => {
  return (
    <div className=" w-5/6  mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-5 bg-gradient-to-r from-color-pastor to-blue-500 rounded-2xl items-center p-5  ">
        <div className=" col-span-2 flex ">
          <h3 className="text-white font-semibold  text-center mx-auto my-auto text-lg md:text-2xl">
            Suscribete a nuestras <p>ULTIMAS NOTICIAS</p>
          </h3>
        </div>
        <div className=" col-span-3">
          <p className="text-center text-white text-sm semibold pt-2 pr-2 w-3/4">
            Mantente al tanto de nuestras ultimas noticias, acontecimientos del
            mercado y temas esenciales para que aprendas día a día.
          </p>
          <div className="block">
            <div className=" flex gap-2 items-center mx-2 md:ml-24 ">

              <input
                type="text"
                id="neswletter"
                class="block   w-2/3 h-12 text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ingresa tu correo"
                required
              ></input>
              <Boton text="Unirme" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
