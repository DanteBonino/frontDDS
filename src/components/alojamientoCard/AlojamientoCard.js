import Slider from "../slider/Slider"
import "./AlojamientoCard.css"

const AlojamientoCard = ({alojamiento}) => {
    const location = "Buenos Aires"
    const { shortDescription, precioPorNoche } = alojamiento
    return(
        <div className="card">
            <Slider/>
            <section className="cardInfo">
                <p id="location"> Departamento en {location} </p>
                <p> {shortDescription} </p>
                <div> <span>$ {precioPorNoche} </span> por noche </div>
            </section>
        </div>
    )
}

export default AlojamientoCard