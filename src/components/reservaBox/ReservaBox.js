import { useState } from "react"
import { useFilters } from "../../contexts/filterContext/FilterContext"
import useScreenSize from "../../hooks/useWindowsSize"
import { cantidadDeNochesComoStrings, createCssClass, mockCrearReserva, rojo, showTextSegun } from "../../utils/utils"
import CompleteStepper from "../inputs/stepper/CompleteStepper"
import { mostrarTextoFechas } from "../navbars/searchNavBar/components/MainSearchButton"
import "./ReservaBox.css"
import Loader from "../loader/Loader"
import { ClipLoader } from "react-spinners"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import useSetUrlParams from "../../hooks/useSetUrlParams"

export function estanElegidasLasFechas(filters){
    return filters.fechaInicial && filters.fechaFinal
}

function DateButton({label, fecha}){
    return(
        <a className="dateButton contentElement" href="#calendario">
                <span className="dateButtonLabel">{label}</span>
                <span className="dateText">{fecha || "Agregá la fecha"}</span>
        </a>
    )
}

const ReservaBox = ({huespedes, precioPorNoche, isSmall = false}) => {
    const { filters } = useFilters();
    const noches = cantidadDeNochesComoStrings(filters.fechaInicial, filters.fechaFinal)
    const { width } = useScreenSize();
    const [fetching, setFetching] = useState(false);
    const navigate = useNavigate();
    const setParams = useSetUrlParams();

    function setHuespedes(huespedes){
        setParams(huespedes)
    }

    
    function handleCrearReserva(e){
        e.preventDefault()
        setFetching(true)
        mockCrearReserva()
            .then(_response => {
                toast.success("La reserva fue creada correctamente")
                navigate(`/usuarios/${1}/mis-reservas`)
            })
            .catch(error =>{
                toast.error(error.message)
            })
            .finally(()=>{
                setFetching(false)
            })
    }

    return (
        <div className="reservaBox">
            <span className="boxTitle">
            {
                estanElegidasLasFechas(filters)
                    ? <div className="datesSelectedTitle">
                        <span className="price">${precioPorNoche * noches}</span> 
                        <span className="nights">por {noches} noches</span>
                        {
                            isSmall && 
                                <span style={{fontSize:"12px"}}> {showTextSegun(estanElegidasLasFechas(filters),mostrarTextoFechas(filters.fechaInicial, filters.fechaFinal), "")} </span>
                        }       
                       </div>
                    : "Agregá las fechas para ver los precios"
            }   
            </span>
            <div className="contentRB">
                <div className="datesContainer">
                    <DateButton label={"CHECK-IN"} fecha={filters.fechaInicial}/>
                    <DateButton label={"CHECK-OUT"} fecha={filters.fechaFinal}/>         
                </div>
                <div className="contentElement stepperContainer">
                    <CompleteStepper  cotaInferior={1} cotaSuperior={huespedes} cotaSuperiorEstricta={true} onQuantityChange={setHuespedes}/>
                </div>
                </div>
                
            <button className={createCssClass("button-87", !estanElegidasLasFechas(filters) ? "disabled" : "able")} disabled={!estanElegidasLasFechas(filters)} onClick={handleCrearReserva}>
                {
                    fetching
                        ? <Loader loader={<ClipLoader color={"white"} size={20}/>}/>
                        : "Reservar"
                }
            </button>                   
        </div>
    )
}

export default ReservaBox