import React, { useState } from 'react'
import Slider from "react-slick"

const Slideshow = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="slideshow-main">
            <Slider {...settings}>

                <div className="slick-item"> 
                    <div className="img" style={{ backgroundImage: `url("../../img/banner.jpg")` }}></div>
                    <div className="caption caption-type-1 container-fluid wrapper-fluid flex center-xs">
                        <div className="col-xs-10 col-sm-10 col-md-10">
                            <h3 className="title-1">Servicios en linea</h3>
                            <div className="parent-title-2">
                                <h2>¿Constitución de empresa <br /><strong>sin salir de casa?</strong></h2>
                            </div>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                            <a className="button-link" href="#">Solicitar servicio</a>
                        </div>
                    </div>
                </div>

                <div className="slick-item">
                    <div className="img" style={{ backgroundImage: `url("../../img/banner.jpg")` }}></div>
                    <div className="caption caption-type-1 container-fluid wrapper-fluid flex center-xs">
                        <div className="col-xs-10 col-sm-10 col-md-10">
                            <h3 className="title-1">Servicios en linea</h3>
                            <div className="parent-title-2">
                                <h2>¿Constitución de empresa <br /><strong>sin salir de casa?</strong></h2>
                            </div>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                            <a className="button-link" href="#">Solicitar servicio</a>
                        </div>
                    </div>
                </div>

                <div className="slick-item">
                    <div className="img" style={{ backgroundImage: `url("../../img/banner.jpg")` }}></div>
                    <div className="caption caption-type-1 container-fluid wrapper-fluid flex center-xs">
                        <div className="col-xs-10 col-sm-10 col-md-10">
                            <h3 className="title-1">Servicios en linea</h3>
                            <div className="parent-title-2">
                                <h2>¿Constitución de empresa <br /><strong>sin salir de casa?</strong></h2>
                            </div>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                            <a className="button-link" href="#">Solicitar servicio</a>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default Slideshow