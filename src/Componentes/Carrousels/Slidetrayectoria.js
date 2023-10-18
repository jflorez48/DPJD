import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import images
import inicio from "../../assets/img/inicios.png";
import granero from "../../assets/img/granero.png";
import cucuta from "../../assets/img/cucuta.png";
import valle from "../../assets/img/valle.png";
import duitama from "../../assets/img/duitama.png"; 



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import estilos css
import "./Carousel.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function SliderTrayectoria() {
  return (
    <>
       {/* The above code is creating a slider with the Swiper library.  */}
      <div class="  mt-12 flex">
        <h2 class=" w-1/2  text-2xl text-center m-0 font-bold bg-gradient-to-r from-[#233487] to-[#2E46B9] mx-auto p-4 text-white rounded-lg">
          {" "}
          Trayectoria Empresarial
        </h2>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        slidesPerGroup={2}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper  h-[28rem]    hidden md:flex    "
      >
        <SwiperSlide className=" w-full ">
          <div className="  bg-white h-80 grid grid-cols-5  mx-4  border-zinc-600  shadow-md  p-16 rounded-2xl gap-5 items-center mt-16 card_slider  ">
            <div className="col-span-3 ">
              <h3 className=" text-color-pastor text-xl font-semibold">
                1973 Inicios{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                {" "}
                <span className="font-semibold ">
                  {" "}
                  Don Pastor Julio Delgado
                </span>
                , nació el 10 de abril de 1.934 en Girón, Santander, hijo de dos
                incansables trabajadores que le dieron ejemplo para salir
                adelante en su vida personal y profesional.
                <br />
                Trabajador desde pequeño, Don Pastor creció en una familia
                unida  y emprendedora: es el cuarto de once hermanos, la mayoría
                involucrados en el negocio de consumo masivo.
              </p>
            </div>
            <div className=" col-span-2">
              <img
                src={inicio}
                alt="Inicio"
                className="rounded-md"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-full ">
          <div className="  bg-white h-80 grid grid-cols-5  mx-4  border-zinc-600  shadow-md p-16 rounded-2xl gap-5 items-center mt-16 card_slider  ">
            <div className="col-span-3 ">
              <h3 className=" text-color-pastor text-xl font-semibold ">
                Gran Cacharrería Oriental{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                Su gran visión y deseo de superación lo llevó a establecer su
                primera sociedad con el señor Luis Francisco Mejía en la compra
                del “GRANERO ORIENTAL”, que se constituyó en la base y punto
                clave para el futuro desarrollo empresarial de “DISTRIBUCIONES
                PASTOR JULIO DELGADO”
                <br />
              </p>
            </div>
            <div className="col-span-2">
              <img
                src={granero}
                alt="Granero"
                className="rounded-md"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-full ">
          <div className=" bg-white    h-80 grid grid-cols-5  mx-4   border-zinc-600  shadow-md   p-16 rounded-2xl gap-5 items-center mt-16 card_slider  ">
            <div className="col-span-3 ">
              <h3 className=" text-color-pastor text-xl font-semibold">
                1976 Sede Cúcuta{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                Se dio inicio en la Calle 9A N 1-75 con el Señor Héctor
                Castellanos como Gerente, con 3 vendedores; uno de periferia, un
                encargado de los negocios de la Sexta y Don Oscar Tomas quien se
                desempañaba como vendedor de poblaciones, en bodega se contaba
                con 3 empleados y 2 en el área administrativa.
              </p>
            </div>
            <div className="col-span-2">
              <img
                src={cucuta}
                alt="Cucuta"
                className="rounded-md"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-full ">
          <div className=" bg-white    h-80 grid grid-cols-5  mx-4   border-zinc-600  shadow-md   p-16 rounded-2xl gap-5 items-center mt-16 card_slider  ">
            <div className="col-span-3 ">
              <h3 className=" text-color-pastor text-xl font-semibold">
              2005  Valledupar{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                Se dio inicio en la Manzana 26 – 30Via aeropuerto con el sr.
                Jorge Delgado como Gerente, con 5 vendedores, en bodega se
                contaba con 2 empleados y 2 en el área administrativa.
              </p>
            </div>
            <div className="col-span-2">
              <img
                src={valle}
                alt="Valledupar"
                className="rounded-md"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-full ">
          <div className=" bg-white    h-80 grid grid-cols-5  mx-4   border-zinc-600  shadow-md   p-16 rounded-2xl gap-5 items-center mt-16 card_slider  ">
            <div className="col-span-3 ">
              <h3 className=" text-color-pastor text-xl font-semibold">
                2007 Duitama
              </h3>
              <p className="text-gray-400 text-sm">
                Se dio inicio en la Manzana bodega 1 Calle 3 Nº 3-05 Ciudadela
                parque Industrial con el Señor Eliseo Remolina como Gerente, con
                6 vendedores, en bodega se contaba con 3 empleados y 2 en el
                área administrativa.
              </p>
            </div>
            <div className="col-span-2">
              <img
                src={duitama}
                alt="Duitama"
                className="rounded-md"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" w-full ">
          <div className="  bg-white h-80 grid grid-cols-5  mx-4  border-zinc-600  shadow-md  p-16 rounded-2xl gap-5 items-center mt-16 card_slider  ">
            <div className="col-span-3 ">
              <h3 className=" text-color-pastor text-xl font-semibold">
                1973 Inicios{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                {" "}
                <span className="font-semibold ">
                  {" "}
                  Don Pastor Julio Delgado
                </span>
                , nació el 10 de abril de 1.934 en Girón, Santander, hijo de dos
                incansables trabajadores que le dieron ejemplo para salir
                adelante en su vida personal y profesional.
                <br />
                Trabajador desde pequeño, Don Pastor creció en una familia
                unida y emprendedora: es el cuarto de once hermanos, la mayoría
                involucrados en el negocio de consumo masivo.
              </p>
            </div>
            <div className=" col-span-2">
              <img
                src={inicio}
                alt="Inicio"
                className="rounded-md"
              />
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      {/* Slide para mobil */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper my-16  h-[35rem]  swiper  md:hidden flex   "
      >
        <SwiperSlide>
          <div className=" w-full h-[26rem] card_slider grid grid-cols-2  gap-5  p-6 rounded-xl mx-3 items-center mt-16 ">
            <div>
              <h3 className=" text-color-pastor text-xl font-semibold">
                1973 Inicios{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                {" "}
                <span className="font-semibold ">
                  {" "}
                  Don Pastor Julio Delgado
                </span>
                , nació el 10 de abril de 1.934 en Girón, Santander, hijo de dos
                incansables trabajadores que le dieron ejemplo para salir
                adelante en su vida personal y profesional.
                <br />
                Trabajador desde pequeño, Don Pastor creció en una familia
                unida y emprendedora: es el cuarto de once hermanos, la mayoría
                involucrados en el negocio de consumo masivo.
              </p>
            </div>
            <div>
              <img
                src={inicio}
                alt="Inicio"
                className="rounded-md"
              />
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-[26rem] card_slider  grid grid-cols-2 gap-5  p-6 rounded-xl mx-3 items-center mt-16">
            <div>
              <h3 className=" text-color-pastor text-xl font-semibold text-center">
                Gran Cacharrería Oriental{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                Su gran visión y deseo de superación lo llevó a establecer su
                primera sociedad con el señor Luis Francisco Mejía en la compra
                del “GRANERO ORIENTAL”, que se constituyó en la base y punto
                clave para el futuro desarrollo empresarial de “DISTRIBUCIONES
                PASTOR JULIO DELGADO”
                <br />
              </p>
            </div>
            <div>
              <img
                src={granero}
                alt="Granero Oriental"
                className="rounded-md"
              />
            </div>
          </div>
        </SwiperSlide>

       

        <SwiperSlide>
          <div className=" w-full h-[26rem]  grid grid-cols-2 card_slider gap-5  p-6 rounded-xl mx-3 items-center mt-16">
            <div>
              <h3 className=" text-color-pastor text-xl font-semibold">
                1976 Sede Cúcuta{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                Se dio inicio en la Calle 9A N 1-75 con el Señor Héctor
                Castellanos como Gerente, con 3 vendedores; uno de periferia, un
                encargado de los negocios de la Sexta y Don Oscar Tomas quien se
                desempañaba como vendedor de poblaciones, en bodega se contaba
                con 3 empleados y 2 en el área administrativa.
              </p>
            </div>
            <div>
              <img
                src={cucuta}
                alt="Cúcuta"
                className="rounded-md"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-[26rem]  grid grid-cols-2 card_slider gap-5  p-6 rounded-xl mx-3 items-center mt-16">
            <div>
              <h3 className=" text-color-pastor text-xl font-semibold">
                Valledupar{" "}
              </h3>
              <p className="text-gray-400 text-sm">
                Se dio inicio en la Manzana 26 – 30Via aeropuerto con el sr.
                Jorge Delgado como Gerente, con 5 vendedores, en bodega se
                contaba con 2 empleados y 2 en el área administrativa.
              </p>
            </div>
            <div>
              <img
                src={valle}
                alt="Valledupar"
                className="rounded-md"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-[26rem]  grid grid-cols-2 card_slider gap-5  p-6 rounded-xl mx-3 items-center mt-16">
            <div>
              <h3 className=" text-color-pastor text-xl font-semibold">
                2007 Duitama
              </h3>
              <p className="text-gray-400 text-sm">
                Se dio inicio en la Manzana bodega 1 Calle 3 Nº 3-05 Ciudadela
                parque Industrial con el Señor Eliseo Remolina como Gerente, con
                6 vendedores, en bodega se contaba con 3 empleados y 2 en el
                área administrativa.
              </p>
            </div>
            <div>
              <img
                src={duitama}
                alt="Duitama"
                className="rounded-md"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
