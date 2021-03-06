import React, {useEffect, useState} from 'react'
import Link from "next/link"
import {useForm} from "react-hook-form"
import $ from "jquery"
import PopupThanks from "../contacto/popup-thanks"
import Config from "../../config"
import FormPayment from "../../components/form-payment"
import axios from "axios"


const TransferenciaVehicular = (props) => {

    const {register, errors, handleSubmit} = useForm()
    const [showForm, setShowForm] = useState(false)
    const [formBody, setFormBody] = useState(true)
    const [showDataCasado, setShowDataCasado] = useState(false)
    const [showDataCasado2, setShowDataCasado2] = useState(false)

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


    const alphanumericValues = (str) => {
        return str
        .toString()                     // Cast to string
        .toLowerCase()                  // Convert the string to lowercase letters
        .normalize('NFD')       // The normalize() method returns the Unicode Normalization Form of a given string.
        .trim()                         // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-') 
    }

    const formReset = () => {
        setFileImg([])
        setCountFile([])
        //document.querySelector("#form-data").reset()
        document.getElementsByTagName("form")[0].reset()
        document.querySelector('#comprobante_img_place').innerHTML = "Adjuntar voucher"         
    }

    const fileOnChange = (e) => {   
        if( e.target.files.length>0 ){   
            let newNameDate = new Date().getTime()
            let file = e.target.files[0]
            let newName1 = file.name.split('.').shift()
            let newName = alphanumericValues(newName1)
            let blob = file.slice(0, file.size, file.type) 
            let newFile = new File([blob], newName + '-' + newNameDate + '.' + file.type.split('/')[1], {type: file.type})
                
            document.getElementById('comprobante_img_place').innerHTML = e.target.value.split(/(\\|\/)/g).pop()
            setFileImg(newFile)   
            setCountFile([...countFile, newName])
            document.querySelector('#name_img').value = newName + '-' + newNameDate + '.' + file.type.split('/')[1]   
        }                    
    }


    const onSubmit = data => {    
        console.log(data)    
        //return false
        if( countFile.length>0 ){                        
            var formData = new FormData()   

            formData.append("demo", fileImg)            

            axios.post(Config.URL_BACK + '/upload-only-img', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                console.log('Exito upload')                
            }).catch(err => {
                console.error('Error')
            })
        }

        let sendValue = data

        axios({
            method: 'post',
            url: Config.API_PATH + '/p-tv',
            data: sendValue
        })
        .then(function (response) {
            console.log('exito')
            setShowForm(true)
            formReset()
        })
        
    }
    
    const triggerClosePopup = () => {
        setShowForm(false)
    }


    
    return (

        <>            
            { showForm && (
                <PopupThanks eClick={triggerClosePopup}>
                    <h3 className="title">¡Gracias!</h3>
                    <p className="description">
                        Hemos recibido la solicitud de su trámite, Transferencia vehicular. Uno de nuestros asesores legales se comunicará usted a la brevedad para continuar con el proceso. Te estaremos contactando pronto. No olvide revisar su cuenta de email (bandeja de entrada y o Spam) en donde le hemos enviado toda la información que nos ha proporcionado. Si tiene otra consulta puede llamar a nuestra central telefónica (01) 7151588 que estaremos gustosos en atenderlo.
                    </p>
                </PopupThanks>
            )}

            <div className="section tramite-form with-bg-img">

                    <div className="row">
                        <div className={"caption caption-static caption-type-1 caption-type-2 " + props.width} style={{marginTop: 0}}>
                            <div className="parent-title-2 start-xs">
                                <h2><strong>Transferencias vehiculares</strong></h2>                                
                            </div>
                            

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="block-form">  

                                    <input type="hidden" id="name_img" name="name_img" 
                                    ref={register({
                                        required: false
                                    })}
                                    />

                                    <div style={{marginTop: 20}} className="form-text-line">Vendedor:</div> 

                                    <div className="box-form">
                                        <label htmlFor="ven_tipo_poder">Tipo de persona:</label>
                                        <select 
                                        className="form-item"
                                        name="ven_tipo_poder"
                                        id="ven_tipo_poder"
                                        onChange={(e) => setFormBody(formBody ? false : true)}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}>
                                            <option value="1">Persona Natural</option>
                                            <option value="2">Persona Juridica</option>
                                        </select>
                                        {errors.ven_tipo_poder && <span className="fi-validator">{errors.ven_tipo_poder.message}</span>}
                                    </div>  

                                    { !formBody && (
                                        <>
                                            <div className="box-form">
                                                <label htmlFor="ven_ruc">RUC:</label>
                                                <input type="text" id="ven_ruc" name="ven_ruc" className="form-item"                                         
                                                ref={register({
                                                    required: "Este campo es obligatorio"
                                                })}
                                                />
                                                {errors.ven_ruc && <span className="fi-validator">{errors.ven_ruc.message}</span>}
                                            </div>  

                                            <div className="box-form">
                                                <label htmlFor="ven_partida">Partida registral:</label>
                                                <input type="text" id="ven_partida" name="ven_partida" className="form-item"                                         
                                                ref={register({
                                                    required: "Este campo es obligatorio"
                                                })}
                                                />
                                                {errors.ven_partida && <span className="fi-validator">{errors.ven_partida.message}</span>}
                                            </div> 

                                            <div className="box-form">
                                                <label htmlFor="ven_lugar">Lugar de inscripción:</label>
                                                <input type="text" id="ven_lugar" name="ven_lugar" className="form-item" 
                                                onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                                ref={register({
                                                    required: "Este campo es obligatorio"
                                                })}
                                                />
                                                {errors.ven_lugar && <span className="fi-validator">{errors.ven_lugar.message}</span>}
                                            </div>  
                                        </>
                                    )}                                    


                                    <div className="box-form">
                                        <label htmlFor="ven_nombre">Nombre completo:</label>
                                        <input type="text" id="ven_nombre" name="ven_nombre" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.ven_nombre && <span className="fi-validator">{errors.ven_nombre.message}</span>}
                                    </div> 

                                    <div className="group-form">

                                        <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                                            <p className="box-form">
                                                <label htmlFor="ven_tipo_doc">Tipo de documento:</label>
                                                <select 
                                                className="form-item"
                                                name="ven_tipo_doc"
                                                onChange={(e) => document.getElementById('ven_num_doc').focus()}
                                                ref={register({
                                                    required: "Este campo es obligatorio"
                                                })}>
                                                    <option defaultValue={true} value="1">DNI</option>
                                                    <option value="2">Carnet de extranjeria</option>
                                                    <option value="3">Pasaporte</option>
                                                </select>
                                                {errors.ven_tipo_doc && <span className="fi-validator">{errors.ven_tipo_doc.message}</span>}
                                            </p>

                                            <p className="box-form">
                                                <label htmlFor="ven_num_doc">Número de Documento</label>
                                                <input type="text" id="ven_num_doc" name="ven_num_doc" className="form-item"                                                 
                                                ref={register({required: "Apellidos es obligatorio"})} />
                                                {errors.ven_num_doc && <span className="fi-validator">{errors.ven_num_doc.message}</span>}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="ven_ocupacion">Ocupación:</label>
                                        <input type="text" id="ven_ocupacion" name="ven_ocupacion" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.ven_ocupacion && <span className="fi-validator">{errors.ven_ocupacion.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="ven_domicilio">Domicilio:</label>
                                        <input type="text" id="ven_domicilio" name="ven_domicilio" className="form-item"                                         
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.ven_domicilio && <span className="fi-validator">{errors.ven_domicilio.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="ven_estado_civil">Estado civil:</label>
                                        <select 
                                        className="form-item"
                                        id="ven_estado_civil"
                                        name="ven_estado_civil"
                                        onChange={(e) => e.target.value == 2 ? setShowDataCasado(true) : setShowDataCasado(false)}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}>
                                            <option hidden value="">Seleccione un estado</option>
                                            <option value="1">Soltero</option>
                                            <option value="2">Casado</option>
                                            <option value="3">Divorciado</option>
                                            <option value="4">Viudo</option>
                                        </select>
                                        {errors.ven_estado_civil && <span className="fi-validator">{errors.ven_estado_civil.message}</span>}
                                    </div>

                                    { showDataCasado && (
                                        <>
                                            <div className="box-form">
                                                <label htmlFor="ven_nombre_conyuge">Nombre del conyuge:</label>
                                                <input type="text" id="ven_nombre_conyuge" name="ven_nombre_conyuge" className="form-item" 
                                                onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                                ref={register({
                                                    required: "Este campo es obligatorio"
                                                })}
                                                />
                                                {errors.ven_nombre_conyuge && <span className="fi-validator">{errors.ven_nombre_conyuge.message}</span>}
                                            </div> 

                                            <div className="group-form">

                                                <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                                                    <p className="box-form">
                                                        <label htmlFor="ven_tipo_doc_conyuge">Tipo de documento:</label>
                                                        <select 
                                                        className="form-item"
                                                        name="ven_tipo_doc_conyuge"
                                                        onChange={(e) => document.getElementById('ven_num_doc_conyuge').focus()}
                                                        ref={register({
                                                            required: "Este campo es obligatorio"
                                                        })}>
                                                            <option defaultValue={true} value="1">DNI</option>
                                                            <option value="2">Carnet de extranjeria</option>
                                                            <option value="3">Pasaporte</option>
                                                        </select>
                                                        {errors.ven_tipo_doc_conyuge && <span className="fi-validator">{errors.ven_tipo_doc_conyuge.message}</span>}
                                                    </p>

                                                    <p className="box-form">
                                                        <label htmlFor="ven_num_doc_conyuge">Número de Documento</label>
                                                        <input type="text" id="ven_num_doc_conyuge" name="ven_num_doc_conyuge" className="form-item"                                                 
                                                        ref={register({required: "Apellidos es obligatorio"})} />
                                                        {errors.ven_num_doc_conyuge && <span className="fi-validator">{errors.ven_num_doc_conyuge.message}</span>}
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="box-form">
                                                <label htmlFor="ven_ocupacion_conyuge">Ocupación:</label>
                                                <input type="text" id="ven_ocupacion_conyuge" name="ven_ocupacion_conyuge" className="form-item" 
                                                onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                                ref={register({
                                                    required: "Este campo es obligatorio"
                                                })}
                                                />
                                                {errors.ven_ocupacion_conyuge && <span className="fi-validator">{errors.ven_ocupacion_conyuge.message}</span>}
                                            </div> 
                                        </>
                                    )}






                                    <div className="form-text-line">Comprador:</div> 

                                    <div className="box-form">
                                        <label htmlFor="com_tipo_poder">Tipo de persona:</label>
                                        <select 
                                        className="form-item"
                                        name="com_tipo_poder"
                                        id="com_tipo_poder"
                                        onChange={(e) => setFormBody(formBody ? false : true)}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}>
                                            <option value="1">Persona Natural</option>
                                            <option value="2">Persona Juridica</option>
                                        </select>
                                        {errors.com_tipo_poder && <span className="fi-validator">{errors.com_tipo_poder.message}</span>}
                                    </div>  

                                    <div className="box-form">
                                        <label htmlFor="com_ruc">RUC:</label>
                                        <input type="text" id="com_ruc" name="com_ruc" className="form-item"                                         
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.com_ruc && <span className="fi-validator">{errors.com_ruc.message}</span>}
                                    </div>  

                                    <div className="box-form">
                                        <label htmlFor="com_partida">Partida registral:</label>
                                        <input type="text" id="com_partida" name="com_partida" className="form-item"                                         
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.com_partida && <span className="fi-validator">{errors.com_partida.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="com_lugar">Lugar de inscripción:</label>
                                        <input type="text" id="com_lugar" name="com_lugar" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.com_lugar && <span className="fi-validator">{errors.com_lugar.message}</span>}
                                    </div>                                                                                                                                         

                                    <div className="box-form">
                                        <label htmlFor="com_nombre">Nombre completo:</label>
                                        <input type="text" id="com_nombre" name="com_nombre" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.com_nombre && <span className="fi-validator">{errors.com_nombre.message}</span>}
                                    </div> 

                                    <div className="group-form">

                                        <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                                            <p className="box-form">
                                                <label htmlFor="com_tipo_doc">Tipo de documento:</label>
                                                <select 
                                                className="form-item"
                                                name="com_tipo_doc"
                                                onChange={(e) => document.getElementById('com_num_doc').focus()}
                                                ref={register({
                                                    required: "Este campo es obligatorio"
                                                })}>
                                                    <option defaultValue={true} value="1">DNI</option>
                                                    <option value="2">Carnet de extranjeria</option>
                                                    <option value="3">Pasaporte</option>
                                                </select>
                                                {errors.com_tipo_doc && <span className="fi-validator">{errors.com_tipo_doc.message}</span>}
                                            </p>

                                            <p className="box-form">
                                                <label htmlFor="com_num_doc">Número de Documento</label>
                                                <input type="text" id="com_num_doc" name="com_num_doc" className="form-item"                                                 
                                                ref={register({required: "Apellidos es obligatorio"})} />
                                                {errors.com_num_doc && <span className="fi-validator">{errors.com_num_doc.message}</span>}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="com_ocupacion">Ocupación:</label>
                                        <input type="text" id="com_ocupacion" name="com_ocupacion" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.com_ocupacion && <span className="fi-validator">{errors.com_ocupacion.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="com_domicilio">Domicilio:</label>
                                        <input type="text" id="com_domicilio" name="com_domicilio" className="form-item"                                         
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.com_domicilio && <span className="fi-validator">{errors.com_domicilio.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="com_estado_civil">Estado civil:</label>
                                        <select 
                                        className="form-item"
                                        id="com_estado_civil"
                                        name="com_estado_civil"
                                        onChange={(e) => e.target.value == 2 ? setShowDataCasado2(true) : setShowDataCasado2(false)}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}>
                                            <option hidden value="">Seleccione un estado</option>
                                            <option value="1">Soltero</option>
                                            <option value="2">Casado</option>
                                            <option value="3">Divorciado</option>
                                            <option value="4">Viudo</option>
                                        </select>
                                        {errors.com_estado_civil && <span className="fi-validator">{errors.com_estado_civil.message}</span>}
                                    </div>

                                    { showDataCasado2 && (
                                        <>
                                            <div className="box-form">
                                                <label htmlFor="com_nombre_conyuge">Nombre del conyuge:</label>
                                                <input type="text" id="com_nombre_conyuge" name="com_nombre_conyuge" className="form-item" 
                                                onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                                ref={register({
                                                    required: "Este campo es obligatorio"
                                                })}
                                                />
                                                {errors.com_nombre_conyuge && <span className="fi-validator">{errors.com_nombre_conyuge.message}</span>}
                                            </div> 

                                            <div className="group-form">

                                                <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                                                    <p className="box-form">
                                                        <label htmlFor="com_tipo_doc_conyuge">Tipo de documento:</label>
                                                        <select 
                                                        className="form-item"
                                                        name="com_tipo_doc_conyuge"
                                                        onChange={(e) => document.getElementById('com_num_doc_conyuge').focus()}
                                                        ref={register({
                                                            required: "Este campo es obligatorio"
                                                        })}>
                                                            <option defaultValue={true} value="1">DNI</option>
                                                            <option value="2">Carnet de extranjeria</option>
                                                            <option value="3">Pasaporte</option>
                                                        </select>
                                                        {errors.com_tipo_doc_conyuge && <span className="fi-validator">{errors.com_tipo_doc_conyuge.message}</span>}
                                                    </p>

                                                    <p className="box-form">
                                                        <label htmlFor="com_num_doc_conyuge">Número de Documento</label>
                                                        <input type="text" id="com_num_doc_conyuge" name="com_num_doc_conyuge" className="form-item"                                                 
                                                        ref={register({required: "Apellidos es obligatorio"})} />
                                                        {errors.com_num_doc_conyuge && <span className="fi-validator">{errors.com_num_doc_conyuge.message}</span>}
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="box-form">
                                                <label htmlFor="com_ocupacion_conyuge">Ocupación:</label>
                                                <input type="text" id="com_ocupacion_conyuge" name="com_ocupacion_conyuge" className="form-item" 
                                                onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                                ref={register({
                                                    required: "Este campo es obligatorio"
                                                })}
                                                />
                                                {errors.com_ocupacion_conyuge && <span className="fi-validator">{errors.com_ocupacion_conyuge.message}</span>}
                                            </div> 
                                        </>
                                    )}  








                                    <div className="form-text-line">Del vehiculo:</div> 

                                    <div className="box-form">
                                        <label htmlFor="dv_placa">Placa:</label>
                                        <input type="text" id="dv_placa" name="dv_placa" className="form-item" 
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.dv_placa && <span className="fi-validator">{errors.dv_placa.message}</span>}
                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="dv_modelo">Modelo:</label>
                                        <input type="text" id="dv_modelo" name="dv_modelo" className="form-item" 
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.dv_modelo && <span className="fi-validator">{errors.dv_modelo.message}</span>}
                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="dv_color">Color:</label>
                                        <input type="text" id="dv_color" name="dv_color" className="form-item" 
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.dv_color && <span className="fi-validator">{errors.dv_color.message}</span>}
                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="dv_clase">Clase:</label>
                                        <input type="text" id="dv_clase" name="dv_clase" className="form-item" 
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.dv_clase && <span className="fi-validator">{errors.dv_clase.message}</span>}
                                    </div>  

                                    <div className="box-form">
                                        <label htmlFor="dv_combustible">Combustible:</label>
                                        <input type="text" id="dv_combustible" name="dv_combustible" className="form-item"                                         
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.dv_combustible && <span className="fi-validator">{errors.dv_combustible.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="dv_numero_motor">Número de motor:</label>
                                        <input type="text" id="dv_numero_motor" name="dv_numero_motor" className="form-item"                                         
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.dv_numero_motor && <span className="fi-validator">{errors.dv_numero_motor.message}</span>}
                                    </div>  

                                    <div className="box-form">
                                        <label htmlFor="dv_marca">Marca:</label>
                                        <input type="text" id="dv_marca" name="dv_marca" className="form-item"                                         
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.dv_marca && <span className="fi-validator">{errors.dv_marca.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="dv_carroceria">Carrocería:</label>
                                        <input type="text" id="dv_carroceria" name="dv_carroceria" className="form-item"                                         
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.dv_carroceria && <span className="fi-validator">{errors.dv_carroceria.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="dv_ano_fabricacion">Año de Fabricación:</label>
                                        <input type="text" id="dv_ano_fabricacion" name="dv_ano_fabricacion" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]+/ig, '')}                                       
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.dv_ano_fabricacion && <span className="fi-validator">{errors.dv_ano_fabricacion.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="dv_num_serie">Número de serie:</label>
                                        <input type="text" id="dv_num_serie" name="dv_num_serie" className="form-item"                                         
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.dv_num_serie && <span className="fi-validator">{errors.dv_num_serie.message}</span>}
                                    </div>                                                                                                                                                                        
                                    



                                    

                                    <div className="form-text-line">Condiciones:</div>

                                    <div className="box-form">
                                        <label htmlFor="con_precio">Precio:</label>
                                        <input type="text" id="con_precio" name="con_precio" className="form-item" placeholder="Seleccionar la cantidad"
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]+/ig, '')}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.con_precio && <span className="fi-validator">{errors.con_precio.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="con_moneda">Moneda:</label>
                                        <select 
                                        className="form-item"
                                        name="con_moneda"
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}>
                                            <option value="">Elige soles o dólares</option>
                                            <option value="1">Soles</option>
                                            <option value="2">Dólares</option>
                                        </select>
                                        {errors.con_moneda && <span className="fi-validator">{errors.con_moneda.message}</span>}                                        
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="con_forma_pago">Forma de pago:</label>
                                        <input type="text" id="con_forma_pago" name="con_forma_pago" className="form-item"                                                                                 
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.con_forma_pago && <span className="fi-validator">{errors.con_forma_pago.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="con_fecha_entrega">Fecha de entrega:</label>
                                        <input type="text" id="con_fecha_entrega" name="con_fecha_entrega" className="form-item"                                                                                 
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.con_fecha_entrega && <span className="fi-validator">{errors.con_fecha_entrega.message}</span>}
                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="con_otros_detalles">Otros detalles:</label>
                                        <input type="text" id="con_otros_detalles" name="con_otros_detalles" className="form-item"                                                                                 
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.con_otros_detalles && <span className="fi-validator">{errors.con_otros_detalles.message}</span>}
                                    </div> 

  





                                    <div className="form-text-line">Datos de contacto</div>

                                    <div className="box-form">
                                        <label htmlFor="dc_nombre">Nombres completos:</label>
                                        <input type="text" id="dc_nombre" name="dc_nombre" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.dc_nombre && <span className="fi-validator">{errors.dc_nombre.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="dc_telefono">Teléfonos:</label>
                                        <input type="text" id="dc_telefono" name="dc_telefono" className="form-item"
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]+/ig, '')}                                          
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.dc_telefono && <span className="fi-validator">{errors.dc_telefono.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="dc_email">Email:</label>
                                        <input type="text" id="dc_email" name="dc_email" className="form-item" 
                                        placeholder="Detalle con quién viaja y otros"                                        
                                        ref={register({
                                            required: "Este campo es obligatorio",
                                            pattern: {
                                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: "Ingresar un Email valido"
                                            }
                                        })}
                                        />
                                        {errors.dc_email && <span className="fi-validator">{errors.dc_email.message}</span>}
                                    </div> 

                                    <FormPayment />

                                    <div className="box-form box-file-img box-form-mg-2">
                                        <div className="title">Comprobante de pago (opcional):</div>
                                        <label className="form-item" id="comprobante_img_place" htmlFor="comprobante_img">Adjuntar voucher</label>
                                        <input type="file" id="comprobante_img" name="comprobante_img" className="form-item" placeholder="Detalle con quién viaja y otros" 
                                        accept=".jpg, .jpeg, .png"
                                        onChange={(e) => fileOnChange(e)}
                                        />            
                                    </div>


                                    <button type="submit" className="button">Enviar trámite</button>



                                </div>     

                            </form>                           


                        </div>

                    </div>

            </div>

        </>
        
    )
}


export default TransferenciaVehicular