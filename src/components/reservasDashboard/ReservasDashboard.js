import "./ReservaDashboard.css"

const ReservasDashboard = ({title, reservas, action, actionName, condicion}) =>{
    return(
        <div>
            <h2>{title}</h2>
            {
                reservas.length === 0 
                ? <p>No tenés reservas aún.</p>
                : <ul className="reservasList">
                    {
                        reservas.map((reserva) => (
                            <li key={reserva.id} className="reservaCard">
                                <div className="reservaInfo">
                                    <h2>{reserva.alojamiento.nombre}</h2>
                                    <p>Check-in: {reserva.checkIn}</p>
                                    <p>Check-out: {reserva.checkOut}</p>
                                    <p>Estado: {reserva.estado}</p>
                                    <p>Total: ${reserva.total}</p>  
                                    <button name={reserva.id} disabled={condicion(reserva.estado)} onClick={action}>{actionName}</button>
                                </div>
                            </li>
                        ))
                    }
                  </ul>
            }
        </div>
    )
}

export default ReservasDashboard