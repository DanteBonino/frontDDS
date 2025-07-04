import { ClipLoader } from "react-spinners";
import { useUsuario } from "../../../contexts/usuarioContext/UsuarioContext"
import { createCssClass, Roles } from "../../../utils/utils"
import Loader from "../../loader/Loader";
import SuspenseWrapper from "../../suspense/suspenseWrapper/SuspenseWrapper";
import "../searchNavBar/Navbar.css"
import { useState } from "react";

const BrandedNavbar = ({children, pageClassname=""}) =>{
    const { usuario, usuarioDePrueba } = useUsuario();
    const [loading, setLoading] = useState(false)

    function handleLoginClick(){
        setLoading(true)
        usuarioDePrueba()
            .finally(()=>{
                setLoading(false)
            })
    }

    return(
        <>
            <header className="">
                <nav className={createCssClass("navbar", "navbar-bg", pageClassname)}>
                    <a href='/' id='brand' className="vanishable"> Birbnb </a>
                    { children }
                    <button className={'button'} style={{display: usuario.id? "none":"", minWidth:"75px"}} onClick={handleLoginClick} disabled={loading}>
                        <SuspenseWrapper suspenseElement={<Loader loader={<ClipLoader color={"white"} size={20}/>}/>} loading={loading}>
                            <span>Log in</span>
                        </SuspenseWrapper>
                    </button>
                </nav>
            </header>
        </>
    )
}

export default BrandedNavbar