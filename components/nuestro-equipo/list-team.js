import React, { useState } from 'react'
import Slider from "react-slick"



const ListTeam = (props) => {


    const listItem = [1,2,3,4,5,6,7,8,9,10,11,12]


    return (
        <div className="section list-team">
            <div className="container-fluid wrapper-fluid caption-type-1 caption-type-2 caption-static">
                <div className="parent-title-2 center-xs">
                    <h2>El <strong>trabajo en equipo</strong> es la capacidad de unir fuerzas <br/>hacia un mismo objetivo</h2>
                </div>

                <div className="row row-main center-xs row-type-2">                    
                    <div className="col-md-12 flex between-md bottom-xs data">

                        { 
                            listItem.map((item, index)=>{
                                return <div className="col-sm-6 col-md-3 center-xs col-xs-12">
                                        <div className="wrapper-children">
                                            <div className="group-title-type-1 start-xs">
                                                <h2>Nombre Loren ipsum</h2>
                                                <h3>Abogado</h3>
                                            </div>
            
                                            <div className="list-type-2 start-xs">
                                                <a>
                                                    <i className="icons icon-phone-2"></i>
                                                    <span>Anexo:2034</span>
                                                </a>
            
                                                <a href="mailto:jramose@notariaroman.pe">
                                                    <i className="icons icon-mail-2"></i>
                                                    <span>jramose@notariaroman.pe</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            })
                        }                        
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ListTeam