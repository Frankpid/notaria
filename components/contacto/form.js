import React, {useEffect, useState} from 'react'
import Link from "next/link"
import {useForm} from "react-hook-form"
import $ from "jquery"
import arrCountryList from "./countries"
import PopupThanks from "./popup-thanks"



const Form = (props) => {


    const {register, errors, handleSubmit} = useForm()
    const [showForm, setShowForm] = useState(false)


    useEffect(() => {

        var country = 'Peru', countryCode = "+51"

        $(document).click(function(e){                      
            if( $(e.target).closest('.container-flag').length<=0 && !$(e.target).hasClass('flat-item') ) $('.list-flag').fadeOut(150)
        })

        let listFlat = ''
        let flagSelect = ''

        $.each(arrCountryList, function(i, e){        
            let codeLowerCase = e.code.toLowerCase(), dialCode = e.dial_code, countryName = e.name
            
            listFlat += "<div class='flat-item'>"
                listFlat += "<img src='https://www.countryflags.io/"+codeLowerCase+"/flat/48.png'>"
                listFlat += "<span class='country-name'>"+countryName+"</span>"
                listFlat += "<span class='dial-code'>("+dialCode+")</span>"
            listFlat += "</div>"

            if( i == 145 ){ 
                flagSelect += "<img src='https://www.countryflags.io/"+codeLowerCase+"/flat/48.png'>"           
            }
        })

        $('.flag').html(flagSelect)
        $('.list-flag').html(listFlat)


        $('.flag').click(function(){
            $('.list-flag').stop().fadeToggle(150)
        })
        $('.list-flag').delegate('.flat-item', 'click', function(e){
            e.preventDefault()
            e.stopPropagation()

            var imgAttr = $(this).find('img').attr('src')

            $('.flag').find('img').attr('src', imgAttr)
            $('.list-flag').fadeOut(150)
            $('#phone').focus()

            country = arrCountryList[$(this).index()]['name']
            countryCode = arrCountryList[$(this).index()]['dial_code']
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
    

    return (

        <>            
            { showForm && (
                <PopupThanks eClick={triggerClosePopup}>
                    <h3 className="title">¡Gracias!</h3>
                    <p className="description">Gracias por ponerte en contacto con <strong>Notaría Román.</strong> <br />Uno de nuestros asesores se comunicará con usted a la brevedad.</p>
                </PopupThanks>
            )}

            <div className="section contact-form with-bg-img" style={{backgroundImage: `url(../../img/bg-contact.jpg?v=1)`}}>
                <div className="container-fluid wrapper-fluid">
                    <div className="row">
                        <div className={"caption caption-static caption-type-1 caption-type-2 container-fluid wrapper-fluid " + props.width}>
                            <div className="parent-title-2 start-xs">
                                <h2><strong>Estamos a tu servicio</strong></h2>
                                <h3>Si tiene alguna consulta, comuníquese con nosotros y nos pondremos en contacto lo antes posible.</h3>
                            </div>
                            

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="block-form">                

                                    <div className="group-form">

                                        <div className="g-form-col g-form-col-3">

                                            <p className="box-form">
                                                <label htmlFor="name">Nombres completos:</label>
                                                <input type="text" id="name" name="name" className="form-item"
                                                onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                                ref={register({required: 'Nombres es obligatorio'})} />
                                                {errors.name && <span className="fi-validator">{errors.name.message}</span>}
                                            </p>

                                            <p className="box-form">
                                                <label htmlFor="lastname">Apellidos</label>
                                                <input type="text" id="lastname" name="lastname" className="form-item" 
                                                onInput={(e) => e.target.value = e.target.value.replace(/[^ a-záéíóúüñ]+/ig,"")}
                                                ref={register({required: "Apellidos es obligatorio"})} />
                                                {errors.lastname && <span className="fi-validator">{errors.lastname.message}</span>}
                                            </p>

                                            <p className="box-form parent-phone">
                                                <label htmlFor="phone">Teléfono:</label>
                                                <input type="text" id="phone" name="phone" className="form-item" maxLength={9} 
                                                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]+/ig, '')}                                                  
                                                ref={register({      
                                                    required: "Teléfono es obligatorio",                                                  
                                                    minLength: {
                                                        value: 7,
                                                        message: "Error, mínimo 7 Caracteres"
                                                    },
                                                    maxLength: {
                                                        value: 9,
                                                        message: "Error, máximo 9 Caracteres"
                                                    }                                            
                                                })} />
                                                {errors.phone && <span className="fi-validator">{errors.phone.message}</span>}

                                                <span className="container-flag">
                                                    <span className="flag"><img src="https://www.countryflags.io/pe/flat/48.png" /></span>
                                                </span>
                                                <span className="list-flag" style={{display: "none"}}></span>                      
                                            </p>

                                        </div>


                                        <div className="g-form-col g-form-col-3">
                                            <p className="box-form">
                                                <label htmlFor="email">Email:</label>
                                                <input type="text" id="email" name="email" className="form-item" 
                                                ref={register({
                                                    required: "Email es obligatorio",
                                                    pattern: {
                                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: "Ingresar un Email valido"
                                                    }
                                                })}
                                                />
                                                {errors.email && <span className="fi-validator">{errors.email.message}</span>}
                                            </p>

                                            <p className="box-form parent-dni">
                                                <label htmlFor="dni">DNI:</label>
                                                <input type="text" id="dni" name="dni" className="form-item" maxLength={8}
                                                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]+/ig, '')}                                                 
                                                ref={register({      
                                                    required: "DNI es obligatorio",                                                  
                                                    minLength: {
                                                        value: 8,
                                                        message: "Error, mínimo 8 Caracteres"
                                                    },
                                                    maxLength: {
                                                        value: 8,
                                                        message: "Error, máximo 8 Caracteres"
                                                    },
                                                    pattern: {
                                                        value: /^[0-9\b]+$/,
                                                        message: "Error, no es un numero"
                                                    }                                             
                                                })} />
                                                {errors.dni && <span className="fi-validator">{errors.dni.message}</span>}
                                            </p>
                                        </div>

                                    </div>


                                    <div className="box-form">
                                        <label htmlFor="comments">Comentarios e indicaciones adicionales:</label>
                                        <span>Por favor indique el detalle de su trámite o algún dato que tenga que tener en cuenta nuestros abogados como número <br/>de Kardex , placa, precio o valor del vehículo, entre otros.</span>
                                        <input type="text" id="comments" name="comments" className="form-item" 
                                        ref={register({
                                            required: "Este campo es obligatorio"
                                        })}
                                        />
                                        {errors.comments && <span className="fi-validator">{errors.comments.message}</span>}
                                    </div>


                                    <div className="box-form box-form-check">
                                        <p className="i-check i-check-1">
                                            <input id="tyc" name="tyc" type="checkbox" defaultChecked
                                            ref={register({
                                                required: true,
                                                register: true
                                            })}
                                            />
                                            <label htmlFor="tyc">
                                                <span className="first-item">Acepto</span>
                                                <Link href="terminos-y-condiciones">
                                                    <a className="other-color"> los términos y condiciones</a>
                                                </Link>
                                            </label>
                                        </p>

                                        <p className="i-check i-check-2">
                                            <input id="pdp" name="pdp" type="checkbox" defaultChecked
                                            ref={register({
                                                required: true,
                                                register: true
                                            })}
                                            />
                                            <label htmlFor="pdp">
                                                <span className="first-item">Acepto</span>
                                                <Link href="politicas-de-privacidad">
                                                    <a className="other-color"> las politicas de privacidad</a>
                                                </Link>
                                            </label>
                                        </p>
                                    </div>

                                    <div style={{marginTop: "12px"}}>
                                        {errors.tyc && <p style={{color: "#f00", fontSize: "12px"}}>Terminos y condiciones es requerido.</p>}
                                        {errors.pdp && <p style={{color: "#f00", fontSize: "12px"}}>Politicas de privacidad es requerido.</p>}
                                    </div>

                                    <button type="submit" className="button">Enviar</button>

                                </div>     

                            </form>                           


                        </div>
                    </div>
                </div>
            </div>

        </>
        
    )
}


export default Form