import React, { useState } from 'react'
import Slider from "react-slick"

const OurValues = (props) =>{

    return (
        <div className="section our-values">
            <div className="container-fluid wrapper-fluid caption-type-1 caption-type-2 caption-static">
                <div className="parent-title-2 center-xs">
                    <h2>Nuestros <strong>valores</strong></h2>
                </div>
                <div className="row row-main center-xs row-type-1">                    
                    <div className="col-md-10 flex between-md bottom-xs data">
                        <div className="col-sm-6 col-md-3 center-xs col-xs-12">
                            <div className="wrapper-children">
                                <img src="../../img/our-values/honesty.png?v=1" alt="Honestidad" />
                                <h3 className="title">Honestidad</h3>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 center-xs col-xs-12">
                            <div className="wrapper-children">
                                <img src="../../img/our-values/transparency.png?v=1" alt="Transparencia" />
                                <h3 className="title">Transparencia</h3>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 center-xs col-xs-12">
                            <div className="wrapper-children">
                                <img src="../../img/our-values/rigurosity.png?v=1" alt="Rigurosidad" />
                                <h3 className="title">Rigurosidad</h3>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 center-xs col-xs-12">
                            <div className="wrapper-children">
                                <img src="../../img/our-values/humanity.png?v=1" alt="Humanidad" />
                                <h3 className="title">Humanidad</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurValues