class Filter {
  constructor(fieldName){
    this.name = fieldName
  }

  setear(filtros, parametros){
    if(filtros[this.name]) parametros.set(this.name, this.value(filtros))
  }

  value(filtros){
    return filtros[this.name]
  }

  serializar(unValor){
    return unValor
  }
}

class CaracteristicasFilter extends Filter {
  constructor(){
    super("caracteristicas")
  }

  value(filtros){
    return super.value(filtros).join(",")
  }

  serializar(unValor){
    return unValor.split(",")
  }
}

export const defaultValues = {
    fechaInicial: null, 
    fechaFinal: null,
    huespedes: 1,
    min: 0,
    max: 1000,
    caracteristicas: []
}

export const filtersNames = Object.keys(defaultValues)

export const filtersCommands = filtersNames
    .filter(name => name !== "caracteristicas")
    .map(name => new Filter(name))
    .concat(new CaracteristicasFilter);