import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Slider from "react-slick"
import Link from "next/link"
import Config from "../config"

const ServiceListItem = (props) => { 
        
    const img = props.data.img_preview.length>2 ? JSON.parse(props.data.img_preview)[0] : ''
    const folder = props.data.folder

    return (              
        <div className={props.class}> 
            <div className="wrapper-children">
                <Link href={props.link}>
                    <a>
                        {img.length>0 && (
                            <img src={Config.URL_BACK + "/uploads/" + folder + "/" + img + "?v=2"} alt={props.data.description} />
                        )}
                    </a>
                </Link>
                <div className="caption">
                    <div>                                        
                        <div className="parent-title-2"><h2>{props.data.title}</h2></div>
                        <p className="description">{props.data.description}</p>
                        <Link href={props.link}>
                            <a className="button-link">Solicitar servicio</a>
                        </Link>
                    </div>
                </div>
            </div>                                
        </div>
    )
}

export default ServiceListItem