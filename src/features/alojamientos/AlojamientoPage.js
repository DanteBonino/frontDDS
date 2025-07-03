import { useLocation, useNavigate, useParams } from "react-router-dom"
import ConstantFooter from "../../components/footers/constantFooter/ConstantFooter"
import Footer from "../../components/footers/footer/Footer"
import GoBackNavbar from "../../components/navbars/goBackNavbar/GoBackNavbar"
import Navbar from "../../components/navbars/searchNavBar/Navbar"
import "./AlojamientoPage.css"
import { useEffect, useState } from "react"
import {BounceLoader} from "react-spinners"
import Loader from "../../components/loader/Loader"
import Gallery from "../../components/gallery/Gallery"
import OwnerCard from "../../components/ownerCard/OwnerCard"
import { caracteristicas } from "../../components/Modals/FilterModal/FilterModal"
import { cantidadDeNochesComoStrings, capitalise, caracteristicasDictionary, createCssClass, rojo, showTextSegun } from "../../utils/utils"
import CustomDayPicker from "../../components/daypicker/DayPicker"
import { DayPicker } from "react-day-picker"
import 'react-day-picker/dist/style.css';
import ReservaBox, { estanElegidasLasFechas } from "../../components/reservaBox/ReservaBox"
import { useFilters } from "../../contexts/filterContext/FilterContext"
import { mostrarTextoFechas } from "../../components/navbars/searchNavBar/components/MainSearchButton"
import useScreenSize from "../../hooks/useWindowsSize"
import useIsMobile from "../../hooks/useIsMobile"
import CompleteStepper from "../../components/inputs/stepper/CompleteStepper"
import Slider from "../../components/slider/Slider"
import { useLoader } from "../../contexts/loaderContext/LoaderContext"
import useSetUrlParams from "../../hooks/useSetUrlParams"


const Alojamiento = () => {
  const { id } = useParams();
  const [alojamiento, setAlojamiento] = useState(null);
  const [loading, setLoading]=useState(true);
  const [error, setError] = useState(null);
  const { filters, clearFilters } = useFilters()
  const noches = cantidadDeNochesComoStrings(filters.fechaInicial, filters.fechaFinal)
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile(800);
  const setParams = useSetUrlParams();

  function setDates(fechaInicial, fechaFinal){
    setParams({fechaInicial,fechaFinal})
  }

  

  function deleteParams(unosParametros){
    const params = new URLSearchParams(location.search);
    unosParametros.forEach(p => params.delete(p));
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  }

  useEffect(() => {
    const mockFetchAlojamiento = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          nombre: `Alojamiento de prueba #${id}`,
          descripcion: "Integer consequat sapien quis sem mollis, in laoreet lectus pellentesque. Sed a laoreet sem. Vivamus bibendum nisl ipsum, ullamcorper vulputate metus lacinia quis. Morbi malesuada suscipit quam id porta. Vivamus a lectus at ante finibus mattis. Nam pharetra in lacus et fringilla. Cras id odio lorem. Nulla facilisi. Pellentesque sed aliquam lacus. Integer vitae nunc tincidunt mauris malesuada faucibus. Ut magna urna, sollicitudin interdum dui ut, dignissim luctus sem. Maecenas eros nisi, eleifend id fermentum sit amet, ullamcorper sit amet.Integer consequat sapien quis sem mollis, in laoreet lectus pellentesque. Sed a laoreet sem. Vivamus bibendum nisl ipsum, ullamcorper vulputate metus lacinia quis. Morbi malesuada suscipit quam id porta. Vivamus a lectus at ante finibus mattis. Nam pharetra in lacus et fringilla. Cras id odio lorem. Nulla facilisi. Pellentesque sed aliquam lacus. Integer vitae nunc tincidunt mauris malesuada faucibus. Ut magna urna, sollicitudin interdum dui ut, dignissim luctus sem. Maecenas eros nisi, eleifend id fermentum sit amet, ullamcorper sit amet.Integer consequat sapien quis sem mollis, in laoreet lectus pellentesque. Sed a laoreet sem. Vivamus bibendum nisl ipsum, ullamcorper vulputate metus lacinia quis. Morbi malesuada suscipit quam id porta. Vivamus a lectus at ante finibus mattis. Nam pharetra in lacus et fringilla. Cras id odio lorem. Nulla facilisi. Pellentesque sed aliquam lacus. Integer vitae nunc tincidunt mauris malesuada faucibus. Ut magna urna, sollicitudin interdum dui ut, dignissim luctus sem. Maecenas eros nisi, eleifend id fermentum sit amet, ullamcorper sit amet.Integer consequat sapien quis sem mollis, in laoreet lectus pellentesque. Sed a laoreet sem. Vivamus bibendum nisl ipsum, ullamcorper vulputate metus lacinia quis. Morbi malesuada suscipit quam id porta. Vivamus a lectus at ante finibus mattis. Nam pharetra in lacus et fringilla. Cras id odio lorem. Nulla facilisi. Pellentesque sed aliquam lacus. Integer vitae nunc tincidunt mauris malesuada faucibus. Ut magna urna, sollicitudin interdum dui ut, dignissim luctus sem. Maecenas eros nisi, eleifend id fermentum sit amet, ullamcorper sit amet.Integer consequat sapien quis sem mollis, in laoreet lectus pellentesque. Sed a laoreet sem. Vivamus bibendum nisl ipsum, ullamcorper vulputate metus lacinia quis. Morbi malesuada suscipit quam id porta. Vivamus a lectus at ante finibus mattis. Nam pharetra in lacus et fringilla. Cras id odio lorem. Nulla facilisi. Pellentesque sed aliquam lacus. Integer vitae nunc tincidunt mauris malesuada faucibus. Ut magna urna, sollicitudin interdum dui ut, dignissim luctus sem. Maecenas eros nisi, eleifend id fermentum sit amet, ullamcorper sit amet.",
          direccion: "Calle Falsa 123",
          precioPorNoche: 45000,
          imagenes:[
            "https://picsum.photos/seed/slide1/800/600",
            "https://picsum.photos/seed/slide2/800/600",
            "https://picsum.photos/seed/slide3/800/600",
            "https://picsum.photos/seed/slide4/800/600",
            "https://picsum.photos/seed/slide5/800/600"
          ],
          huespedes: 10,
          anfitrion: {
            nombre: "Dante"
          },
          caracteristicas:[
            "WIFI",
            "PISCINA",
            "MASCOTAS PERMITIDAS",
            "ESTACIONAMIENTO",
            "WIFI",
            "PISCINA",
            "MASCOTAS PERMITIDAS",
            "ESTACIONAMIENTO",
          ]
        });
      }, 2500); // 1 segundo de delay simulado
    });
    mockFetchAlojamiento
      .then((data) => {
        setAlojamiento(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Error simulando la carga del alojamiento");
      })
      .finally(()=>{
        setLoading(false)
      })
  }, [id]);



    return (
        <div id="root">
            <GoBackNavbar/>
            {
              !loading &&
                <div className="alojamientoImages">
                  <Slider roundedCorners={false} slides={alojamiento.imagenes}/>
                </div>
            }
            <main className="alojamientoPage page">
                {
                    loading &&
                        <Loader loader={<BounceLoader color={rojo} />}/>
                }
                {
                    !loading &&
                    <>
                        <h1 className="title">{alojamiento.nombre}</h1>

                        { !isMobile &&
                          <Gallery imagenes={alojamiento.imagenes.slice(1,5)}/>
                        } 

                        <section className="stickySection">
                          <div className="nonStickyPart">
                            <section className={"placeAndOwnerInfo informacion"}>
                            <h2>
                              Alojamiento en Buenos Aires
                            </h2>
                            <h4>
                              {alojamiento.huespedes} huéspedes 
                            </h4> 
                            <OwnerCard owner={alojamiento.anfitrion}/>
                          </section>

                          <section className={"descripcion informacion"}>
                          <p>
                            {
                              alojamiento.descripcion
                            }
                          </p>
                          </section>

                          <section className={"caracteristicas informacion"}>
                            <h2>¿Qué ofrece este lugar?</h2>
                            <div className="caracteristicasContainer">
                            {
                              alojamiento.caracteristicas.slice(0,4).map((caracteristica, indice) => 
                                  <div key={indice} className="caracteristica">
                                    {caracteristicasDictionary[caracteristica]}
                                    {capitalise(caracteristica)}
                                  </div>
                              )
                            }
                            </div>
                          </section>
                      
                          <section id="calendario" className={createCssClass("calendario", isMobile ? "informacion" : "")}>
                            <h2>
                              {
                                showTextSegun(estanElegidasLasFechas(filters), `${noches} noches en Buenos Aires `, "Seleccioná las fechas de la reserva")
                              }
                            </h2>
                            <div style={{height: "20px"}}>
                            {
                              showTextSegun(estanElegidasLasFechas(filters),mostrarTextoFechas(filters.fechaInicial, filters.fechaFinal), "")
                            }
                            </div>
                            <CustomDayPicker handleFiltersChange={setDates}/>
                            <button className="resetDates" onClick={()=>{deleteParams(["fechaInicial", "fechaFinal"])}}>Borrar fechas</button>
                          </section>

                          {
                            isMobile &&
                            <section className="huespedes">
                              <h2>
                                ¿Cuántos huéspedes?
                              </h2>
                              <CompleteStepper cotaInferior={1} cotaSuperior={alojamiento.huespedes} cotaSuperiorEstricta={true}/>
                            </section>
                          }
                        
                          </div>
                          <div className="stickyElement">
                            <ReservaBox isSmall={isMobile} huespedes={alojamiento.huespedes} precioPorNoche={alojamiento.precioPorNoche}/>
                          </div>
                        </section>
                    </>
                    
                }
            </main>
            <ConstantFooter pageClassname={`alojamientoPage ${loading ? "": "marginBottom20"}`}/>
        </div>
    )
}

export default Alojamiento