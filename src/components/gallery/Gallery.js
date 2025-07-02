import "../gallery/Gallery.css"
import ImageWithSkeleton from "../imageWithSkeleton/ImageWithSkeleton"
const Gallery = ({imagenes}) =>{
    return(
        <section className="gallery">
            <div className="column large-image">
                <ImageWithSkeleton src={imagenes[0]} alt="Imagen principal" className="alojamientoImg" skeletonClassName={"roundedLeftCorners"}/>
            </div>
            <div className="column small-grid">
            {
                imagenes.map((linkAImagen, index) => (
                    <ImageWithSkeleton
                        src={linkAImagen}
                        key={index}
                        alt={`Imagen adicional ${index + 1}`}
                        className={
                            `smallAlojamientoImg ${
                                index === 1 ? 'top-right' : index === 3 ? 'bottom-right' : ''
                            }`
                        }
                        skeletonClassName={`${
                                index === 1 ? 'top-right' : index === 3 ? 'bottom-right' : ''
                            }`}
                    />
                ))
            }
            </div>
        </section>   
    )
}

export default Gallery

/*
<img
                        src={linkAImagen}
                        key={index}
                        alt={`Imagen adicional ${index + 1}`}
                        className={
                            `smallAlojamientoImg ${
                                index === 1 ? 'top-right' : index === 3 ? 'bottom-right' : ''
                            }`
                        }
                    />


*/