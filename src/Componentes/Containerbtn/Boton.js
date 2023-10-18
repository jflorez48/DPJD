import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './cbtn.css'

export const Boton = ( {link, route, text}) => {
  return (
    <div className="">
      
       <button href={link} to={route}  type="button" class=" transition duration-500 ease-in-out inline-block px-6 py-2 bg-gradient-to-r from-color-btn1 to-color-btn2 text-white  before:text-xs leading-tight  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg  my-4 boton_primary font-bold ">{text}</button>

    </div>

  )
}

