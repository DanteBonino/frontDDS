// context/FilterContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { esUnObjetoVacio, mockApiResponse, mockUsuarioDePrueba } from "../../utils/utils";
import { toast } from "react-toastify";

const UsuarioContext = createContext();

export const useUsuario = () => useContext(UsuarioContext);


export const UsuarioProvider = ({ children }) => {
  
  const [usuario, setUsuario] = useState({});

  function usuarioDePrueba(){
    return mockUsuarioDePrueba()
        .then(usuario => {
            setUsuario(usuario)
            toast.success("Se seteo el usuario correctamente")
        })
        .catch(e => {
            toast.error(e.message)
        })
  }

  return (
    <UsuarioContext.Provider value={{ usuario, usuarioDePrueba}}>
      {children}
    </UsuarioContext.Provider>
  );
};
