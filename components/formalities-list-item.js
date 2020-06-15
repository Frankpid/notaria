import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Slider from "react-slick"
import Link from "next/link"
import Config from "../config"

const FortilitiesListItem = (props) =>{        
    return (
        <div className="slick-item">                                 
            <div className="caption">
                <div>                                        
                    <div className="parent-title-2">
                        <img src={Config.URL + "/img/icons/formalities.png?v=2"} alt={props.data.description} />                        
                        <h2><strong>{props.data.title}</strong></h2>
                    </div>
                    <p className="description">{props.data.description}</p>
                    <Link href={'tramites-en-linea/' + props.data.link}>
                        <a className="button-link">Solicitar servicio</a>
                    </Link>                    
                </div>
            </div>
        </div>
    )
}

export default FortilitiesListItem