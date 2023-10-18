import './slide.css'


import slideruno from "../../assets/Proveedores/slideruno.png"
import sliderdos from "../../assets/Proveedores/sliderdos.png"
import slidertres from "../../assets/Proveedores/slidertres.png"
import slidercuatro from "../../assets/Proveedores/slidercuatro.png"
import slidercinco from "../../assets/Proveedores/slidercinco.png"
import sliderseis from "../../assets/Proveedores/sliderseis.png"
import slidersiete from "../../assets/Proveedores/slidersiete.png"
import sliderocho from "../../assets/Proveedores/sliderocho.png"





function Slide() {
  return (
    <div >
      {/* <h2 className="md:ml-4 lg:ml-16 my-9 font-bold text-4xl  text-color-pastor">Nuestras Alianzas</h2> */}
      <div className="slider  ">

        <div class="slide-track ">
          <div class="slide flex ">
            <img className=""
              src={slideruno}

            />
            <img className=""
              src={sliderdos}

            />


          </div>
          <div class="slide flex  ">
            <img className=""
              src={slidertres}

            />
            <img className=""
              src={slidercuatro}

            />
          </div>
          <div class="slide flex  ">
            <img className=""
              src={slidercinco}
            />
            <img className=""
              src={sliderseis}
            />
          </div>
          <div className="slide flex ">
            <img
              src={slidersiete}
            />
             <img
              src={sliderocho}
            />


          </div>
         

        </div>
      </div>

    </div>



  );
}

export default Slide;
