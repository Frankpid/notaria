import React, { useState } from 'react'

const Accounts = (props) => {
    return (
        <div className="section accounts">                    
            <div className="row">

                <div className="item-1 col-sm-12 col-md-6">
                    <div className="col-md-offset-1 col-lg-offset-4 caption caption-type-1 equal-margin-1">
                        <div className="col-sm-10 col-md-10">
                            <div className="parent-title-2">
                                <h2><strong>Nuestras cuentas</strong></h2>
                            </div>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                        </div>

                        <div className="list-accounts">
                            <div className="item">
                                <img src="./img/bcp.png?v=2" alt="bcp" /> 
                                <div className="wrapper-account">
                                    <p>19429516317060</p>
                                    <p>CCI: 00219412951631706093</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="./img/bbva.png?v=2" alt="bcp" /> 
                                <div className="wrapper-account">
                                    <p>19429516317060</p>
                                    <p>CCI: 00219412951631706093</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="./img/interbank.png?v=2" alt="bcp" /> 
                                <div className="wrapper-account">
                                    <p>19429516317060</p>
                                    <p>CCI: 00219412951631706093</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="item-2 col-sm-12 col-md-6">
                    <div className="caption caption-type-1 equal-margin-1">
                        <div className="col-sm-8 col-md-6">
                            <div className="parent-title-2">
                                <h2><strong>Tu empresa en <br/>72 horas</strong></h2>
                            </div>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five .</p>
                            <a className="button-link" href="#">Solicitar servicio</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Accounts