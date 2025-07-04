// context/FilterContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { esUnObjetoVacio, getCookie, mockApiResponse, mockUsuarioDePrueba } from "../../utils/utils";
import { toast } from "react-toastify";
import  Cookies from "js-cookie";

const UsuarioContext = createContext();

export const useUsuario = () => useContext(UsuarioContext);


export const UsuarioProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState({});

  function setUsuarioConCookie(unUsuario){
    setUsuario(unUsuario)
    Cookies.set("session", JSON.stringify(unUsuario), {expires:7, path:"/"})
  }

  function usuarioDePrueba(){
    return mockUsuarioDePrueba()
        .then(usuario => {
            setUsuarioConCookie(usuario)
            toast.success("Se seteo el usuario correctamente")
        })
        .catch(e => {
            toast.error(e.message)
        })
  }

  useEffect(() => {
    const userCookie = getCookie("session")
    setUsuarioConCookie(userCookie ? userCookie : {})
    setLoading(false)
  }, [])

  return (
    <UsuarioContext.Provider value={{ usuario, usuarioDePrueba, setUsuarioConCookie, loading}}>
      {children}
    </UsuarioContext.Provider>
  );
};
