import AlojamientoCard from "../../components/alojamientoCard/AlojamientoCard"
import Navbar from "../../components/navbars/searchNavBar/Navbar"
import { alojamientos as mockAlojamientos } from "./mocks/mocks"
import "./HomePage.css"
import { Link, useLocation } from "react-router-dom"
import VariableFooter from "../../components/footers/variableFooter/VariableFooter"
import { useEffect, useState } from "react"
import { useFilters } from "../../contexts/filterContext/FilterContext"
import { fetchAlojamientos, rojo } from "../../utils/utils"
import Loader from "../../components/loader/Loader"
import { ClipLoader } from "react-spinners"


function HomePage (){
    const location = useLocation();
    const {filters} = useFilters();
    const [alojamientos, setAlojamientos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function traerAlojamientos() {
            const data = await fetchAlojamientos(filters);
            console.log(data)
            setAlojamientos(data);
            setLoading(false);
        }
        traerAlojamientos();
    }, [filters]);

    return(
        <div id="root">
            <Navbar pageClassname={"homePage"}/>
            <main className="alojamientoCardsContainer homePage">
                {
                    loading &&
                    <Loader loader={<ClipLoader color={rojo} size={20}/>}/>
                }
                {   
                    !loading && mockAlojamientos?.map((unAlojamiento, index) => {
                            return <Link className="alojamientoLink" to={`/alojamientos/${unAlojamiento.id}${location.search}`} key={index}><AlojamientoCard alojamiento={unAlojamiento} /></Link>
                        })
                }
            </main>
            <VariableFooter pageClassname={"homePage"}/>
        </div>
    )
}

export default HomePage