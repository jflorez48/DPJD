import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Logo from "./Logo.png";
import "./nav.css"
import Button from "./Button";
import NavLinks from "./NavLinks";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState();

  return (
    <div className="navbar">
      <nav className="bg-gradient-to-r from-[#11318B]  to-[#101F6B] h-24 z-20 relative hidden md:flex ">
        <div className="flex items-center font-medium justify-around fixed bg-gradient-to-r from-[#11318B]  to-[#101F6B] w-full ">
          <div className="z-10 p-5 md:w-auto w-full flex justify-between">
            <Link to="/">
              {" "}
              <img src={Logo} alt="logo" className="md:cursor-pointer h-16" />
            </Link>
            {/* <Link to="/"> <img src={Logo} alt="logo" className="md:cursor-pointer h-16" /></Link> */}

            <div
              className="text-3xl md:hidden text-white "
              onClick={() => setOpen(!open)}
            >
              <MenuIcon name={`${open ? "CloseIcon" : "MenuIcon"}`} />
            </div>
          </div>
          <ul className="md:flex hidden  items-center gap-8 ">
            <li>
              <Link
                className="navegacion__enlace py-2 px-3 inline-block text-slate-50 font-bold "
                to={"/"}
              >
                <HomeIcon />
              </Link>
            </li>
            <NavLinks />

            <li>
              <Link
                to="/job"
                className="py-2 px-3 inline-block text-slate-50 font-bold  "
              >
                Trabaja con nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                
                className="py-2 px-3 inline-block text-slate-50 font-bold activa "
              >
                Contáctanos
              </Link>
            </li>
          </ul>
          <div className="md:block hidden">{/* <Button /> */}</div>
          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-gradient-to-r from-blue-800 h-full  to-blue-900  fixed w-full top-0  bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <li className=" text-white">
              <Link to="/" className="py-2 px-3 inline-block ">
                Inicio
              </Link>
            </li>
            <NavLinks />

            <li className=" text-white ">
              <Link to="/job" className="py-2 px-3 inline-block">
                Trabaja con nosotros
              </Link>
            </li>
            <li className=" text-white">
              <a  href="../Formulario/index.html" className="py-2 px-3 inline-block">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="bg-gradient-to-r from-[#11318B] to-[#101F6B] h-24 z-20 relative md:hidden flex">
            <div className="navbar">
                <div className="container nav-container">
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span> 
                    </div>

                    <div className="menu-items">
                        <li><Link to="/" >Inicio</Link></li>
                        
 
                        <ul>
                            <li>
                                <Link to="/Conocenos">Nuestra Trayectoria</Link>
                            </li>
                            <li><Link to="/Marcas">Nuestras Marcas</Link></li>
                            <li>
                                <Link to="/Politicas">Nuestras Políticas</Link>
                            </li>
                        </ul>

                        <li><Link to="/job">Trabaja con nosotros</Link></li>
                        <li><Link to="/contacto">Contáctanos</Link></li>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
