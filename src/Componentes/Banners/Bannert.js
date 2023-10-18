import React from 'react'
import { Link } from 'react-router-dom'
import { Boton } from '../Containerbtn/Boton'
import "./Bannert.css"
import banner from '../../assets/img/PrincipalHome.jpg'


export const Bannert = () => {
    return (
        <div className="Container_bannert">

            <div className="bannert">

               <img src= "https://res.cloudinary.com/dcn8lf1sl/image/upload/v1677165606/pagina%20dpjd/propuesta_banner_aprovado_kv2lqc.png"alt ="banner" />


            </div>

            <div className="trayectoria">

              <Link to="/Conocenos" ><Boton
               text={" Ver trayectoria"}/></Link> 
               


            </div>

        </div>
    )
}

