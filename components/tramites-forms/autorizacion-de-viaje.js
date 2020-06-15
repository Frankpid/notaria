import React, {useEffect, useState} from 'react'
import Link from "next/link"
import {useForm} from "react-hook-form"
import $ from "jquery"
import PopupThanks from "../contacto/popup-thanks"



const TramiteForm = (props) => {


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


    const ViajeNacionalForm = <>

        <div className="form-text-line">Datos del padre o madre</div>  

        <div className="box-form">
            <label htmlFor="nombre1">Nombres completos:</label>
            <input type="text" id="nombre1" name="nombre1" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.nombre1 && <span className="fi-validator">{errors.nombre1.message}</span>}
        </div> 

        <div className="box-form">
            <label htmlFor="nacionalidad1">Nacionalidad</label>
            <input type="text" id="nacionalidad1" name="nacionalidad1" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.nacionalidad1 && <span className="fi-validator">{errors.nacionalidad1.message}</span>}
        </div>    
                                        

        <div className="group-form">

            <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                <p className="box-form">
                    <label htmlFor="tipoDoc1">Tipo de documento:</label>
                    <select 
                    className="form-item"
                    name="tipoDoc1"
                    onChange={(e) => document.getElementById('numDoc').focus()}
                    ref={register({
                        required: "Este campo es obligatorio"
                    })}>
                        <option defaultValue={true} value="1">DNI</option>
                        <option value="2">Carnet de extranjeria</option>
                        <option value="3">Pasaporte</option>
                    </select>
                    {errors.tipoDoc1 && <span className="fi-validator">{errors.tipoDoc1.message}</span>}
                </p>

                <p className="box-form">
                    <label htmlFor="numDoc1">Número de Documento</label>
                    <input type="text" id="numDoc1" name="numDoc1" className="form-item"                                                 
                    ref={register({required: "Apellidos es obligatorio"})} />
                    {errors.numDoc1 && <span className="fi-validator">{errors.numDoc1.message}</span>}
                </p>

            </div>

        </div>

        <div className="box-form">
            <label htmlFor="dir1">Domicilio:</label>
            <input type="text" id="dir1" name="dir1" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.dir1 && <span className="fi-validator">{errors.dir1.message}</span>}
        </div>


        <div className="form-text-line">Datos del menor</div>

        <div className="box-form">
            <label htmlFor="nombre2">Nombres completos:</label>
            <input type="text" id="nombre2" name="nombre2" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.nombre2 && <span className="fi-validator">{errors.nombre2.message}</span>}
        </div> 

        <div className="group-form">

            <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                <p className="box-form">
                    <label htmlFor="edad1">Edad:</label>
                    <select 
                    className="form-item"
                    name="edad1"
                    ref={register({
                        required: "Este campo es obligatorio"
                    })}>
                        <option defaultValue={true} value="0">Menor a 1 año</option>
                        {Array.apply(1, Array(17)).map(function (x, i) {
                            return <option value={i+1}>{i+1 <= 9 ? '0' + (i+1) + ' años' : (i+1) + ' años'}</option>
                        })}
                    </select>
                    {errors.edad1 && <span className="fi-validator">{errors.edad1.message}</span>}
                </p>

            </div>

        </div>


        <div className="form-text-line">Datos del viaje</div>

        <div className="box-form">
            <label htmlFor="lugar1">Lugar del viaje:</label>
            <input type="text" id="lugar1" name="lugar1" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.lugar1 && <span className="fi-validator">{errors.lugar1.message}</span>}
        </div> 

        <div className="box-form">
            <label htmlFor="direccion1">Duración:</label>
            <input type="text" id="direccion1" name="direccion1" className="form-item"                                         
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.direccion1 && <span className="fi-validator">{errors.direccion1.message}</span>}
        </div> 

        <div className="box-form">
            <label htmlFor="observacion1">Observaciones:</label>
            <input type="text" id="observacion1" name="observacion1" className="form-item" 
            placeholder="Detalle con quién viaja y otros"                                        
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.observacion1 && <span className="fi-validator">{errors.observacion1.message}</span>}
        </div> 


        <div className="form-text-line">Datos de contacto</div>

        <div className="box-form">
            <label htmlFor="nombre3">Nombres completos:</label>
            <input type="text" id="nombre3" name="nombre3" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.nombre3 && <span className="fi-validator">{errors.nombre3.message}</span>}
        </div> 

        <div className="box-form">
            <label htmlFor="telefono1">Teléfonos:</label>
            <input type="text" id="telefono1" name="telefono1" className="form-item"
            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]+/ig, '')}                                          
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.telefono1 && <span className="fi-validator">{errors.telefono1.message}</span>}
        </div> 

        <div className="box-form">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" className="form-item" 
            placeholder="Detalle con quién viaja y otros"                                        
            ref={register({
                required: "Este campo es obligatorio",
                pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Ingresar un Email valido"
                }
            })}
            />
            {errors.email && <span className="fi-validator">{errors.email.message}</span>}
        </div> 

        <button type="submit" className="button">Enviar trámite</button>

    </>
    
    
    const ViajeInternacionalForm = <>

        <div className="form-text-line">Datos del padre</div>  

        <div className="box-form">
            <label htmlFor="nombre1">Nombres completos:</label>
            <input type="text" id="nombre1" name="nombre1" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.nombre1 && <span className="fi-validator">{errors.nombre1.message}</span>}
        </div> 

        <div className="box-form">
            <label htmlFor="nacionalidad1">Nacionalidad</label>
            <input type="text" id="nacionalidad1" name="nacionalidad1" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.nacionalidad1 && <span className="fi-validator">{errors.nacionalidad1.message}</span>}
        </div>    
                                        
        <div className="group-form">

            <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                <p className="box-form">
                    <label htmlFor="tipoDoc1">Tipo de documento:</label>
                    <select 
                    className="form-item"
                    name="tipoDoc1"
                    onChange={(e) => document.getElementById('numDoc').focus()}
                    ref={register({
                        required: "Este campo es obligatorio"
                    })}>
                        <option defaultValue={true} value="1">DNI</option>
                        <option value="2">Carnet de extranjeria</option>
                        <option value="3">Pasaporte</option>
                    </select>
                    {errors.tipoDoc1 && <span className="fi-validator">{errors.tipoDoc1.message}</span>}
                </p>

                <p className="box-form">
                    <label htmlFor="numDoc1">Número de Documento</label>
                    <input type="text" id="numDoc1" name="numDoc1" className="form-item"                                                 
                    ref={register({required: "Apellidos es obligatorio"})} />
                    {errors.numDoc1 && <span className="fi-validator">{errors.numDoc1.message}</span>}
                </p>

            </div>

        </div>

        <div className="box-form">
            <label htmlFor="dir1">Domicilio:</label>
            <input type="text" id="dir1" name="dir1" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.dir1 && <span className="fi-validator">{errors.dir1.message}</span>}
        </div>



        <div className="form-text-line">Datos del madre</div>  

        <div className="box-form">
            <label htmlFor="nombre1">Nombres completos:</label>
            <input type="text" id="nombre1" name="nombre1" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.nombre1 && <span className="fi-validator">{errors.nombre1.message}</span>}
        </div> 

        <div className="box-form">
            <label htmlFor="nacionalidad1">Nacionalidad</label>
            <input type="text" id="nacionalidad1" name="nacionalidad1" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.nacionalidad1 && <span className="fi-validator">{errors.nacionalidad1.message}</span>}
        </div>    
                                        
        <div className="group-form">

            <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                <p className="box-form">
                    <label htmlFor="tipoDoc1">Tipo de documento:</label>
                    <select 
                    className="form-item"
                    name="tipoDoc1"
                    onChange={(e) => document.getElementById('numDoc').focus()}
                    ref={register({
                        required: "Este campo es obligatorio"
                    })}>
                        <option defaultValue={true} value="1">DNI</option>
                        <option value="2">Carnet de extranjeria</option>
                        <option value="3">Pasaporte</option>
                    </select>
                    {errors.tipoDoc1 && <span className="fi-validator">{errors.tipoDoc1.message}</span>}
                </p>

                <p className="box-form">
                    <label htmlFor="numDoc1">Número de Documento</label>
                    <input type="text" id="numDoc1" name="numDoc1" className="form-item"                                                 
                    ref={register({required: "Apellidos es obligatorio"})} />
                    {errors.numDoc1 && <span className="fi-validator">{errors.numDoc1.message}</span>}
                </p>

            </div>

        </div>

        <div className="box-form">
            <label htmlFor="dir1">Domicilio:</label>
            <input type="text" id="dir1" name="dir1" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.dir1 && <span className="fi-validator">{errors.dir1.message}</span>}
        </div>



        <div className="form-text-line">Datos del menor</div>

        <div className="box-form">
            <label htmlFor="nombre2">Nombres completos:</label>
            <input type="text" id="nombre2" name="nombre2" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.nombre2 && <span className="fi-validator">{errors.nombre2.message}</span>}
        </div> 

        <div className="group-form">

            <div className="g-form-col g-form-col-2 g-form-col-2-type-1">

                <p className="box-form">
                    <label htmlFor="edad1">Edad:</label>
                    <select 
                    className="form-item"
                    name="edad1"
                    ref={register({
                        required: "Este campo es obligatorio"
                    })}>
                        <option defaultValue={true} value="0">Menor a 1 año</option>
                        {Array.apply(1, Array(17)).map(function (x, i) {
                            return <option value={i+1}>{i+1 <= 9 ? '0' + (i+1) + ' años' : (i+1) + ' años'}</option>
                        })}
                    </select>
                    {errors.edad1 && <span className="fi-validator">{errors.edad1.message}</span>}
                </p>

            </div>

        </div>



        <div className="form-text-line">Datos del viaje</div>

        <div className="box-form">
            <label htmlFor="lugar1">Lugar del viaje:</label>
            <input type="text" id="lugar1" name="lugar1" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.lugar1 && <span className="fi-validator">{errors.lugar1.message}</span>}
        </div> 

        <div className="box-form">
            <label htmlFor="direccion1">Duración:</label>
            <input type="text" id="direccion1" name="direccion1" className="form-item"                                         
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.direccion1 && <span className="fi-validator">{errors.direccion1.message}</span>}
        </div> 

        <div className="box-form">
            <label htmlFor="observacion1">Observaciones:</label>
            <input type="text" id="observacion1" name="observacion1" className="form-item" 
            placeholder="Detalle con quién viaja y otros"                                        
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.observacion1 && <span className="fi-validator">{errors.observacion1.message}</span>}
        </div> 



        <div className="form-text-line">Datos de contacto</div>

        <div className="box-form">
            <label htmlFor="nombre3">Nombres completos:</label>
            <input type="text" id="nombre3" name="nombre3" className="form-item" 
            onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.nombre3 && <span className="fi-validator">{errors.nombre3.message}</span>}
        </div> 

        <div className="box-form">
            <label htmlFor="telefono1">Teléfonos:</label>
            <input type="text" id="telefono1" name="telefono1" className="form-item"
            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]+/ig, '')}                                          
            ref={register({
                required: "Este campo es obligatorio"
            })}
            />
            {errors.telefono1 && <span className="fi-validator">{errors.telefono1.message}</span>}
        </div> 

        <div className="box-form">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" className="form-item" 
            placeholder="Detalle con quién viaja y otros"                                        
            ref={register({
                required: "Este campo es obligatorio",
                pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Ingresar un Email valido"
                }
            })}
            />
            {errors.email && <span className="fi-validator">{errors.email.message}</span>}
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
                                <h2><strong>Autorización de viaje</strong></h2>                                
                            </div>
                            

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="block-form"> 

                                    <div className="box-form">
                                        <label htmlFor="tipoViaje">Por favor seleccióna el <strong> tipo de autorización</strong></label>
                                        <select 
                                        className="form-item"
                                        name="tipoViaje"
                                        id="tipoViaje"
                                        onChange={(e) => setFormBody(formBody ? false : true)}
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}>
                                            <option defaultValue={true} value="1">Viaje nacional</option>
                                            <option value="2">Viaje Internaciónal</option>
                                        </select>
                                        {errors.tipoViaje && <span className="fi-validator">{errors.tipoViaje.message}</span>}
                                    </div>

                                    
                                    {formBody ? ViajeNacionalForm : ViajeInternacionalForm}
                                    

                                </div>     

                            </form>                           


                        </div>
                    </div>

            </div>

        </>
        
    )
}


export default TramiteForm