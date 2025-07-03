import { Navigate, Outlet } from "react-router-dom";
import { useUsuario } from "../../contexts/usuarioContext/UsuarioContext";
import { esUnObjetoVacio, Roles } from "../../utils/utils";


function ProtectedRoute({hostIsNotRequire = true }) {
  const { usuario } = useUsuario();

  return (
    !esUnObjetoVacio(usuario) && (hostIsNotRequire || usuario.rol == Roles.HOST)  ? <Outlet/> : <Navigate to='/'/>
  )
}

export default ProtectedRoute;