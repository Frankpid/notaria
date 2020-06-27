import React, {useEffect, useState} from 'react'
import Link from "next/link"
import Config from "../config"

const FormPayment = (props) => {

    return (
    
        <div className="payment-method-form">
            <div className="form-text-line">Método de pago:</div>
            <p style={{marginTop: 10}}>El costo de este trámite es de <strong>s/. 0.00 soles.</strong> <br />Puede realizar el pago en cualquiera de nuestras cuentas.</p>

            <div className="item item-1">
                <img src={Config.URL + "/img/bcp.png?v=2"} alt={'Banco de credito'} />
                <div>
                    <p><strong>Cuenta para pagos notariales</strong> a nombre de <strong>Manuel Alipio Roman Olivas</strong></p>
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


            <div className="item item-2">
                <img src={Config.URL + "/img/bcp.png?v=2"} alt={'Banco de credito'} />
                <div>
                    <p><strong>Cuenta para pagos a registros públicos</strong> a nombre de <strong>Manuel Alipio Roman Olivas</strong></p>
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

    )
}

export default FormPayment