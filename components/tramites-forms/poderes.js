import React, {useEffect, useState} from 'react'
import Link from "next/link"
import {useForm} from "react-hook-form"
import $ from "jquery"
import PopupThanks from "../contacto/popup-thanks"
import Config from "../../config"
import FormPayment from "../../components/form-payment"


const Poderes = (props) => {

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
                                <h2><strong>Poderes</strong></h2>                                
                            </div>
                            

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="block-form">  

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
                                                onChange={(e) => document.getElementById('numDoc1').focus()}
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
                                                onChange={(e) => document.getElementById('numDoc1').focus()}
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


export default Poderes