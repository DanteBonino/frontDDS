import { createPortal } from "react-dom"
import CloseIcon from '@mui/icons-material/Close';
import { useFilters } from "../../../contexts/filterContext/FilterContext";
import "./BaseModal.css";
import FilterSeccion from "./components/FilterSeccion";
import { esUltimoElemento } from "../../footers/footer/NavLinks";
import { createCssClass } from "../../../utils/utils";
import { useEffect } from "react";

const BaseModal = ({onClose, secciones, title="", modalExtraClass = "", filtros=[]}) => {
    const { aplicarFiltros, clearFilters, resetFiltersDesdeUrl } = useFilters();

    const modalRoot = document.getElementById("modal-root");

    

    
    function handleBuscarClick(){
        aplicarFiltros();
        onClose()
    }

    function handleCrossClose(){
        onClose()
        resetFiltersDesdeUrl()
    }
    

    useEffect(() => {
        // Al montar el modal: bloquear scroll
        document.body.style.overflow = "hidden";

        // Al desmontar el modal: restaurar scroll
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    if (!modalRoot) {
        console.error("modal-root no encontrado");
        return null;
    }

    return (
        createPortal(
            <div className="modalOverlay show">
                <div className={createCssClass("modal", modalExtraClass)}>
                    <div className="modalHeader">
                        <h2> {title} </h2>
                        <div>
                            <button onClick={handleCrossClose}>
                                <CloseIcon/>
                            </button>
                        </div>
                    </div>
                    <div className="modalContent">
                        <div className="modalBody">
                        {
                            secciones.map(({children, name, contentClass}, index) =>{
                                return <FilterSeccion key={index} name={name} contentClass = {contentClass} esUltimoElemento={esUltimoElemento(index, secciones)}>
                                    {children}
                                </FilterSeccion>
                            })
                        }
                        </div>
                    </div>
                    <div className="modalFooter">
                        <button className={"action borrar"} onClick={()=>{clearFilters(filtros)}}>
                            Borrar filtros
                        </button>
                        <button className={"action buscar"} onClick={handleBuscarClick}>
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        , modalRoot)
    )
}

export default BaseModal