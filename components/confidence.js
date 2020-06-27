import React, { useState } from 'react'
import Slider from "react-slick"

const Confidence = (props) =>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true
    }

    return (
        <div className="section confidence">
            <div className="container-fluid wrapper-fluid">
                <div className="row row-main">
                    <div className="slideshow-confidence">
                        <Slider {...settings}>
                            { 
                                props.data && props.data.map((item, index) => {                            
                                    return <div key={index} className="slick-item">                                 
                                        <div className="caption caption-type-1 container-fluid wrapper-fluid">
                                            <div className="center-xs col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
                                                <img src="../../img/hands-together.png?v=1" alt="Confianza" />
                                                <h3 className="title-1">Ellos confiaron en nosotros</h3>

                                                <div className="row middle-xs parent-description do-vertical-line">
                                                    <div className="col-md-6">
                                                        <div className="parent-title-2">
                                                            <h2><strong>{item.nombre}</strong></h2>
                                                            <h3>{item.profesion}</h3>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <p className="description">{item.descripcion}</p>                                        
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confidence