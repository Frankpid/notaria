import React, { useState } from 'react'
import Slider from "react-slick"
import Link from "next/link"
import FormalitiesListItem from "./formalities-list-item"


const FortilitiesList = (props) => {

    const [dataFormalities, setDataFormalities] = useState([
        {
            title: 'Autorización de viaje',
            description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
            link: 'autorizacion-de-viaje'
        },
        {
            title: 'Constitución de empresas',
            description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
            link: 'constitucion-de-empresas'
        },
        {
            title: 'Poderes',
            description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
            link: 'poderes'
        },
        {
            title: 'Transferencias inmobiliarias',
            description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
            link: 'transferencias-inmobiliarias'
        },
        {
            title: 'Transferencias vehiculares',
            description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
            link: 'transferencias-vehiculares'
        }        
    ]) 


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    const dataList = dataFormalities.map((item, index)=>{
        return <FormalitiesListItem key={index} data={item} />
    })


    return (
        <div className="section formalities-list list-type-1"> 
            <div className="container-fluid wrapper-fluid">
                <div className="box">

                    <div className="parent-title">
                        <h2 className="title">
                            Pensando en nuestros clientes, <br /> 
                            habilitamos nuestros <strong>trámites en línea</strong>                    
                        </h2>
                    </div>

                    <div className="slideshow-formalities slideshow-type-1">
                        <Slider {...settings}>
                            {dataList}
                        </Slider>
                    </div>
                    
                    <Link href="/tramites-en-linea/autorizacion-de-viaje">
                        <a className="btn-formalities">Ver todos los trámites en línea</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FortilitiesList