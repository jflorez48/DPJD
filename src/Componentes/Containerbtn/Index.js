import React from "react";
import "./cbtn.css";
import PaymentIcon from "@mui/icons-material/Payment";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PhoneIcon from "@mui/icons-material/Phone";
import AppsIcon from "@mui/icons-material/Apps";
import pse from "../../assets/img/pse.png";
import { ReactComponent as News } from "../../assets/img/News.svg";
import WOW from "wowjs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

export const Containerbtn = () => {
  return (
    <div>
      <div className="containercont contenedorbotones  " >
        <div className="Container-btns  my-auto mx-auto wow animate__animated  animate__bounceIn  " data-wow-duration="1s">
          <a
            href="https://www.zonapagos.com/t_ecdistribucionespastorjuliodelgadosa"
            target="blank"
          >
            {" "}
            <img src={pse} alt="pse" className="w-10 " /> Pagos en línea{" "}
          </a>
          <div className="separacion"></div>
          {/* <Link to="/noticias" className="pagos ">
            {" "}
            <NewspaperIcon />
            Noticias{" "}
          </Link> */}
          
          <Link to="/plataformas" className="pagos">
            {" "}
            <AppsIcon /> Apps corporativo{" "}
          </Link>
          <div className="separacion"></div>
          <Link to="/contacto" className=" contact">
            {" "}
            <PhoneIcon /> Contactar ahora
          </Link>
        </div>
      </div>
      <div className="flex ">
        <div className="Container-btns-mobil mx-auto">
          <a
            href="https://www.zonapagos.com/t_ecdistribucionespastorjuliodelgadosa"
            target="blank"
            className="btn"
          >
            {" "}
            <PaymentIcon /> Pagos en linea{" "}
          </a>
          {/* <Link to="/blog" className="btn">
            {" "}
            <NewspaperIcon /> Noticias{" "}
          </Link> */}
          <Link to="/plataformas" className="btn">
            {" "}
            <AppsIcon /> Apps corporativo{" "}
          </Link>
          <Link to="/contacto" className="btn contacta ">
            {" "}
            <PhoneIcon /> Contactar
          </Link>
        </div>
      </div>
    </div>
  );
};
