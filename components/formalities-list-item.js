import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Slider from "react-slick"
import Link from "next/link"

const FortilitiesListItem = (props) =>{        
    return (
        <div className="slick-item">                                 
            <div className="caption">
                <div>                                        
                    <div className="parent-title-2">
                        <img src="./img/icons/formalities.png?v=2" alt={props.data.description} />                        
                        {ReactHtmlParser(props.data.title)}
                    </div>
                    <p className="description">{props.data.description}</p>
                    <a className="button-link" href={props.data.link}>Solicitar servicio</a>
                </div>
            </div>
        </div>
    )
}

export default FortilitiesListItem