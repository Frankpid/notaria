import React, { useState } from 'react'
import Link from "next/link"
import Config from "../config"

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
                        </div>

                        <div className="list-accounts">


                            <div className="payment-method-form">                                

                                <div className="pmf-item pmf-item-1">
                                    <img src={Config.URL + "/img/bcp.png?v=2"} alt={'Banco de credito'} />
                                    <div>
                                        <p><strong>Cuenta para pagos notariales</strong> <br/>a nombre de <strong>Manuel Alipio Roman Olivas Banco</strong></p>
                                        <p>Cuenta corriente  / Soles / Banco de credito BCP</p>
                                    </div>
                                </div>

                                <div className="parent-list">
                                    <ul>
                                        <li>
                                            <span>Numero de cuenta:</span>
                                            <strong>191-1933343-0-16</strong>
                                        </li>
                                        <li>
                                            <span>Codigo de cuenta interbancario:</span>
                                            <strong>CCI : 002-191-001933343016-53</strong>
                                        </li>
                                        <li>
                                            <span>Numero de detraccion:</span>
                                            <strong>00098075445</strong>
                                        </li>
                                    </ul>
                                </div>


                                <div className="pmf-item pmf-item-2">
                                    <img src={Config.URL + "/img/bcp.png?v=2"} alt={'Banco de credito'} />
                                    <div>
                                        <p><strong>Cuenta para pagos a registros públicos</strong> <br/>a nombre de <strong>Manuel Alipio Roman Olivas Banco</strong></p>
                                        <p>Cuenta corriente  / Soles / Banco de credito BCP</p>
                                    </div>
                                </div>

                                <div className="parent-list">
                                    <ul>
                                        <li>
                                            <span>Numero de cuenta:</span>
                                            <strong>191-21358080-016</strong>
                                        </li>
                                        <li>
                                            <span>Codigo de cuenta interbancario:</span>
                                            <strong>CCI : 002-191-12135808001655</strong>
                                        </li>
                                    </ul>
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