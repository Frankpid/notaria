import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Slider from "react-slick"
import Link from "next/link"
import Config from "../config"

const ServiceListItem = (props) => {        
    return (              
        <div className={props.class}> 
            <div className="wrapper-children">
                <img src={Config.URL + "/img/service-img.jpg?v=2"} alt={props.data.description} />
                <div className="caption">
                    <div>                                        
                        <div className="parent-title-2">                                             
                            {ReactHtmlParser(props.data.title)}
                        </div>
                        <p className="description">{props.data.description}</p>
                        <a className="button-link" href={props.link}>Solicitar servicio</a>
                    </div>
                </div>
            </div>                                
        </div>
    )
}

export default ServiceListItem