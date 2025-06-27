import "../../FilterModal/FilterModal.css"

const FilterSeccion = ({clase = "", name, children, contentClass = "", esUltimoElemento=false}) => {
    return (
        <section className={clase}>
            <h3 className="filterName">{name}</h3>
            <div className={`content ${contentClass}`}>
                {children}
            </div>
            {   
                !esUltimoElemento &&
                    <hr className="separador"/>
            }   
        </section>
    )
}

export default FilterSeccion