import React from 'react'
import { Blogprincipal, Headerblog } from '../Componentes/Blog/Blogprincipal'
import { CardListBlog, Newsletter } from '../Componentes/Blog/CardBlog'
import { Footer } from '../Componentes/footer/footer'
import { Footers } from '../Componentes/footer/footer2'
import Navbar from '../Componentes/Navbar/Navbar'
import Sidebar, { Navblog } from '../Componentes/Navbar/Navblog/Sidebar'

export const VistaBlog = () => {
  return (
    <div>
      <Headerblog />
      <Blogprincipal />
      <CardListBlog />
      <Newsletter />
      <CardListBlog />
      <Footers />
    </div>
  )
}
