import { createCssClass } from "../../../utils/utils"
import "../searchNavBar/Navbar.css"

const BrandedNavbar = ({children, pageClassname=""}) =>{
    return(
        <>
            <header className="">
                <nav className={createCssClass("navbar", "navbar-bg", pageClassname)}>
                    <a href='/' id='brand' className="vanishable"> Birbnb </a>
                    { children }
                    <a href="#" className='button'> <span>Log in</span></a>
                </nav>
            </header>
        </>
    )
}

export default BrandedNavbar