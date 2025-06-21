import { createPortal } from "react-dom"
import CloseIcon from '@mui/icons-material/Close';
import { useFilters } from "../../../contexts/filterContext/FilterContext";
import "./BaseModal.css";

const BaseModal = ({onClose, children, title=""}) => {
    const { aplicarFiltros, clearFilters } = useFilters();

    const modalRoot = document.getElementById("modal-root");

    if (!modalRoot) {
        console.error("modal-root no encontrado");
        return null;
    }

    function handleBuscarClick(){
        aplicarFiltros();
        onClose()
    }
    

    return (
        createPortal(
            <div className="modalOverlay show">
                <div className="modal">
                    <div className="modalHeader">
                        <h2> {title} </h2>
                        <div>
                            <button onClick={onClose}>
                                <CloseIcon/>
                            </button>
                        </div>
                    </div>
                    <div className="modalContent">
                        <div className="modalBody">
                            {children}
                        </div>
                    </div>
                    <div className="modalFooter">
                        <button className={"action borrar"} onClick={clearFilters}>
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