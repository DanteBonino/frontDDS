import { useFilters } from '../../../contexts/filterContext/FilterContext';
import DayPicker from '../../daypicker/DayPicker';
import Stepper from '../../Stepper/Stepper';
import BaseModal from '../BaseModal/BaseModal';
import "./SearchModal.css"

const SearchModal = ({onClose}) => {
    const secciones = [
        {
            name: "¿Cuándo?", 
            children: <DayPicker/>,
            contentClass: "daypicker"
        },
        {
            name:"¿Quién?",
            children:  
                <div style={{width: "100%", marginBottom:"20px", display: "flex", flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between", alignItems: "center"}}>
                    <span> Viajeros </span>
                    <Stepper/>
                </div>,
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