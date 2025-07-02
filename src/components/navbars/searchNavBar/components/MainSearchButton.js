import { parseISO } from "date-fns";
import { useFilters } from "../../../../contexts/filterContext/FilterContext";
import "../../../iconedButton/IconedButton.css"
import SearchIcon from '@mui/icons-material/Search';

function mostrarHuespedes(cantidad) {
  if (!cantidad) return "¿Cuántos?";
  if (cantidad >= 16) return "16 viajeros o más";
  return `${cantidad} viajero${cantidad > 1 ? 's' : ''}`;
}

export function mostrarTextoFechas(startStr, endStr){
  if (!startStr && !endStr) return "Semana (en cualquier fecha)";

  const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const hoy = new Date();
  const currentYear = hoy.getFullYear();

  let start = startStr ? parseISO(startStr) : null;
  let end = endStr ? parseISO(endStr) : null;

  if (start && !end) {
    end = new Date(start);
    end.setDate(end.getDate() + 1);
  } else if (!start && end) {
    start = new Date(end);
    start.setDate(start.getDate() - 1);
  }

  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  const sameYear = start.getFullYear() === end.getFullYear();
  const sameMonth = start.getMonth() === end.getMonth();
  const isCurrentYear = start.getFullYear() === currentYear && end.getFullYear() === currentYear;

  const d1 = start.getDate().toString().padStart(2, "0");
  const d2 = end.getDate().toString().padStart(2, "0");
  const m1 = MONTHS[start.getMonth()];
  const m2 = MONTHS[end.getMonth()];
  const y1 = start.getFullYear();
  const y2 = end.getFullYear();

  if (sameYear && sameMonth && isCurrentYear) {
    return `${d1} - ${d2} de ${m1}`;
  }

  if (sameYear && !sameMonth && isCurrentYear) {
    return `${d1} de ${m1} al ${d2} de ${m2}`;
  }

  if (!sameYear) {
    return `${d1} de ${m1} de ${y1} al ${d2} de ${m2} de ${y2}`;
  }

  if (sameYear && sameMonth && !isCurrentYear) {
    return `${d1} - ${d2} de ${m1} de ${y1}`;
  }

  if (sameYear && !sameMonth && !isCurrentYear) {
    return `${d1} de ${m1} al ${d2} de ${m2} de ${y1}`;
  }

  return ""; // fallback
}

const MainSearchButton = ({onClick}) =>{
    const { urlFilters } = useFilters()
    return(
        <button className="searchButton" onClick={onClick}>
            <div className="filterLine sarasa">
                <span className="mainFilter filterText">
                    {
                        mostrarTextoFechas(urlFilters.fechaInicial, urlFilters.fechaFinal)
                    }
                </span>
            </div>
            <div className="filterLine">
                <span className="secondaryFilter filterText">
                    {
                        mostrarHuespedes(urlFilters.huespedes)
                    }
                </span>
            </div>
            <div className="searchContainer">
                <SearchIcon fontSize="small" style={{color:"white"}}></SearchIcon>
            </div>
        </button>

    )

}

export default MainSearchButton