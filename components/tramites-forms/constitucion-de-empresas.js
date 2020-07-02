import React, {useEffect, useState} from 'react'
import Link from "next/link"
import {useForm} from "react-hook-form"
import $ from "jquery"
import PopupThanks from "../contacto/popup-thanks"
import Config from "../../config"
import FormPayment from "../../components/form-payment"
import axios from "axios"


const ConstitucionEmpresas = (props) => {

    const {register, errors, handleSubmit} = useForm()
    const [showForm, setShowForm] = useState(false)
    const [formBody, setFormBody] = useState(true)

    const [fileImg, setFileImg] = useState([])
    const [countFile, setCountFile] = useState([])

    const [fileImg2, setFileImg2] = useState([])
    const [countFile2, setCountFile2] = useState([])


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
        document.querySelector('#sle_estatuto_place').innerHTML = "Adjuntar archivo" 
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

    const fileOnChange2 = (e) => { 
        if( e.target.files.length>0 ){     
            let newNameDate = new Date().getTime()
            let file = e.target.files[0]
            let newName1 = file.name.split('.').shift()
            let newName = alphanumericValues(newName1)
            let blob = file.slice(0, file.size, file.type) 
            let newFile = new File([blob], newName + '-' + newNameDate + '.' + file.type.split('/')[1], {type: file.type})

            console.log(newFile)
                
            document.getElementById('sle_estatuto_place').innerHTML = e.target.value.split(/(\\|\/)/g).pop()
            setFileImg2(newFile)   
            setCountFile2([...countFile2, newName])
            document.querySelector('#name_img_2').value = newName + '-' + newNameDate + '.' + file.type.split('/')[1]    
        }                   
    }

    const onSubmit = data => {    

        console.log(data)
    
        //return false

        if( countFile.length>0 ){                        
            var formData = new FormData()   

            if( countFile2.length>0 ){
                formData.append("demo", fileImg2)
            }

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
            url: Config.API_PATH + '/p-ce',
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
                                <h2><strong>Constitución de empresas</strong></h2>                                
                            </div>
                            

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="block-form">  

                                    <input type="hidden" id="name_img" name="name_img" 
                                    ref={register({
                                        required: false
                                    })}
                                    />

                                    <input type="hidden" id="name_img_2" name="name_img_2" 
                                    ref={register({
                                        required: false
                                    })}
                                    />

                                    <div className="box-form">
                                        <label htmlFor="tipo_sociedad">Por favor selecciona el <strong>tipo de sociedad:</strong></label>
                                        <select 
                                        className="form-item"
                                        name="tipo_sociedad"
                                        id="tipo_sociedad"
                                        onChange={(e) => setFormBody(formBody ? false : true)}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}>
                                            <option hidden value="">Tipo de sociedad</option>
                                            <option value="1">Sociedad anónima S.A.</option>
                                            <option value="2">Sociedad anónima cerrada S.A.C.</option>
                                            <option value="3">Sociedad de responsabilidad limitada S.R.L</option>
                                            <option value="4">Empresa Individual de responsabilidad limitada E.I.R.L.</option>
                                            <option value="5">Sociedad colectiva</option>
                                        </select>
                                        {errors.tipo_sociedad && <span className="fi-validator">{errors.tipo_sociedad.message}</span>}
                                    </div>                                  
                                    

                                    <div className="form-text-line">Constituyentes:</div>  

                                    <div className="box-form">
                                        <label htmlFor="co_cantidad">Cantidad:</label>
                                        <select 
                                        className="form-item"
                                        id="co_cantidad"
                                        name="co_cantidad"
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}>
                                            <option value="">Seleccione el número de socios</option>
                                            {Array.apply(1, Array(20)).map(function (x, i) {
                                                return <option key={i+1} value={i+1}>{i+1 <= 9 ? '0' + (i+1) : (i+1)}</option>
                                            })}
                                        </select>
                                        {errors.co_cantidad && <span className="fi-validator">{errors.co_cantidad.message}</span>}
                                    </div> 



                                    <div className="form-text-line">Constituyente 1:</div>  

                                    <div className="box-form">
                                        <label htmlFor="co1_nombre">Nombre completo:</label>
                                        <input type="text" id="co1_nombre" name="co1_nombre" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.co1_nombre && <span className="fi-validator">{errors.co1_nombre.message}</span>}
                                    </div> 

                                    <div className="group-form">

                                        <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                                            <p className="box-form">
                                                <label htmlFor="co1_tipo_doc">Tipo de documento:</label>
                                                <select 
                                                className="form-item"
                                                name="co1_tipo_doc"
                                                onChange={(e) => document.getElementById('co1_num_doc').focus()}
                                                ref={register({
                                                    required: "Este campo es obligatorio"
                                                })}>
                                                    <option defaultValue={true} value="1">DNI</option>
                                                    <option value="2">Carnet de extranjeria</option>
                                                    <option value="3">Pasaporte</option>
                                                </select>
                                                {errors.co1_tipo_doc && <span className="fi-validator">{errors.co1_tipo_doc.message}</span>}
                                            </p>

                                            <p className="box-form">
                                                <label htmlFor="co1_num_doc">Número de Documento</label>
                                                <input type="text" id="co1_num_doc" name="co1_num_doc" className="form-item"                                                 
                                                ref={register({required: "Apellidos es obligatorio"})} />
                                                {errors.co1_num_doc && <span className="fi-validator">{errors.co1_num_doc.message}</span>}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="co1_estado_civil">Estado civil:</label>
                                        <select 
                                        className="form-item"
                                        id="co1_estado_civil"
                                        name="co1_estado_civil"
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}>
                                            <option hidden value="">Seleccione un estado</option>
                                            <option value="1">Soltero</option>
                                            <option value="2">Casado</option>
                                            <option value="3">divorciado</option>
                                            <option value="4">Viudo</option>
                                        </select>
                                        {errors.co1_estado_civil && <span className="fi-validator">{errors.co1_estado_civil.message}</span>}
                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="co1_nacionalidad">Nacionalidad</label>
                                        <input type="text" id="co1_nacionalidad" name="co1_nacionalidad" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.co1_nacionalidad && <span className="fi-validator">{errors.co1_nacionalidad.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="co1_direccion">Dirección</label>
                                        <input type="text" id="co1_direccion" name="co1_direccion" className="form-item"                                         
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.co1_direccion && <span className="fi-validator">{errors.co1_direccion.message}</span>}
                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="co1_ocupacion">Ocupación:</label>
                                        <input type="text" id="co1_ocupacion" name="co1_ocupacion" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.co1_ocupacion && <span className="fi-validator">{errors.co1_ocupacion.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="co1_conyuge">Cónyuge (opcional):</label>
                                        <input type="text" id="co1_conyuge" name="co1_conyuge" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: false
                                        })}
                                        />                                        
                                    </div> 

                                    

                                    <div className="form-text-line">Sobre la empresa:</div> 

                                    <div className="box-form">
                                        <label htmlFor="sle_nombre">Nombres de la empresa:</label>
                                        <input type="text" id="sle_nombre" name="sle_nombre" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.sle_nombre && <span className="fi-validator">{errors.sle_nombre.message}</span>}
                                    </div> 

                                    <div className="box-form">
                                        <label htmlFor="sle_sigla">Sigla (opcional):</label>
                                        <input type="text" id="sle_sigla" name="sle_sigla" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: false
                                        })}
                                        />                                        
                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="sle_capital_social">Capital social S/.:</label>
                                        <input type="text" id="sle_capital_social" name="sle_capital_social" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.sle_capital_social && <span className="fi-validator">{errors.sle_capital_social.message}</span>}
                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="sle_division">División de acciones:</label>                                        
                                        <textarea id="sle_division" name="sle_division" className="form-item item-textarea"
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        ></textarea>
                                        {errors.sle_division && <span className="fi-validator">{errors.sle_division.message}</span>}
                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="sle_domicilio">Domicilio de la empresa:</label>
                                        <input type="text" id="sle_domicilio" name="sle_domicilio" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.sle_domicilio && <span className="fi-validator">{errors.sle_domicilio.message}</span>}
                                    </div>

                                    <div className="box-form">
                                        <label htmlFor="sle_nombre_gerente">Nombre del gerente general:</label>
                                        <input type="text" id="sle_nombre_gerente" name="sle_nombre_gerente" className="form-item" 
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.sle_nombre_gerente && <span className="fi-validator">{errors.sle_nombre_gerente.message}</span>}
                                    </div>
                        
                                    <div className="group-form">

                                        <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                                            <p className="box-form">
                                                <label htmlFor="sle_tipo_doc">Tipo de documento:</label>
                                                <select 
                                                className="form-item"
                                                name="sle_tipo_doc"
                                                onChange={(e) => document.getElementById('sle_num_doc').focus()}
                                                ref={register({
                                                    required: "Este campo es obligatorio"
                                                })}>
                                                    <option defaultValue={true} value="1">DNI</option>
                                                    <option value="2">Carnet de extranjeria</option>
                                                    <option value="3">Pasaporte</option>
                                                </select>
                                                {errors.sle_tipo_doc && <span className="fi-validator">{errors.sle_tipo_doc.message}</span>}
                                            </p>

                                            <p className="box-form">
                                                <label htmlFor="sle_num_doc">Número de Documento</label>
                                                <input type="text" id="sle_num_doc" name="sle_num_doc" className="form-item"                                                 
                                                ref={register({required: "Apellidos es obligatorio"})} />
                                                {errors.sle_num_doc && <span className="fi-validator">{errors.sle_num_doc.message}</span>}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="box-form box-file-img">
                                        <div className="title">Estatuto de la empresa:</div>
                                        <label className="form-item" id="sle_estatuto_place" htmlFor="sle_estatuto">Adjuntar archivo</label>
                                        <input type="file" id="sle_estatuto" name="sle_estatuto" className="form-item" accept=".doc, .jpg, .jpeg, .pdf"
                                        onChange={(e) => fileOnChange2(e)}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />  
                                        {errors.sle_estatuto && <span className="fi-validator">{errors.sle_estatuto.message}</span>}          
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


export default ConstitucionEmpresas