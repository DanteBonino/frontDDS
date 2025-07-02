import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import "./DayPicker.css"
import { useFilters } from '../../contexts/filterContext/FilterContext';
import { convertirAStringSiExiste, lasFechasSonIguales, nextDateFrom, setSelectedDate, showSelectedDate } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

const CustomDayPicker = ({handleFiltersChange}) => {
    const { filters, setFilters } = useFilters();
    const today = new Date()
    const fechaInicial = filters.fechaInicial
    const navigate = useNavigate()

    function handleSetRange(unRango){
        if(unRango && lasFechasSonIguales(unRango.from, unRango.to)){
            unRango.to = nextDateFrom(unRango.from)
        }
        const fechaInicial = setSelectedDate(unRango, "from")
        const fechaFinal   = setSelectedDate(unRango, "to")
        handleFiltersChange(fechaInicial, fechaFinal);
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