import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './features/home/HomePage';
import { FilterProvider } from './contexts/filterContext/FilterContext';
import Alojamiento from './features/alojamientos/AlojamientoPage';
import Layout from './features/layout/Layout';
import { Bounce, ToastContainer } from 'react-toastify';
import MisReservas from './features/usuarios/misReservas/MisReservas';


function App() {
  return (
    <BrowserRouter>
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
        </Routes>
      </FilterProvider>
    </BrowserRouter>
  );
}

export default App;
