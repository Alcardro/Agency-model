import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa Routes también
import App from './App.jsx';
import './index.css';
import About from './About.jsx';
import Servicios from './Servicios.jsx';
import Contact from './Contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/agency-model">
      <Routes> {/* Envuelve las rutas dentro de <Routes> */}
        <Route path="*" element={<App />} /> {/* Define las rutas correctamente */}
        <Route path="/about" element={<About />}/>
        <Route path="/servicios" element={<Servicios />}/>
        <Route path="/contacto" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
