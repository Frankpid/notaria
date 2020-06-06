import React, {useEffect, useState} from 'react'
import Container from "../components/container"
import MissionVision from "../components/nuestra-notaria/mission-vision"
import OurValues from "../components/nuestra-notaria/our-values"
import BreadCrumb from "../components/breadcrumb"


const OurNotary = () => {


    return (
        <Container namePage="nuestra-notaria margins-body-type-1" titlePage="Nuestra Notaria"> 

            <BreadCrumb />

            <div className="section snt-1">
                <div className="container-fluid wrapper-fluid">
                    <div className="row">
                        <div className="caption caption-static caption-type-1 caption-type-2 container-fluid wrapper-fluid">
                            <div className="parent-title-2 center-xs">
                                <h2>Somos la Notaría <strong>Román</strong> <br />Con más de 9 años de reconocida trayectoria</h2>
                            </div>
                            <img className="caption-img" src="../../img/notaria-roman-place.jpg?v=1" alt="Notaria roman" />
                            <p className="description">Nuestro principal objetivo es brindar  la excelencia en la atención y seguridad jurídica en los trámites realizados, garantizando una actuación notarial honesta, integra y comprometida en el logro de los fines previstos en la ley.  Para ello nuestro oficio notarial cuenta con profesionales de alto nivel de experiencia, infrestructura y desarrollo tecnológico de primer nivel </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section snt-2">
                <div className="container-fluid wrapper-fluid">
                    <div className="row end-xs">
                        <div className="caption caption-static caption-type-1 caption-type-2 col-md-6 start-xs equal-margin-1">
                            <div className="parent-title-2">
                                <h2><strong>Manuel A. Román Olivas</strong> <br />Notario</h2>
                            </div>                            
                            <p className="description">"Les doy la bienvenida a nuestra Notaria. Es un placer para nosotros atenderlos  de manera física y virtual con la  con la misma dedicación y esmero profesional.  Nuestra razon de ser  será siempre brindarles el mejor servicio en el mas corto tiempo, cuidando y enmarcando todas nuestras acciones dentro de la ley, para finalmente brindarles la seguridad juridica que necesitan desde la comodidad de su casa o en nuestras oficinas" .</p>
                        </div>
                    </div>
                </div>
            </div>

            <MissionVision />
            <OurValues />
        </Container>
    )
}


export default OurNotary