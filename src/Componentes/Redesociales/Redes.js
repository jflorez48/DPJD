import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./redes.css";

import Instagram from "../../assets/img/Instagram.png";
import Facebook from "../../assets/img/Facebook.png";
import Linkedin from "../../assets/img/LinkedIn.png";

export const Redes = () => {
  return (
    <div className="hidden md:flex">
      <div className="contenedorsocial  shadow-md  hover:shadow-2xl focus:bg-blue-900 focus:shadow-2xl focus:outline-none ">
        <ul className="">
          <li>
            <a
              href="https://www.linkedin.com/company/dpjd/"
              target="_blank"
              
            >
                <img src={Linkedin} alt="instagram" />
            </a>
          
          </li>
          <li>
            <a href="https://www.facebook.com/Distribuciones-Pastor-Julio-Delgado-111751904962724" target="_blank">
              {" "}
              <img src={Facebook} alt="face" />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/pastorjuliodelgado/"
              target="_blank"
            >
              <img src={Instagram} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
