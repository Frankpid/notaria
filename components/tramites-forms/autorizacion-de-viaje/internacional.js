import React, {useEffect, useState} from 'react'
import Link from "next/link"
import {useForm} from "react-hook-form"
import Config from "../../../config"
import FormPayment from "../../../components/form-payment"
import axios from "axios"
import PopupThanks from "../../contacto/popup-thanks"


const AutorizacionViajeInternacional = (props) => {

    const {register, errors, handleSubmit} = useForm()
    const [showForm, setShowForm] = useState(false)
    const [formBody, setFormBody] = useState(true)
    const [fileImg, setFileImg] = useState([])
    const [countFile, setCountFile] = useState([])

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
            url: Config.API_PATH + '/p-audvi',
            data: sendValue
        })
        .then(function (response) {
            console.log('Exito')  
            setShowForm(true)
            formReset()
        })
        
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

            <form id="form_data_2" name="form_data_2" onSubmit={handleSubmit(onSubmit)}>

                <div className="block-form">                     

                    <div className="form-text-line">Datos del padre</div> 

                    <input type="hidden" id="name_img" name="inter_name_img" 
                    ref={register({
                        required: false
                    })}
                    /> 

                    <div className="box-form">
                        <label htmlFor="dp_nombre">Nombres completos:</label>
                        <input type="text" id="dp_nombre" name="inter_dp_nombre" className="form-item" 
                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.inter_dp_nombre && <span className="fi-validator">{errors.inter_dp_nombre.message}</span>}
                    </div> 

                    <div className="box-form">
                        <label htmlFor="dp_nacionalidad">Nacionalidad</label>
                        <input type="text" id="dp_nacionalidad" name="inter_dp_nacionalidad" className="form-item" 
                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.inter_dp_nacionalidad && <span className="fi-validator">{errors.inter_dp_nacionalidad.message}</span>}
                    </div>    
                                                    
                    <div className="group-form">

                        <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                            <p className="box-form">
                                <label htmlFor="dp_tipo_doc">Tipo de documento:</label>
                                <select 
                                className="form-item"
                                name="inter_dp_tipo_doc"
                                onChange={(e) => document.getElementById('dp_num_doc').focus()}
                                ref={register({
                                    required: "Este campo es obligatorio"
                                })}>
                                    <option defaultValue={true} value="1">DNI</option>
                                    <option value="2">Carnet de extranjeria</option>
                                    <option value="3">Pasaporte</option>
                                </select>
                                {errors.inter_dp_tipo_doc && <span className="fi-validator">{errors.inter_dp_tipo_doc.message}</span>}
                            </p>

                            <p className="box-form">
                                <label htmlFor="dp_num_doc">Número de Documento</label>
                                <input type="text" id="dp_num_doc" name="inter_dp_num_doc" className="form-item"                                                 
                                ref={register({required: "Apellidos es obligatorio"})} />
                                {errors.inter_dp_num_doc && <span className="fi-validator">{errors.inter_dp_num_doc.message}</span>}
                            </p>

                        </div>

                    </div>

                    <div className="box-form">
                        <label htmlFor="dp_domicilio">Domicilio:</label>
                        <input type="text" id="dp_domicilio" name="inter_dp_domicilio" className="form-item"             
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.inter_dp_domicilio && <span className="fi-validator">{errors.inter_dp_domicilio.message}</span>}
                    </div>



                    <div className="form-text-line">Datos de la madre</div>  

                    <div className="box-form">
                        <label htmlFor="dma_nombre">Nombres completos:</label>
                        <input type="text" id="dma_nombre" name="inter_dma_nombre" className="form-item" 
                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.inter_dma_nombre && <span className="fi-validator">{errors.inter_dma_nombre.message}</span>}
                    </div> 

                    <div className="box-form">
                        <label htmlFor="dma_nacionalidad">Nacionalidad</label>
                        <input type="text" id="dma_nacionalidad" name="inter_dma_nacionalidad" className="form-item" 
                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.inter_dma_nacionalidad && <span className="fi-validator">{errors.inter_dma_nacionalidad.message}</span>}
                    </div>    
                                                    
                    <div className="group-form">

                        <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                            <p className="box-form">
                                <label htmlFor="dma_tipo_doc">Tipo de documento:</label>
                                <select 
                                className="form-item"
                                name="inter_dma_tipo_doc"
                                onChange={(e) => document.getElementById('dma_num_doc').focus()}
                                ref={register({
                                    required: "Este campo es obligatorio"
                                })}>
                                    <option defaultValue={true} value="1">DNI</option>
                                    <option value="2">Carnet de extranjeria</option>
                                    <option value="3">Pasaporte</option>
                                </select>
                                {errors.inter_dma_tipo_doc && <span className="fi-validator">{errors.inter_dma_tipo_doc.message}</span>}
                            </p>

                            <p className="box-form">
                                <label htmlFor="dma_num_doc">Número de Documento</label>
                                <input type="text" id="dma_num_doc" name="inter_dma_num_doc" className="form-item"                                                 
                                ref={register({required: "Apellidos es obligatorio"})} />
                                {errors.inter_dma_num_doc && <span className="fi-validator">{errors.inter_dma_num_doc.message}</span>}
                            </p>

                        </div>

                    </div>

                    <div className="box-form">
                        <label htmlFor="dma_domicilio">Domicilio:</label>
                        <input type="text" id="dma_domicilio" name="inter_dma_domicilio" className="form-item"             
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.inter_dma_domicilio && <span className="fi-validator">{errors.inter_dma_domicilio.message}</span>}
                    </div>



                    <div className="form-text-line">Datos del menor</div>

                    <div className="box-form">
                        <label htmlFor="dm_nombre">Nombres completos:</label>
                        <input type="text" id="dm_nombre" name="inter_dm_nombre" className="form-item" 
                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.inter_dm_nombre && <span className="fi-validator">{errors.inter_dm_nombre.message}</span>}
                    </div> 

                    <div className="group-form">

                        <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                            <p className="box-form">
                                <label htmlFor="dm_edad">Edad:</label>
                                <select 
                                className="form-item"
                                name="inter_dm_edad"
                                ref={register({
                                    required: "Este campo es obligatorio"
                                })}>
                                    <option defaultValue={true} value="0">Menor a 1 año</option>
                                    {Array.apply(1, Array(17)).map(function (x, i) {
                                        return <option key={i+1} value={i+1}>{i+1 <= 9 ? '0' + (i+1) + ' años' : (i+1) + ' años'}</option>
                                    })}
                                </select>
                                {errors.inter_dm_edad && <span className="fi-validator">{errors.inter_dm_edad.message}</span>}
                            </p>

                        </div>

                    </div>



                    <div className="form-text-line">Datos del viaje</div>

                    <div className="box-form">
                        <label htmlFor="dv_lugar_viaje">Lugar del viaje:</label>
                        <input type="text" id="dv_lugar_viaje" name="inter_dv_lugar_viaje" className="form-item" 
                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.inter_dv_lugar_viaje && <span className="fi-validator">{errors.inter_dv_lugar_viaje.message}</span>}
                    </div> 

                    <div className="box-form">
                        <label htmlFor="dv_duracion">Duración:</label>
                        <input type="text" id="dv_duracion" name="inter_dv_duracion" className="form-item"                                         
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.inter_dv_duracion && <span className="fi-validator">{errors.inter_dv_duracion.message}</span>}
                    </div> 

                    <div className="box-form">
                        <label htmlFor="dv_observaciones">Observaciones:</label>
                        <input type="text" id="dv_observaciones" name="inter_dv_observaciones" className="form-item" 
                        placeholder="Detalle con quién viaja y otros"                                        
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.inter_dv_observaciones && <span className="fi-validator">{errors.inter_dv_observaciones.message}</span>}
                    </div> 

                    <div className="form-text-line">Datos de contacto</div>

                    <div className="box-form">
                        <label htmlFor="dc_nombre">Nombres completos:</label>
                        <input type="text" id="dc_nombre" name="inter_dc_nombre" className="form-item" 
                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.inter_dc_nombre && <span className="fi-validator">{errors.inter_dc_nombre.message}</span>}
                    </div> 

                    <div className="box-form">
                        <label htmlFor="dc_telefono">Teléfonos:</label>
                        <input type="text" id="dc_telefono" name="inter_dc_telefono" className="form-item"
                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]+/ig, '')}                                          
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.inter_dc_telefono && <span className="fi-validator">{errors.inter_dc_telefono.message}</span>}
                    </div> 

                    <div className="box-form">
                        <label htmlFor="dc_email">Email:</label>
                        <input type="text" id="dc_email" name="inter_dc_email" className="form-item" 
                        placeholder="Detalle con quién viaja y otros"                                        
                        ref={register({
                            required: "Este campo es obligatorio",
                            pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Ingresar un Email valido"
                            }
                        })}
                        />
                        {errors.inter_dc_email && <span className="fi-validator">{errors.inter_dc_email.message}</span>}
                    </div> 

                    <FormPayment />

                    <div className="box-form box-file-img box-form-mg-2">
                        <div className="title">Comprobante de pago (opcional):</div>
                        <label className="form-item" id="comprobante_img_place" htmlFor="comprobante_img">Adjuntar voucher</label>
                        <input type="file" id="comprobante_img" name="inter_comprobante_img" className="form-item" placeholder="Detalle con quién viaja y otros" 
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => fileOnChange(e)}
                        />            
                    </div>


                    <button type="submit" className="button">Enviar trámite</button>

                </div>

                </form>

        </>
        
    )
}


export default AutorizacionViajeInternacional