import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Slider from "react-slick"
import Link from "next/link"

const ServiceListItem = (props) => {        
    return (              
        <div className="slick-item">                                 
            <img src="./img/service-img.jpg?v=2" alt={props.data.description} />
            <div className="caption">
                <div>                                        
                    <div className="parent-title-2">                                             
                        {ReactHtmlParser(props.data.title)}
                    </div>
                    <p className="description">{props.data.description}</p>
                    <a className="button-link" href={props.data.link}>Solicitar servicio</a>
                </div>
            </div>
        </div>
    )
}

export default ServiceListItem