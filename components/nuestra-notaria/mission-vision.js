import React, { useState } from 'react'

const Accounts = ({mision, vision}) => {
    return (
        <div className="section mission-vision">                    
            <div className="row">

                <div className="item-1 col-sm-12 col-md-6 with-bg-img" style={{ backgroundImage: `url("../../img/mission.jpg?v=1")` }}>
                    <div className="col-md-offset-1 col-lg-offset-3 caption caption-type-1 equal-margin-1 caption-static">
                        <div className="col-sm-8 col-md-10">
                            <div className="parent-title-2">
                                <h2>Nuestra <strong>misión</strong></h2>
                            </div>
                            <p className="description">{mision}</p>                            
                        </div>
                    </div>
                </div>


                <div className="item-2 col-sm-12 col-md-6 with-bg-img" style={{ backgroundImage: `url("../../img/vision.jpg?v=1")` }}>
                    <div className="caption caption-type-1 col-lg-offset-1 equal-margin-1 caption-static">
                        <div className="col-sm-8 col-md-9">
                            <div className="parent-title-2">
                                <h2>Nuestra <strong>visión</strong></h2>
                            </div>
                            <p className="description">{vision}</p>                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Accounts