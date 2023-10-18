import React from 'react'
import { Boton } from '../Containerbtn/Boton'
import './Jobs.css'
import WOW from 'wowjs';

export const Jobs = () => {
    return (
        <div className="my-20 w-full md:w-4/5 mx-auto">
            <div className="w-3/4 mx-auto animate__animated animate__bounce text-[18px] ">
                <p className="text-center text-color-pastor font-medium  ">En <span className="font-semibold">Distribuciones Pastor Julio Delgado</span>  creemos en el potencial de nuestros colaboradores, quienes permanecen en constante crecimiento personal y profesional integrando los valores corporativos y el trabajo en equipo.</p>

                <p className="text-center text-color-pastor font-medium"> Contamos con más de <span className="font-semibold">500 empleados a nivel nacional</span>  que desde su experticia hacen que cada unidad de trabajo permanezca unida bajo un mismo objetivo: Mejoramiento continuo.</p>
            </div>

           
        </div>
    )
}


class Vacantes extends React.Component  {
  
    componentDidMount() {
      new WOW.WOW({
          live: false
      }).init();
  }
  
    render() { 
      return (  
        <div className="text-center my-12 wow animate__animated animate__bounceIn" data-wow-duration="1.5s" >
        <h1 className="text-3xl job_title" >Súmate a nuestra gran</h1>
        <p className="job_title_p mb-4 -mt-8">Familia</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-12 text-center place-content-center  ">
            <div className="job_container  md:border-r-2 border-blue-900">
                <div className=" mx-auto my-auto job_container_img">
                    <img className="job_img" src="https://cutt.ly/yL9T17I" alt="trabaja con nosotros" />
                </div>
                <div className="  job_container_buton text-[18px]">
                    <h3> Ofertas abiertas <br/> al público</h3>
                    <a href="https://www.linkedin.com/company/dpjd/" target="blank">
                        <Boton
                            text=" Ver más"
                        />
                    </a>


                </div>

            </div>
            <div className="">

                <div className="job_container ">

                    <div className=" mx-auto my-auto job_container_img   ">
                        <img className="job_img" src="https://cutt.ly/yL9T17I" alt="trabaja con nosotros" />
                    </div>


                    <div className="  job_container_buton text-[18px]">
                        <h3> Prácticas <br/> universitarias</h3>
                        <a href="https://www.linkedin.com/company/dpjd/" target="blank">
                            <Boton
                                text=" Ver más"
                            />
                        </a>

                        <h3> Prácticantes <br/> SENA</h3>
                        <a href="https://www.linkedin.com/company/dpjd/" target="blank">   <Boton
                            text=" Ver más"
                        /> </a>


                    </div>

                    <div className=" mx-auto my-auto job_container_img ocultar">
                        <img className="job_img" src="https://cutt.ly/yL9T17I" alt="trabaja con nosotros" />
                    </div>

                </div>

            </div>
        </div>
    </div>
      );
    }
  };
   
  export default Vacantes;

