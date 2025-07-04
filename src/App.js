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
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import { LoaderProvider } from './contexts/loaderContext/LoaderContext';
import { ModalProvider } from './contexts/modalContext/ModalContext';
import GlobalModal from './components/Modals/GlobalModal/GlobalModal';


function App() {
  return (
    <BrowserRouter>
      <LoaderProvider>
        <UsuarioProvider>
          <FilterProvider>
            <ModalProvider>
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
                
                <Route element={<ProtectedRoute/>}>
                  <Route path="/usuarios/:id/mis-reservas" element={<MisReservas/>}/>
                  <Route path="/alojamientos/:id" element={<Alojamiento />} />
                </Route>
                <Route element={<ProtectedRoute hostIsNotRequire={false}/>}>
                  <Route path="/alojamientos/crear" element={<CrearAlojamientoPage/>}/>
                </Route>
              </Routes>
              <GlobalModal/>
            </ModalProvider>
          </FilterProvider>
        </UsuarioProvider>
      </LoaderProvider>
    </BrowserRouter>
  );
}

export default App;
