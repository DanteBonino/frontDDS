import { parseISO } from "date-fns";
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import PetsIcon from '@mui/icons-material/Pets';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

export function emptyFn (){
    
}

export function createCssClass(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function convertirAStringSiExiste (unaFecha){
    return unaFecha ? unaFecha.toISOString().split("T")[0] : null
}

export function showSelectedDate(unaFecha){
    return mapIfOrNullish(unaFecha, (fecha) => parseISO(fecha))
}

export function setSelectedDate(unRango, unaPropiedad){
    return mapIfOrNullish(unRango, (unRango) => convertirAStringSiExiste(unRango[unaPropiedad]))
}

function mapIfOrNullish(unValor, unaFuncion){
    return unValor ? unaFuncion(unValor) : null
}

export function nextDateFrom(unaFecha){
    const nextDate = new Date(unaFecha);
    nextDate.setDate(nextDate.getDate() + 1)
    return nextDate
}

export function lasFechasSonIguales(fechaInicial, fechaFinal){
    return fechaFinal.getTime() === fechaInicial.getTime()
}

export const cotaSuperiorDeViajeros = 16

export const rojo = "#ff2f68";

export const caracteristicasDictionary = {
    "WIFI": <WifiIcon fontSize='small'/>,
    "PISCINA": <PoolIcon fontSize='small'/>,
    "MASCOTAS PERMITIDAS": <PetsIcon fontSize='small'/>,
    "ESTACIONAMIENTO": <LocalParkingIcon fontSize='small'/>
}

export function capitalise(unaPalabra){
    return unaPalabra[0].toUpperCase() + unaPalabra.slice(1).toLowerCase()
}

export function cantidadDeNochesComoStrings (fechaInicial, fechaFinal){
    return cantidadDeNoches(new Date(fechaInicial), new Date(fechaFinal))
}

function cantidadDeNoches(fechaInicial, fechaFinal){
    const diffMs = fechaFinal - fechaInicial;
    const diffDias = diffMs / (1000 * 60 * 60 * 24);

    return diffDias;
}

export function showTextSegun(condicion, unTexto, otroTexto){
    return(
        condicion
            ? unTexto
            : otroTexto
    )
}