import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import "./DayPicker.css"
import { useFilters } from '../../contexts/filterContext/FilterContext';
import { convertirAStringSiExiste, lasFechasSonIguales, nextDateFrom, setSelectedDate, showSelectedDate } from '../../utils/utils';

const CustomDayPicker = () => {
    const { filters, setFilters } = useFilters();
    const today = new Date()
    const fechaInicial = filters.fechaInicial
    
    function handleSetRange(unRango){
        if(unRango && lasFechasSonIguales(unRango.from, unRango.to)){
            unRango.to = nextDateFrom(unRango.from)
        }
        setFilters((prev) =>({//Podría ser una abstracción "actualizar" porque siempre hago lo de prev ...
            ...prev,
            fechaInicial : setSelectedDate(unRango, "from"),
            fechaFinal   : setSelectedDate(unRango, "to")
        }))
    }

    return (
            <DayPicker
                mode="range"
                numberOfMonths={1}
                navLayout='around'
                startMonth={fechaInicial||today}
                disabled={{ before: today }}
                onSelect={handleSetRange}
                selected={{
                    from : showSelectedDate(filters.fechaInicial),
                    to   : showSelectedDate(filters.fechaFinal)
                }}        
            />
    )
}

export default CustomDayPicker