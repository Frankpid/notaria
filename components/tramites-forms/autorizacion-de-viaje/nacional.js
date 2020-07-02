import React, {useEffect, useState} from 'react'
import Link from "next/link"
import {useForm} from "react-hook-form"
import Config from "../../../config"
import FormPayment from "../../../components/form-payment"
import axios from "axios"


const AutorizacionViajeNacional = (props) => {

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
                console.log('Exito')                
            }).catch(err => {
                console.error('Error')
            })
        }
        
        let sendValue = data

        axios({
            method: 'post',
            url: Config.API_PATH + '/p-audv',
            data: sendValue
        })
        .then(function (response) {
            setShowForm(true)
            formReset()
        })        
        
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
            <form id="form_data_1" name="form_data_1" onSubmit={handleSubmit(onSubmit)}>

                <div className="block-form"> 

                    <div className="form-text-line">Datos del padre o madre</div> 
                    <input type="hidden" id="name_img" name="name_img" 
                    ref={register({
                        required: false
                    })}
                    />

                    <div className="box-form">
                        <label htmlFor="dpm_nombre">Nombres completos:</label>
                        <input type="text" id="dpm_nombre" name="dpm_nombre" className="form-item" 
                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.dpm_nombre && <span className="fi-validator">{errors.dpm_nombre.message}</span>}
                    </div> 

                    <div className="box-form">
                        <label htmlFor="dpm_nacionalidad">Nacionalidad</label>
                        <input type="text" id="dpm_nacionalidad" name="dpm_nacionalidad" className="form-item" 
                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.dpm_nacionalidad && <span className="fi-validator">{errors.dpm_nacionalidad.message}</span>}
                    </div>    
                                                    
                    <div className="group-form">

                        <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                            <p className="box-form">
                                <label htmlFor="dpm_tipo_doc">Tipo de documento:</label>
                                <select 
                                className="form-item"
                                name="dpm_tipo_doc"
                                onChange={(e) => document.getElementById('dpm_num_doc').focus()}
                                ref={register({
                                    required: "Este campo es obligatorio"
                                })}>
                                    <option defaultValue={true} value="1">DNI</option>
                                    <option value="2">Carnet de extranjeria</option>
                                    <option value="3">Pasaporte</option>
                                </select>
                                {errors.dpm_tipo_doc && <span className="fi-validator">{errors.dpm_tipo_doc.message}</span>}
                            </p>

                            <p className="box-form">
                                <label htmlFor="dpm_num_doc">Número de Documento</label>
                                <input type="text" id="dpm_num_doc" name="dpm_num_doc" className="form-item"                                                 
                                ref={register({required: "Apellidos es obligatorio"})} />
                                {errors.dpm_num_doc && <span className="fi-validator">{errors.dpm_num_doc.message}</span>}
                            </p>

                        </div>

                    </div>

                    <div className="box-form">
                        <label htmlFor="dpm_domicilio">Domicilio:</label>
                        <input type="text" id="dpm_domicilio" name="dpm_domicilio" className="form-item" 
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.dpm_domicilio && <span className="fi-validator">{errors.dpm_domicilio.message}</span>}
                    </div>


                    <div className="form-text-line">Datos del menor</div>

                    <div className="box-form">
                        <label htmlFor="dm_nombre">Nombres completos:</label>
                        <input type="text" id="dm_nombre" name="dm_nombre" className="form-item" 
                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.dm_nombre && <span className="fi-validator">{errors.dm_nombre.message}</span>}
                    </div> 

                    <div className="group-form">

                        <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                            <p className="box-form">
                                <label htmlFor="dm_edad">Edad:</label>
                                <select 
                                className="form-item"
                                name="dm_edad"
                                ref={register({
                                    required: "Este campo es obligatorio"
                                })}>
                                    <option defaultValue={true} value="0">Menor a 1 año</option>
                                    {Array.apply(1, Array(17)).map(function (x, i) {
                                        return <option key={i+1} value={i+1}>{i+1 <= 9 ? '0' + (i+1) + ' años' : (i+1) + ' años'}</option>
                                    })}
                                </select>
                                {errors.dm_edad && <span className="fi-validator">{errors.dm_edad.message}</span>}
                            </p>

                        </div>

                    </div>


                    <div className="form-text-line">Datos del viaje</div>

                    <div className="box-form">
                        <label htmlFor="dv_lugar">Lugar del viaje:</label>
                        <input type="text" id="dv_lugar" name="dv_lugar" className="form-item" 
                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.dv_lugar && <span className="fi-validator">{errors.dv_lugar.message}</span>}
                    </div> 

                    <div className="box-form">
                        <label htmlFor="dv_duracion">Duración:</label>
                        <input type="text" id="dv_duracion" name="dv_duracion" className="form-item"                                         
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.dv_duracion && <span className="fi-validator">{errors.dv_duracion.message}</span>}
                    </div> 

                    <div className="box-form">
                        <label htmlFor="dv_observaciones">Observaciones:</label>
                        <input type="text" id="dv_observaciones" name="dv_observaciones" className="form-item" 
                        placeholder="Detalle con quién viaja y otros"                                        
                        ref={register({
                            required: "Este campo es obligatorio"
                        })}
                        />
                        {errors.dv_observaciones && <span className="fi-validator">{errors.dv_observaciones.message}</span>}
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
        </>
        
    )
}


export default AutorizacionViajeNacional