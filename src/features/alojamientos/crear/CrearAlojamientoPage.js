import CrearAlojamientoForm from "../../../components/alojamientoForm/AlojamientoForm"
import ConstantFooter from "../../../components/footers/constantFooter/ConstantFooter"
import VariableFooter from "../../../components/footers/variableFooter/VariableFooter"
import BrandedNavbar from "../../../components/navbars/genericNavbar/genericNavbar"


const CrearAlojamientoPage = () => {
    return(
        <div id="root">
            <BrandedNavbar pageClassname="alojamientoPage">
                <a href='/' id='brand' className="remain"> Birbnb </a>
            </BrandedNavbar>
            <main className="alojamientoPage">
                <CrearAlojamientoForm/>
            </main>
            <ConstantFooter pageClassname={"alojamientoPage"}/>
        </div>
    )
}

export default CrearAlojamientoPage