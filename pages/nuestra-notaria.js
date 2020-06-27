import React, {useEffect, useState} from 'react'
import Container from "../components/container"
import MissionVision from "../components/nuestra-notaria/mission-vision"
import OurValues from "../components/nuestra-notaria/our-values"
import BreadCrumb from "../components/breadcrumb"
import Config from "../config"
import axios from "axios"


const OurNotary = (props) => {

    const {nombre, link, descripcion, descripcion_mision, descripcion_vision, folder_name, object_img, object_img_rpv} = props.listNuestraNotaria[0]

    const img = object_img.length>2 ? JSON.parse(object_img)[0] : ''
    const img_rpv = object_img_rpv.length>2 ? JSON.parse(object_img_rpv)[0] : ''

    const cssImg = `
        .section.snt-2 {
            background-image: url(${Config.URL_BACK + '/uploads/' + folder_name + '/' + img})
        }
        @media (max-width: 630px){
            .section.snt-2 {
                background-image: url(${Config.URL_BACK + '/uploads/' + folder_name + '/' + img_rpv})
            }
        }        
    `

    return (
        <Container namePage="nuestra-notaria margins-body-type-1" titlePage="Nuestra Notaria"> 

            <BreadCrumb />

            <style>
                {cssImg}
            </style>

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
                                <h2><strong>{nombre}</strong> <br />Notario</h2>
                            </div>                            
                            <p className="description">{descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>

            <MissionVision mision={descripcion_mision} vision={descripcion_vision} />
            <OurValues />
        </Container>
    )
}


OurNotary.getInitialProps = async (ctx) => {
    const getNuestraNotaria = await axios(Config.API_PATH + '/nnria')
    return { 
        listNuestraNotaria: getNuestraNotaria.data.listNnria
    }
}


export default OurNotary