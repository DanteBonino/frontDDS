import { cotaSuperiorDeViajeros } from "../../../utils/utils"
import Stepper from "../../Stepper/Stepper"
import "./CompleteStepper.css"

const CompleteStepper = ({cotaInferior = 0, cotaSuperior = cotaSuperiorDeViajeros, cotaSuperiorEstricta = false, containerClass=""}) => {
    return (
        <div className={containerClass} style={{width: "100%", display: "flex", flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between", alignItems: "center"}}>
            <span> Viajeros </span>
            <Stepper cotaInferior={cotaInferior} cotaSuperior={cotaSuperior} cotaSuperiorEstricta={cotaSuperiorEstricta}/>
        </div>
    )
}

export default CompleteStepper