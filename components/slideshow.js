import React, { useState } from 'react'
import Slider from "react-slick"
import Link from "next/link"
import ReactHtmlParser from 'react-html-parser'
import Config from "../config"

const Slideshow = (props) => {
    //console.log(props)

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
                {props.data.map((item, index) => {
                    const img = item.object_img.length>2 ? item.folder_name + '/' + JSON.parse(item.object_img)[0] : ''
                    return <div key={index} className="slick-item"> 
                        <div className="img" style={{ backgroundImage: `url(${Config.URL_BACK + '/uploads/'+ img})` }}></div>
                        <div className="caption caption-type-1 container-fluid wrapper-fluid flex center-xs">
                            <div className="col-xs-10 col-sm-10 col-md-10">
                                <h3 className="title-1">{item.tipo_servicio}</h3>
                                <div className="parent-title-2">
                                    {ReactHtmlParser(item.object_titulo)}
                                </div>
                                <p className="description">{item.descripcion}</p>
                                <Link href={item.button_link}>
                                    <a className="button-link">{item.button_name}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                })}                
            </Slider>
        </div>
    )
}

export default Slideshow