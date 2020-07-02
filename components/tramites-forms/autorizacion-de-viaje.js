import React, {useEffect, useState} from 'react'
import Link from "next/link"
import {useForm} from "react-hook-form"
import $ from "jquery"
import PopupThanks from "../contacto/popup-thanks"
import Config from "../../config"
import FormPayment from "../../components/form-payment"
import axios from "axios"
import ViajeNacional from "./autorizacion-de-viaje/nacional"
import ViajeInternacional from "./autorizacion-de-viaje/internacional"


const AutorizacionViaje = (props) => {

    const {register, errors, handleSubmit} = useForm()
    const [showForm, setShowForm] = useState(false)
    const [formBody, setFormBody] = useState(true)
    const [fileImg, setFileImg] = useState([])
    const [countFile, setCountFile] = useState([])

    useEffect(() => {

        var country = 'Peru', countryCode = "+51"

        $(document).click(function(e){                      
            if( $(e.target).closest('.container-flag').length<=0 && !$(e.target).hasClass('flat-item') ) $('.list-flag').fadeOut(150)
        })

        /********/

        $(document).on('click', function(e){
    
            //----------
            if( $(e.target).hasClass('item-popup') ){
                setShowForm(false)
            }		
    
            if( $(e.target).hasClass('int-pscroll') ){
                setShowForm(false)
            }
    
        })

    }, [])
    
    const formReset = () => {
        setFileImg([])
        setCountFile([])
        //document.querySelector("#form-data").reset()
        document.getElementsByTagName("form")[0].reset()
        document.querySelector('#comprobante_img_place').innerHTML = "Adjuntar voucher" 
    }

    const triggerClosePopup = () => {
        setShowForm(false)
    }

    const changeTipoViaje = () => {
        setFormBody(formBody ? false : true)
        formReset()
    }

    
    return (

        <>            
            { showForm && (
                <PopupThanks eClick={triggerClosePopup}>
                    <h3 className="title">¡Gracias!</h3>
                    <p className="description">Gracias por ponerte en contacto con <strong>Notaría Román.</strong> <br />Uno de nuestros asesores se comunicará con usted a la brevedad.</p>
                </PopupThanks>
            )}

            <div className="section tramite-form with-bg-img">

                    <div className="row">
                        <div className={"caption caption-static caption-type-1 caption-type-2 " + props.width} style={{marginTop: 0}}>
                            <div className="parent-title-2 start-xs">
                                <h2><strong>Autorización de viaje</strong></h2>                                
                            </div>    

                            <div className="block-form">    

                                <div className="box-form">
                                    <label htmlFor="tipoViaje">Por favor seleccióna el <strong> tipo de autorización</strong></label>
                                    <select 
                                        className="form-item"
                                        name="tipoViaje"
                                        id="tipoViaje"
                                        onChange={(e) => changeTipoViaje()}
                                    >
                                        <option defaultValue={true} value="1">Viaje nacional</option>
                                        <option value="2">Viaje Internaciónal</option>
                                    </select>
                                </div>                      

                            </div>

                            {formBody ? <ViajeNacional/> : <ViajeInternacional/>}                       

                        </div>

                    </div>

            </div>

        </>
        
    )
}


export default AutorizacionViaje