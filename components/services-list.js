import React, { useState } from 'react'
import Slider from "react-slick"
import Link from "next/link"
import ServiceListItem from "./services-list-item"


const ServiceList = (props) => {
    
    const [dataService, setDataService] = useState([
        {
            titleCat: "Escritura pública",            
            linkCat: '#',
            data: [
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                },
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                },
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                },
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                },
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                }
            ]
        },
        {
            titleCat: "Asuntos no contenciosos",            
            linkCat: '#',
            data: [
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                },
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                },
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                },
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                },
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                }
            ]
        },
        {
            titleCat: "Instrumentos Extraprotocolares",            
            linkCat: '#',
            data: [
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                },
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                },
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                },
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
                },
                {
                    title: ['<h2>Escritura pública</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: '#'
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
                            return <ServiceListItem key={index2} data={itemInner} />
                        })                        
                    }                    
                </Slider>
            </div>            
        </div>
    })


    return (
        <div className="section services-list list-type-1"> 
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