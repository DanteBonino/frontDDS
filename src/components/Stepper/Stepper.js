import { useState } from "react"
import { cotaSuperiorDeViajeros, createCssClass } from "../../utils/utils"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./Stepper.css"
import { useFilters } from "../../contexts/filterContext/FilterContext";

const StepperButton = ({condicion, icono, onClick}) =>{
    return (
        <button className={createCssClass("stepperButton", condicion ? "disabled" : "abled")} disabled={condicion} onClick={onClick}>
                {icono}
        </button>
    )
}

const Stepper = () => {
    const { filters, updateFilters } = useFilters()
    const cantidad = filters.huespedes

    function incrementarCantidad (){
        modificarCantidad((unaCantidad) => unaCantidad + 1)
    }

    function decrementarCantidad(){
        modificarCantidad((unaCantidad) => unaCantidad - 1)
    }

    function modificarCantidad(f){
        updateFilters({huespedes: f(cantidad)})
    }

    return(
        <div className="stepper">
            <StepperButton condicion={cantidad == 0} onClick={decrementarCantidad} icono={<RemoveIcon fontSize="small"/>} />
            <div className="stepperQuantity">
                {cantidad}
                {
                    cantidad >= cotaSuperiorDeViajeros
                        ? `+`
                        : ""
                }
            </div>
            <StepperButton condicion={cantidad == cotaSuperiorDeViajeros} onClick={incrementarCantidad} icono={<AddIcon fontSize="small"/>} />
        </div>
    )
}

export default Stepper