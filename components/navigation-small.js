import Link from "next/link"

const Navigation = () =>{
    return (
        <div className="nav-small">
            <Link href="/reserva-de-citas">
                <a className="btn-reserve">Reserva de citas</a>
            </Link>                    
            <a className="btn-fb" href="https://facebook.com" target="_blank">Facebook</a>
        </div>
    )
}

export default Navigation