import React, {useEffect, useState} from 'react'
import Link from "next/link"
import {useForm} from "react-hook-form"
import $ from "jquery"
import PopupThanks from "../contacto/popup-thanks"
import Config from "../../config"
import FormPayment from "../../components/form-payment"
import axios from "axios"


const Poderes = (props) => {

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
        //console.log(data)    
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
            url: Config.API_PATH + '/p-poderes',
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
                        Hemos recibido la solicitud de su trámite, Poderes. Uno de nuestros asesores legales se comunicará usted a la brevedad para continuar con el proceso. Te estaremos contactando pronto. No olvide revisar su cuenta de email (bandeja de entrada y o Spam) en donde le hemos enviado toda la información que nos ha proporcionado. Si tiene otra consulta puede llamar a nuestra central telefónica (01) 7151588 que estaremos gustosos en atenderlo.
                    </p>
                </PopupThanks>
            )}

            <div className="section tramite-form with-bg-img">

                    <div className="row">
                        <div className={"caption caption-static caption-type-1 caption-type-2 " + props.width} style={{marginTop: 0}}>
                            <div className="parent-title-2 start-xs">
                                <h2><strong>Poderes</strong></h2>                                
                            </div>
                            

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="block-form">  

                                    <input type="hidden" id="name_img" name="name_img" 
                                    ref={register({
                                        required: false
                                    })}
                                    />

                                    <div className="box-form">
                                        <label htmlFor="tipo_poder">Por favor selecciona el <strong>tipo de poder:</strong></label>
                                        <select 
                                        className="form-item"
                                        name="tipo_poder"
                                        id="tipo_poder"
                                        onChange={(e) => setFormBody(formBody ? false : true)}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}>
                                            <option hidden value="">Elige el tipo de poder</option>
                                            <option value="1">Carta Poder</option>
                                            <option value="2">Fuera de Registro</option>
                                            <option value="3">Escritura Pública</option>
                                        </select>
                                        {errors.tipo_poder && <span className="fi-validator">{errors.tipo_poder.message}</span>}
                                    </div>                                  
                                    

                                    <div className="form-text-line">Poderdantes:</div>                                      

                                    <div className="box-form">
                                        <label htmlFor="pod_nombre">Nombre completo:</label>
                                        <input type="text" id="pod_nombre" name="pod_nombre" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.pod_nombre && <span className="fi-validator">{errors.pod_nombre.message}</span>}
                                    </div> 

                                    <div className="group-form">

                                        <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                                            <p className="box-form">
                                                <label htmlFor="pod_tipo_doc">Tipo de documento:</label>
                                                <select 
                                                className="form-item"
                                                name="pod_tipo_doc"
                                                onChange={(e) => document.getElementById('pod_num_doc').focus()}
                                                ref={register({
                                                    required: "Este campo es obligatorio"
                                                })}>
                                                    <option defaultValue={true} value="1">DNI</option>
                                                    <option value="2">Carnet de extranjeria</option>
                                                    <option value="3">Pasaporte</option>
                                                </select>
                                                {errors.pod_tipo_doc && <span className="fi-validator">{errors.pod_tipo_doc.message}</span>}
                                            </p>

                                            <p className="box-form">
                                                <label htmlFor="pod_num_doc">Número de Documento</label>
                                                <input type="text" id="pod_num_doc" name="pod_num_doc" className="form-item"                                                 
                                                ref={register({required: "Apellidos es obligatorio"})} />
                                                {errors.pod_num_doc && <span className="fi-validator">{errors.pod_num_doc.message}</span>}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="co1_estado_civil">Estado civil:</label>
                                        <select 
                                        className="form-item"
                                        id="pod_estado_civil"
                                        name="pod_estado_civil"
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}>
                                            <option hidden value="">Seleccione un estado</option>
                                            <option value="1">Soltero</option>
                                            <option value="2">Casado</option>
                                            <option value="3">Divorciado</option>                                            
                                            <option value="4">Viudo</option>
                                        </select>
                                        {errors.pod_estado_civil && <span className="fi-validator">{errors.pod_estado_civil.message}</span>}
                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="pod_nacionalidad">Nacionalidad</label>
                                        <input type="text" id="pod_nacionalidad" name="pod_nacionalidad" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.pod_nacionalidad && <span className="fi-validator">{errors.pod_nacionalidad.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="pod_direccion">Dirección</label>
                                        <input type="text" id="pod_direccion" name="pod_direccion" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.pod_direccion && <span className="fi-validator">{errors.pod_direccion.message}</span>}
                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="pod_ocupacion">Ocupación:</label>
                                        <input type="text" id="pod_ocupacion" name="pod_ocupacion" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.pod_ocupacion && <span className="fi-validator">{errors.pod_ocupacion.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="pod_conyuge">Cónyuge (opcional):</label>
                                        <input type="text" id="pod_conyuge" name="pod_conyuge" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}/>                                        
                                    </div> 

                                    


                                    <div className="form-text-line">Apoderados:</div> 

                                    <div className="box-form">
                                        <label htmlFor="apod_nombre">Nombre completo:</label>
                                        <input type="text" id="apod_nombre" name="apod_nombre" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.apod_nombre && <span className="fi-validator">{errors.apod_nombre.message}</span>}
                                    </div> 

                                    <div className="group-form">

                                        <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                                            <p className="box-form">
                                                <label htmlFor="apod_tipo_doc">Tipo de documento:</label>
                                                <select 
                                                className="form-item"
                                                name="apod_tipo_doc"
                                                onChange={(e) => document.getElementById('apod_num_doc').focus()}
                                                ref={register({
                                                    required: "Este campo es obligatorio"
                                                })}>
                                                    <option defaultValue={true} value="1">DNI</option>
                                                    <option value="2">Carnet de extranjeria</option>
                                                    <option value="3">Pasaporte</option>
                                                </select>
                                                {errors.apod_tipo_doc && <span className="fi-validator">{errors.apod_tipo_doc.message}</span>}
                                            </p>

                                            <p className="box-form">
                                                <label htmlFor="apod_num_doc">Número de Documento</label>
                                                <input type="text" id="apod_num_doc" name="apod_num_doc" className="form-item"                                                 
                                                ref={register({required: "Apellidos es obligatorio"})} />
                                                {errors.apod_num_doc && <span className="fi-validator">{errors.apod_num_doc.message}</span>}
                                            </p>

                                        </div>

                                    </div>


                                    


                                    <div className="form-text-line">Sobre el poder:</div>         

                                    <div className="box-form">
                                        <label htmlFor="sep_objeto">Objeto del poder:</label>                                        
                                        <textarea id="sep_objeto" name="sep_objeto" className="form-item item-textarea"
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        ></textarea>
                                        {errors.sep_objeto && <span className="fi-validator">{errors.sep_objeto.message}</span>}
                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="sep_facultades">Facultades:</label>                                        
                                        <textarea id="sep_facultades" name="sep_facultades" className="form-item item-textarea"
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        ></textarea>
                                        {errors.sep_facultades && <span className="fi-validator">{errors.sep_facultades.message}</span>}
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


export default Poderes