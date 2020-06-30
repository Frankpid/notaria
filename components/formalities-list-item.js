import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Slider from "react-slick"
import Link from "next/link"
import Config from "../config"

const FortilitiesListItem = (props) =>{     
    
    const img = props.data.img.length>2 ? JSON.parse(props.data.img)[0] : ''
    const folder = props.data.folder

    return (
        <div className="slick-item">                                 
            <div className="caption">
                <div>                                        
                    <div className="parent-title-2">
                        <img style={{width: 38}} src={Config.URL_BACK + "/uploads/" + folder + "/" + img + "?v=2"} alt={props.data.description} />                        
                        <h2><strong>{props.data.title}</strong></h2>
                    </div>
                    <p className="description">{props.data.description}</p>
                    <Link href={'tramites-en-linea/' + props.data.link}>
                        <a className="button-link">Solicitar trámite</a>
                    </Link>                    
                </div>
            </div>
        </div>
    )
}

export default FortilitiesListItem