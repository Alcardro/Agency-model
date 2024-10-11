import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa Routes también
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes> {/* Envuelve las rutas dentro de <Routes> */}
        <Route path="*" element={<App />} /> {/* Define las rutas correctamente */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
