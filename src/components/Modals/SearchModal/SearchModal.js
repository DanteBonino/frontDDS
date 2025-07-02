import { useFilters } from '../../../contexts/filterContext/FilterContext';
import DayPicker from '../../daypicker/DayPicker';
import CompleteStepper from '../../inputs/stepper/CompleteStepper';
import Stepper from '../../Stepper/Stepper';
import BaseModal from '../BaseModal/BaseModal';
import "./SearchModal.css"

const SearchModal = ({onClose}) => {
    const { updateFilters } = useFilters();

    function setDateFilters(fechaInicial, fechaFinal){
        updateFilters({
            fechaInicial,
            fechaFinal
        })
    }
    /*setFilters((prev) =>({//Podría ser una abstracción "actualizar" porque siempre hago lo de prev ...
                ...prev,
                fechaInicial : setSelectedDate(unRango, "from"),
                fechaFinal   : setSelectedDate(unRango, "to")
            }))*/
    const secciones = [
        {
            name: "¿Cuándo?", 
            children: <DayPicker handleFiltersChange={setDateFilters}/>,
            contentClass: "daypicker"
        },
        {
            name:"¿Quién?",
            children:  
                <CompleteStepper containerClass='marginBottom20'/>,
            contentClass: "viajeros"
        }
    ]
    return(
        <BaseModal 
            onClose={onClose}
            title=''
            secciones={secciones}
            modalExtraClass='extraModalStyles'
            filtros={["huespedes", "fechaInicial", "fechaFinal"]}
        />
    )
}

export default SearchModal