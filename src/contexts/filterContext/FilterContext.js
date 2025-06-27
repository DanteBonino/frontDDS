// context/FilterContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { defaultValues, filtersCommands, filtersNames } from "./utils";

const FilterContext = createContext();

export const useFilters = () => useContext(FilterContext);

const obtenerFiltrosDesdeUrl = (searchParams) => {//TODO: revisar esto
  const result = { ...defaultValues };

  filtersCommands.forEach(command => {
    const value = searchParams.get(command.name);
    if (value !== null) {
      result[command.name] = command.serializar(value)
      /*
        Podría hacer que la fechaFinal sepa serialzarse según el valor de la fecha inicial y viceversa:
          - Fecha inicial si no existe o si es igual a la fecha final, se serializa como fecha final - 1
          - Fecha final si no existe (pero existe la inicial) o si es igual a la fecha inicial, se serializa como fecha inicial + 1
      */
    }
  });

  return result;
};

/*
  Preguntar si: sirve tener todos los "commands" con apply (si no los uso indistintamente) sólo para poder tener algo de este estilo:
    f (objetoASetear, objetoConValores){
      commands.forEach(command => {
        command.apply(objetoASetear, objetoConValores);  
      })
    }
  Y es demasiado crear un objeto que sepa setearse?  

*/


export const FilterProvider = ({ children }) => {
  
  const [filters, setFilters] = useState(defaultValues);
  const [urlFilters, setUrlFilters] = useState(defaultValues)


  const navigate = useNavigate();
  const location = useLocation();

  const aplicarFiltros = () => {
    const params = new URLSearchParams();

    filtersCommands.forEach(command =>{
      command.setear(filters, params)
    })

    navigate({
      pathname: location.pathname,
      search: params.toString()
    });
  };

  const clearFilters = (relatedFilters = []) => {
    const defaultedRelatedFilters = relatedFilters.reduce((defaultFilters, filterName) =>{
      defaultFilters[filterName] = defaultValues[filterName];
      return defaultFilters
    }, {})
    updateFilters(defaultedRelatedFilters);
  };

  const resetFiltersDesdeUrl = () => {
    const searchParams = new URLSearchParams(location.search);
    const nuevosFiltros = obtenerFiltrosDesdeUrl(searchParams);
    setFilters(nuevosFiltros);
    setUrlFilters(nuevosFiltros);
  };

  function updateFilters (cambios){
    setFilters((prev) =>({
      ...prev,
      ...cambios
    }))
  }

  useEffect(() => {
    resetFiltersDesdeUrl();
  }, [location.search]);

  return (
    <FilterContext.Provider value={{ filters, setFilters, aplicarFiltros, clearFilters, resetFiltersDesdeUrl, urlFilters, updateFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
