import React, { useState } from 'react'
import Slider from "react-slick"


const ListTeam = (props) => {
    console.log(props)

    const [listTeam, setListTeam] = useState(props.data)

    return (
        <div className="section list-team">
            <div className="container-fluid wrapper-fluid caption-type-1 caption-type-2 caption-static">
                <div className="parent-title-2 center-xs">
                    <h2>El <strong>trabajo en equipo</strong> es la capacidad de unir fuerzas <br/>hacia un mismo objetivo</h2>
                </div>

                <div className="row row-main center-xs row-type-2">                    
                    <div className="col-md-12 flex start-md bottom-xs data">

                        { 
                            listTeam && (listTeam.map((item, index)=>{
                                return <div key={index} className="col-sm-6 col-md-3 center-xs col-xs-12">
                                        <div className="wrapper-children">
                                            <div className="group-title-type-1 start-xs">
                                                <h2>{item.nombre}</h2>
                                                <h3>{item.profesion}</h3>
                                            </div>
            
                                            <div className="list-type-2 start-xs">
                                                <a>
                                                    <i className="icons icon-phone-2"></i>
                                                    <span>Anexo:{item.anexo}</span>
                                                </a>
            
                                                <a href="mailto:jramose@notariaroman.pe">
                                                    <i className="icons icon-mail-2"></i>
                                                    <span>{item.email}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            }))
                        }                        
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ListTeam