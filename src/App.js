import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './features/home/HomePage';
import { FilterProvider } from './contexts/filterContext/FilterContext';
import Alojamiento from './features/alojamientos/AlojamientoPage';
import Layout from './features/layout/Layout';
import { Bounce, ToastContainer } from 'react-toastify';
import MisReservas from './features/usuarios/misReservas/MisReservas';
import CrearAlojamientoPage from './features/alojamientos/crear/CrearAlojamientoPage';
import { UsuarioProvider } from './contexts/usuarioContext/UsuarioContext';


function App() {
  return (
    <BrowserRouter>
      <UsuarioProvider>
        <FilterProvider>
          <ToastContainer 
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            pauseOnFocusLoss
            pauseOnHover
            transition={Bounce}
          />
          <Routes>
              <Route index element={<HomePage/>}/>
              <Route path="/alojamientos/:id" element={<Alojamiento />} />
              <Route path="/usuarios/:id/mis-reservas" element={<MisReservas/>}/>
              <Route path="/alojamientos/crear" element={<CrearAlojamientoPage/>}/>
          </Routes>
        </FilterProvider>
      </UsuarioProvider>
    </BrowserRouter>
  );
}

export default App;
