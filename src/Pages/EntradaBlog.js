import React from 'react'
import { Blogpage } from '../Componentes/Blog/Blogpage'
import { Footers } from '../Componentes/footer/footer2'
import Navbar from '../Componentes/Navbar/Navbar'
import { Redes } from '../Componentes/Redesociales/Redes'

export const Blog = () => {
  return (
    <div>

        <Blogpage/>
        <Redes/>
        <Footers/>
        
    </div>
  )
}
