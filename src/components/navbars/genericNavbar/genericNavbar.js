import { useUsuario } from "../../../contexts/usuarioContext/UsuarioContext"
import { createCssClass } from "../../../utils/utils"
import "../searchNavBar/Navbar.css"

const BrandedNavbar = ({children, pageClassname=""}) =>{
    const { usuario, usuarioDePrueba } = useUsuario();
    return(
        <>
            <header className="">
                <nav className={createCssClass("navbar", "navbar-bg", pageClassname)}>
                    <a href='/' id='brand' className="vanishable"> Birbnb </a>
                    { children }
                    <button className={'button'} style={{display: usuario.id? "none":""}} onClick={usuarioDePrueba}> <span>Log in</span></button>
                </nav>
            </header>
        </>
    )
}

export default BrandedNavbar