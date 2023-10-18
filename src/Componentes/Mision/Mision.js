import React from "react";
import "./mision.css";
import 'animate.css';
import WOW from 'wowjs';

export const Mision = () => {
  return (
    <div className="container">
      <div className=""> 
      <div className=" hidden lg:grid  grid-cols-3 imagenbg h-80  ">
        <div>
          <div className=" texto_vision animate__animated animate__backInLeft ">
            <h1 class="text-center mt-4 text-white font-bold  ">Misión</h1>
            <h2 class="text-center text-white  ">Empresarial</h2>
            <div className="container_text ml-16 md:ml-32">
              <p class=" ml-0   leading-tight  text-white p_misionv mx-auto   ">
                Atender de manera eficiente y efectiva las{" "}
                <span className="font-semibold">necesidades del mercado</span>{" "}
                de consumo popular, manejado de una forma honesta, profesional y
                cumplida.
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      <div className="hidden lg:grid  grid-cols-3 imagenbgv h-80 ">
        <div></div>
        <div></div>
        <div className="texto_vision animate__animated animate__backInRight">
          <h1 class="text-center mt-4 text-color-pastor font-bold  ">Visión </h1>
          <h2 class="text-center text-color-pastor    ">Proyectada</h2>
          <p class=" ml-0 md:mr-8  leading-tight  tracking-tight text-color-pastor p_misionv text-right   ">
            Posicionamiento de nuestra empresa como{" "}
            <span className="font-semibold">
              líder en el mercado de productos de consumo popular en el Oriente
              Colombiano
            </span>{" "}
            e incursionar a mediano plazo en el mercado nacional. <br />
            Junto a la implementación de avances tecnológicos, buscando siempre
            la calidad y eficiencia de nuestros servicios y productos.
          </p>
        </div>
      </div>
      </div>


     

      {/* Misión y visión Movil */}
      <div className="grid  grid-cols-1  h-full lg:hidden ">
        <div className=" texto_vision text-center animate__animated animate__backInLeft">
          <h1 class="text-center mt-4 text-color-pastor  ">Misión</h1>
          <h2 class="text-center text-color-pastor ">Empresarial</h2>
          <div className=" container_text">
            <p class="   leading-tight  text-color-pastor p_misionv     ">
              Atender de manera eficiente y efectiva las{" "}
              <span className="font-semibold">necesidades del mercado</span>{" "}
              de consumo popular, manejado de una forma honesta, profesional y
              cumplida.
            </p>
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-1  h-full lg:hidden ">
      <div className="texto_vision animate__animated animate__backInLeft">
          <h1 class="text-center mt-4 text-color-pastor ">Visión </h1>
          <h2 class="text-center text-color-pastor  ">Proyectada</h2>
          <div  className=" container_text ">
          <p class="  leading-tight  text-color-pastor p_misionv    text-center  ">
            Posicionamiento de nuestra empresa como{" "}
            <span className="font-semibold">
              líder en el mercado de productos de consumo popular en el Oriente
              Colombiano
            </span>{" "}
            e incursionar a mediano plazo en el mercado nacional. <br />
            Junto a la implementación de avances tecnológicos, buscando siempre
            la calidad y eficiencia de nuestros servicios y productos.
          </p>
          </div>
          
        </div>
      </div>


     
      
    </div>
  );
};

class Valores  extends React.Component  {
  
  componentDidMount() {
    new WOW.WOW({
        live: false
    }).init();
}

  render() { 
    return (  
      <div className="">
      <div class="grid grid-cols-1  lg:grid-cols-3 items-center my-8 w-11/12 mx-auto gap-7 border-blue-500 border    rounded-lg p-8 ">
        <div class=" titulo_valores wow  animate__animated animate__bounceInUp     " data-wow-duration="2s">
          <h2 class="mt-4 text-center t">
            {" "}
            Nuestros <span>Valores </span>{" "}
          </h2>
          <h2 class=" mb-8 text-center -mt-8 font-bold">Corporativos </h2>
        </div>

        <div class="grid col-span-2 gap-y-4  wow  animate__animated animate__bounceInUp   " data-wow-duration="1.5s  ">
          <div class="card p-3 bg-white">
            <div className="card-title ">
              <h5 class=" p-2 font-semibold">Honestidad</h5>
            </div>

            <div class="card-body">
              <p class="card-text p-3 text-center">
                {" "}
                Actuar con veracidad, honradez, rectitud e integridad siempre.{" "}
              </p>
            </div>
          </div>
          <div class="card p-3 bg-white">
            <div className="card-title ">
              <h5 class=" p-2 font-semibold ">Responsabilidad</h5>
            </div>

            <div class="card-body">
              <p class="card-text p-3 text-center">
                {" "}
                Hacer buen uso de nuestra libertad para hacer las cosas bien,
                aún cuando no nos están viendo.{" "}
              </p>
            </div>
          </div>
          <div class="card p-3 bg-white">
            <div className="card-title">
              <h5 class=" p-2 font-semibold">Servicio</h5>
            </div>

            <div class="card-body">
              <p class="card-text p-3 text-center">
                {" "}
                Escuchar, investigar y satisfacer las necesidades de nuestros
                clientes en forma oportuna y veraz.{" "}
              </p>
            </div>
          </div>
          <div class="card p-3 bg-white">
            <div className="card-title">
              <h5 class=" p-2 font-semibold">Sentido de pertenencia</h5>
            </div>

            <div class="card-body">
              <p class="card-text p-3 text-center">
                {" "}
                Sentir la empresa como propia y formar parte integral de ella
                cuidarla, ayudarla, amarla, protegerla, asegurando su
                crecimiento y permanencia en el mercado.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
};
 
export default Valores ;
