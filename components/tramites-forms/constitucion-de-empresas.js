import React, {useEffect, useState} from 'react'
import Link from "next/link"
import {useForm} from "react-hook-form"
import $ from "jquery"
import PopupThanks from "../contacto/popup-thanks"
import Config from "../../config"
import FormPayment from "../../components/form-payment"


const ConstitucionEmpresas = (props) => {

    const {register, errors, handleSubmit} = useForm()
    const [showForm, setShowForm] = useState(false)
    const [formBody, setFormBody] = useState(true)


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


    const onSubmit = data => {        
        setShowForm(true)
        alert(JSON.stringify(data))
    }
    
    const triggerClosePopup = () => {
        setShowForm(false)
    }
    
    
    const ViajeInternacionalForm = <>

        <div className="form-text-line">Datos del padre</div>  

        <div className="box-form">
            <label htmlFor="dp_nombre1">Nombres completos:</label>
            <input type="text" id="dp_nombre1" name="dp_nombre1" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.dp_nombre1 && <span className="fi-validator">{errors.dp_nombre1.message}</span>}
        </div> 

        <div className="box-form">
            <label htmlFor="dp_nacionalidad">Nacionalidad</label>
            <input type="text" id="dp_nacionalidad" name="dp_nacionalidad" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.dp_nacionalidad && <span className="fi-validator">{errors.dp_nacionalidad.message}</span>}
        </div>    
                                        
        <div className="group-form">

            <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                <p className="box-form">
                    <label htmlFor="dp_tipo_doc">Tipo de documento:</label>
                    <select 
                    className="form-item"
                    name="dp_tipo_doc"
                    onChange={(e) => document.getElementById('numDoc1').focus()}
                    ref={register({
                        required: "Este campo es obligatorio"
                    })}>
                        <option defaultValue={true} value="1">DNI</option>
                        <option value="2">Carnet de extranjeria</option>
                        <option value="3">Pasaporte</option>
                    </select>
                    {errors.dp_tipo_doc && <span className="fi-validator">{errors.dp_tipo_doc.message}</span>}
                </p>

                <p className="box-form">
                    <label htmlFor="dp_num_doc">Número de Documento</label>
                    <input type="text" id="dp_num_doc" name="dp_num_doc" className="form-item"                                                 
                    ref={register({required: "Apellidos es obligatorio"})} />
                    {errors.dp_num_doc && <span className="fi-validator">{errors.dp_num_doc.message}</span>}
                </p>

            </div>

        </div>

        <div className="box-form">
            <label htmlFor="dp_domicilio">Domicilio:</label>
            <input type="text" id="dp_domicilio" name="dp_domicilio" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.dp_domicilio && <span className="fi-validator">{errors.dp_domicilio.message}</span>}
        </div>



        <div className="form-text-line">Datos del madre</div>  

        <div className="box-form">
            <label htmlFor="dma_nombre">Nombres completos:</label>
            <input type="text" id="dma_nombre" name="dma_nombre" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.dma_nombre && <span className="fi-validator">{errors.dma_nombre.message}</span>}
        </div> 

        <div className="box-form">
            <label htmlFor="dma_nacionalidad">Nacionalidad</label>
            <input type="text" id="dma_nacionalidad" name="dma_nacionalidad" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.dma_nacionalidad && <span className="fi-validator">{errors.dma_nacionalidad.message}</span>}
        </div>    
                                        
        <div className="group-form">

            <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                <p className="box-form">
                    <label htmlFor="dma_tipo_doc">Tipo de documento:</label>
                    <select 
                    className="form-item"
                    name="dma_tipo_doc"
                    onChange={(e) => document.getElementById('numDoc').focus()}
                    ref={register({
                        required: "Este campo es obligatorio"
                    })}>
                        <option defaultValue={true} value="1">DNI</option>
                        <option value="2">Carnet de extranjeria</option>
                        <option value="3">Pasaporte</option>
                    </select>
                    {errors.dma_tipo_doc && <span className="fi-validator">{errors.dma_tipo_doc.message}</span>}
                </p>

                <p className="box-form">
                    <label htmlFor="dma_num_doc">Número de Documento</label>
                    <input type="text" id="dma_num_doc" name="dma_num_doc" className="form-item"                                                 
                    ref={register({required: "Apellidos es obligatorio"})} />
                    {errors.dma_num_doc && <span className="fi-validator">{errors.dma_num_doc.message}</span>}
                </p>

            </div>

        </div>

        <div className="box-form">
            <label htmlFor="dma_domicilio">Domicilio:</label>
            <input type="text" id="dma_domicilio" name="dma_domicilio" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.dma_domicilio && <span className="fi-validator">{errors.dma_domicilio.message}</span>}
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
            <label htmlFor="dv_lugar_viaje">Lugar del viaje:</label>
            <input type="text" id="dv_lugar_viaje" name="dv_lugar_viaje" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.dv_lugar_viaje && <span className="fi-validator">{errors.dv_lugar_viaje.message}</span>}
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

        <div className="box-form box-file-img">
            <div className="title">Comprobante de pago (opcional):</div>
            <label className="form-item" id="comprobante_img_place" htmlFor="comprobante_img">Adjuntar voucher</label>
            <input type="file" id="comprobante_img" name="comprobante_img" className="form-item" placeholder="Detalle con quién viaja y otros" 
            accept=".jpg, .jpeg, .png"
            onChange={(e) => document.getElementById('comprobante_img_place').innerHTML = e.target.value.split(/(\\|\/)/g).pop()}
            />            
        </div>


        <button type="submit" className="button">Enviar trámite</button>

    </>


    
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
                                                onChange={(e) => document.getElementById('numDoc1').focus()}
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
                                            <option value="2">Casado o divorciado</option>
                                            <option value="3">Viudo</option>
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
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
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
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}/>                                        
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
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}/>                                        
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
                                                onChange={(e) => document.getElementById('numDoc1').focus()}
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
                                        onChange={(e) => document.getElementById('sle_estatuto_place').innerHTML = e.target.value.split(/(\\|\/)/g).pop()}
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
                                        onChange={(e) => document.getElementById('comprobante_img_place').innerHTML = e.target.value.split(/(\\|\/)/g).pop()}
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