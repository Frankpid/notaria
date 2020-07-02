import Link from "next/link"

const Navigation = () =>{
    return (
        <div className="nav-small">
            <a className="btn-reserve" href="http://www.notariaroman.pe/reservas/" target="_blank">Reserva de citas</a>                 
            <a className="btn-fb" href="https://www.facebook.com/notariaroman/" target="_blank">Facebook</a>
        </div>
    )
}

export default Navigation