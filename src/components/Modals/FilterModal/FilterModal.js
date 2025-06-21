import Slider from '@mui/material/Slider';
import "../../navbar/Navbar.css"
import IconedButton from '../../iconedButton/IconedButton';
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import PetsIcon from '@mui/icons-material/Pets';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { useFilters } from '../../../contexts/filterContext/FilterContext';
import "./FilterModal.css"
import FilterSeccion from './components/FilterSeccion';
import { esUltimoElemento } from '../../footer/NavLinks';
import RangeValue from './components/RangeValue';



const caracteristicas = [
    {
        label: "Wifi",
        icon: <WifiIcon fontSize='small'/>
    },
    {
        label: "Piscina",
        icon: <PoolIcon fontSize='small'/>
    },
    {
        label: "Mascotas Permitidas",
        icon: <PetsIcon fontSize='small'/>
    },
    {
        label: "Estacionamiento",
        icon: <LocalParkingIcon fontSize='small'/>
    }
]


const FilterModal = () => {
    const { filters, setFilters } = useFilters();

    const handleSliderChange = (e, newValue) => {
        setFilters(prev => ({
            ...prev,
            min: newValue[0],
            max: newValue[1],
        }));
    };

    const toggleCaracteristica = (label) => {
        setFilters(prev => {
        const esta = prev.caracteristicas.includes(label);
        return {
                ...prev,
                caracteristicas: esta
                    ? prev.caracteristicas.filter(c => c !== label)
                    : [...prev.caracteristicas, label]
            };
        });
    };

    const secciones = [
        {
            name: "Rango de precios", 
            children: <>
                        <Slider
                            min={0}
                            max={1000}
                            step={10}
                            value={[filters.min, filters.max]}
                            onChange={handleSliderChange}
                            disableSwap
                            sx={{color: "#ff2f68" , width: "90%", alignSelf:"center"}}
                        />
                        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <RangeValue labelName="Mínimo" value={filters.min}/>
                            <RangeValue labelName="Máximo" value={filters.max}/>
                        </div>
                      </>
            ,
            contentClass: "rangoDePrecios"
        },
        {
            name:"Características",
            children:  <div className='caracteristicasContainer'>
                        {
                            caracteristicas.map(({icon, label}, index) =>
                                <IconedButton
                                    key={index}
                                    icon={icon}
                                    label={label}
                                    clase={filters.caracteristicas.includes(label) ? 'active' : ''}
                                    onClick={() => toggleCaracteristica(label)}
                                />
                            )
                        }
                    </div>,
            contentClass: "caracteristicas"
        }
    ]


    return(
        <>
            {
                secciones.map(({children, name, contentClass}, index) =>{
                    return <FilterSeccion key={index} name={name} contentClass = {contentClass} esUltimoElemento={esUltimoElemento(index, secciones)}>
                        {children}
                    </FilterSeccion>
                })
            }
        </>
    )
}

export default FilterModal