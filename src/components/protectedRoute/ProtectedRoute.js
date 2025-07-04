import { Navigate, Outlet } from "react-router-dom";
import { useUsuario } from "../../contexts/usuarioContext/UsuarioContext";
import { esUnObjetoVacio, getCookie, Roles } from "../../utils/utils";
import { useEffect } from "react";
import SuspenseWrapper from "../suspense/suspenseWrapper/SuspenseWrapper";


function ProtectedRoute({hostIsNotRequire = true }) {
  const { usuario, loading } = useUsuario();
  
  return (
    <SuspenseWrapper loading={loading} suspenseElement={<></>}>
        {
            !esUnObjetoVacio(usuario) && (hostIsNotRequire || usuario.rol == Roles.HOST)  ? <Outlet/> : <Navigate to='/'/>
        }
    </SuspenseWrapper>
    
  )
}

export default ProtectedRoute;