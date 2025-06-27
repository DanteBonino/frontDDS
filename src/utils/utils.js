import { parseISO } from "date-fns";

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