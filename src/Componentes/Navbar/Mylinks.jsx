import React from "react";
import { Link } from "react-router-dom";


export const links = [
  {
    name: "Conócenos",
    submenu: true,
    sublinks: [
      {
        // Head: "Conócenos",
        sublink: [
          { name: "Nuestra Trayectoria", link: "/Conocenos" },
          { name: "Nuestras Marcas", link: "/Marcas" },
          { name: "Nuestras Políticas", link: "/Politicas" },
        ],
      },
  
    ],
  },
 
  
];
