import React, { useState } from 'react'
import Slider from "react-slick"
import Link from "next/link"
import ServiceListItem from "./services-list-item"


const ServiceList = (props) => {
    
    const [dataService, setDataService] = useState([
        {
            titleCat: "Instrumentos protocolares",            
            linkCat: 'instrumentos-protocolares',
            data: [
                {
                    title: ['Instrumentos Protocolares 1'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-protocolares-1'
                },
                {
                    title: ['Instrumentos Protocolares 2'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-protocolares-2'
                },
                {
                    title: ['Instrumentos Protocolares 3'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-protocolares-3'
                },
                {
                    title: ['Instrumentos Protocolares 4'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-protocolares-4'
                },
                {
                    title: ['Instrumentos Protocolares 5'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-protocolares-5'
                },
                {
                    title: ['Instrumentos Protocolares 6'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-protocolares-6'
                }
            ]
        },
        {
            titleCat: "Asuntos no contenciosos",            
            linkCat: 'asuntos-no-contenciosos',
            data: [
                {
                    title: ['Asuntos no contenciosos 1'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'asuntos-no-contenciosos-1'
                },
                {
                    title: ['Asuntos no contenciosos 2'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'asuntos-no-contenciosos-2'
                },
                {
                    title: ['Asuntos no contenciosos 3'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'asuntos-no-contenciosos-3'
                },
                {
                    title: ['Asuntos no contenciosos 4'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'asuntos-no-contenciosos-4'
                },
                {
                    title: ['Asuntos no contenciosos 5'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'asuntos-no-contenciosos-5'
                },
                {
                    title: ['Asuntos no contenciosos 6'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'asuntos-no-contenciosos-6'
                }
            ]
        },
        {
            titleCat: "Instrumentos extra protocolares",            
            linkCat: 'instrumentos-extra-protocolares',
            data: [
                {
                    title: ['Instrumentos Extra Protocolares 1'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-extra-protocolares-1'
                },
                {
                    title: ['Instrumentos Extra Protocolares 2'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-extra-protocolares-2'
                },
                {
                    title: ['Instrumentos Extra Protocolares 3'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-extra-protocolares-3'
                },
                {
                    title: ['Instrumentos Extra Protocolares 4'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-extra-protocolares-4'
                },
                {
                    title: ['Instrumentos Extra Protocolares 5'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-extra-protocolares-5'
                },
                {
                    title: ['Instrumentos Extra Protocolares 6'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-extra-protocolares-6'
                }
            ]
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


    const dataCatList = dataService.map((item, index) => {
        return <div className="box-cat">
            <h2 className="title-cat">{item.titleCat}</h2>
            <div className="slideshow-services slideshow-type-1">
                <Slider key={index} {...settings}>
                    { 
                        item.data.map((itemInner, index2) => {
                            return <ServiceListItem key={index2} data={itemInner} link={'/servicios/' + item.linkCat + '/' + itemInner.linkCat} class={"slick-item"} />
                        })                        
                    }                    
                </Slider>
            </div>            
        </div>
    })


    return (
        <div className="section services-list list-type-1 services-list-style-1"> 
            <div className="container-fluid wrapper-fluid">
                <div className="box">

                    <div className="parent-title">
                        <h2 className="title">
                            <strong>Servicios</strong> <br /> 
                            Somos confiables, profesionales, experimentados y estamos aquí para ayudarte.
                        </h2>
                    </div>
                    
                    {dataCatList}
                    
                    <Link href="/tramites-en-linea">
                        <a className="btn-formalities">Ver todos los trámites en línea</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceList