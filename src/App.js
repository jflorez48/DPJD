import logo from './logo.svg';
import './App.css';
import { Header } from './Componentes/Header/Header';
import { Containerbtn } from './Componentes/Containerbtn/Index';

import { Bannert } from './Componentes/Banners/Bannert';
import { Servicio } from './Componentes/servicios/Servicio';

import { Mapa } from './Componentes/Mapa/Mapa';
import { Footer } from './Componentes/footer/footer';
import { Redes } from './Componentes/Redesociales/Redes';
import { Home } from './Pages/Home';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Conocenos } from './Pages/Conocenos';
import { Categorias } from './Pages/Categorias';
import { Blogpage } from './Componentes/Blog/Blogpage';
import { ContactPage } from './Pages/ContactPage';
import { Job } from './Pages/Job';
import { Plataformas } from './Pages/Plataformas';
import { VistaBlog } from './Pages/VistaBlog';
import Politicas from './Componentes/Politicas/Politicas';
import { Politicaspage } from './Pages/Politicaspage';
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home></Home>}> </Route>
        </Routes>


        <Routes>
          <Route path='/conocenos' element={<Conocenos></Conocenos>}> </Route>
        </Routes>
        <Routes>
          <Route path='/marcas' element={<Categorias></Categorias>}> </Route>
        </Routes>
        <Routes>
          <Route path='/blog' element={<Blogpage></Blogpage>}> </Route>
        </Routes>
        <Routes>
          <Route path='/contacto' element={<ContactPage></ContactPage>}> </Route>
        </Routes>
        <Routes>
          <Route path='/job' element={<Job></Job>}> </Route>
        </Routes>
        <Routes>
          <Route path='/plataformas' element={<Plataformas></Plataformas>}> </Route>
        </Routes>
        <Routes>
          <Route path='/noticias' element={<VistaBlog></VistaBlog>}> </Route>
        </Routes>
        <Routes>
          <Route path='/Politicas' element={<Politicaspage></Politicaspage>}> </Route>
        </Routes>
        


       



      </Router>

    </div>
  );
}

export default App;
