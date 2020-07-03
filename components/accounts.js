import React, { useState } from 'react'
import Link from "next/link"

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
                            <p className="description">Es un proceso sencillo que aprovecha las ventajas del mundo digital para acelerar la constitución de tu empresa. Llena nuestro formulario online y uno de nuestros asesores se pondrá en contacto contigo para explicarte los pasos a seguir y nuestra notaria se encarga de hacer la escritura pública de tu empresa.</p>                            
                            <Link href="/tramites-en-linea/constitucion-de-empresas">
                                <a className="button-link">Solicitar servicio</a>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Accounts