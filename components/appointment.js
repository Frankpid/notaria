import React, { useState } from 'react'
import Link from "next/link"

const Appointment = (props) => {
    return (
        <div className="section appointment" style={{ backgroundImage: `url("../../img/appointment-2.jpg")` }}>        
            
            <div className="caption caption-type-1 container-fluid wrapper-fluid equal-margin-1">
                <div className="col-sm-10 col-md-5">
                    <div className="parent-title-2">
                        <h2>Agenda tu cita desde <br /><strong>nuestra plataforma online</strong></h2>
                    </div>
                    <p className="description">Ahora puedes reservar tu cita previa online en unos pocos clics. Lo único que tendrás que hacer, es rellenar el siguiente formulario y esperar la confirmación.</p>
                    <Link href="/contacto">
                        <a className="button-link">Reservar cita</a>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Appointment