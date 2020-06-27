import React, { useState } from 'react'
import Slider from "react-slick"
import Link from "next/link"
import ServiceListItem from "./services-list-item"


const ServiceList = (props) => {
    //console.log(props)
    
    const [dataService, setDataService] = useState(props.data)  

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
                    
                    <Link href="/servicios/todos">
                        <a className="btn-formalities">Ver todos los servicios</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default ServiceList