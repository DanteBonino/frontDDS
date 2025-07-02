import { useEffect, useState } from "react";
import ConstantFooter from "../../../components/footers/constantFooter/ConstantFooter"
import BrandedNavbar from "../../../components/navbars/genericNavbar/genericNavbar"
import "./MisReservas.css"
import Skeleton from "@mui/material/Skeleton";
import ReservasDashboard from "../../../components/reservasDashboard/ReservasDashboard";

const MisReservas = () => {
    const [reservas, setReservas] = useState([]);
    const [loading, setLoading] = useState(true);

    function cancelar(){

    }

    function confirmar(){
        alert("osa")
    }

    function esHost(_alguien){
        return true
    }

    useEffect(() => {
        // Simulá fetch al backend:
        setTimeout(() => {
            setReservas([
                {
                    id: "res1",
                    alojamiento: { nombre: "Depto en Palermo", imagen: "/img1.jpg" },
                    checkIn: "2025-07-10",
                    checkOut: "2025-07-15",
                    estado: "Confirmada",
                    total: 75000,
                },
                {
                    id: "res2",
                    alojamiento: { nombre: "Cabaña en Bariloche", imagen: "/img2.jpg" },
                    checkIn: "2025-08-01",
                    checkOut: "2025-08-05",
                    estado: "Pendiente",
                    total: 120000,
                },
            ]);
            setLoading(false);
            }, 1000);
    }, []);

     if (loading) return <p>Cargando tus reservas...</p>;

    return(
        <div id="root">
            <BrandedNavbar pageClassname="alojamientoPage">
                <a href='/' id='brand' className="remain"> Birbnb </a>
            </BrandedNavbar>
            <main className="alojamientoPage">
                <section>
                    <ReservasDashboard actionName={"Cancelar"} action={cancelar} title={"Mis reservas"} condicion={(unEstado) => unEstado.toUpperCase() == "CANCELADA"} reservas={reservas}/>
                </section>
                {
                    esHost("usuario") &&
                    <section>
                        <ReservasDashboard actionName={"Confirmar"} action={confirmar} title={"Reservas de mis alojamientos"} condicion={(unEstado) => unEstado.toUpperCase() != "PENDIENTE"} reservas={reservas} />
                    </section>
                }
            </main>
            <ConstantFooter pageClassname={"alojamientoPage"}/>
        </div>
    )
}

export default MisReservas