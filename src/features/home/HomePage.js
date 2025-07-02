import AlojamientoCard from "../../components/alojamientoCard/AlojamientoCard"
import Navbar from "../../components/navbars/searchNavBar/Navbar"
import { alojamientos } from "./mocks/mocks"
import "./HomePage.css"
import { Link, useLocation } from "react-router-dom"
import VariableFooter from "../../components/footers/variableFooter/VariableFooter"

function HomePage (){
    const location = useLocation();
    return(
        <div id="root">
            <Navbar pageClassname={"homePage"}/>
            <main className="alojamientoCardsContainer homePage">
                {
                    alojamientos.map((unAlojamiento, index) => {
                        return <Link className="alojamientoLink" to={`/alojamientos/${unAlojamiento.id}${location.search}`} key={index}><AlojamientoCard alojamiento={unAlojamiento} /></Link>
                    })
                }
            </main>
            <VariableFooter pageClassname={"homePage"}/>
        </div>
    )
}

export default HomePage