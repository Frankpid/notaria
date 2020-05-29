import React, { useState } from 'react'

const Appointment = (props) => {
    return (
        <div className="section appointment" style={{ backgroundImage: `url("../../img/appointment-2.jpg")` }}>        
            
            <div className="caption caption-type-1 container-fluid wrapper-fluid">
                <div className="col-sm-10 col-md-5">
                    <div className="parent-title-2">
                        <h2>Agenda tu cita desde <br /><strong>nuestra plataforma online</strong></h2>
                    </div>
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    <a className="button-link" href="#">Reservar cita</a>
                </div>
            </div>
            
        </div>
    )
}

export default Appointment