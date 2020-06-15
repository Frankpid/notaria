import React, {useEffect, useState} from 'react'
import Container from "../components/container"
import BreadCrumb from "../components/breadcrumb"
import {useForm} from "react-hook-form"
import $ from "jquery"
import Form from "../components/contacto/form"


const Contacto = () => {


    return (
        <Container namePage="contacto" titlePage="Contacto"> 
            
            <div className="wrap-contact with-bg-img" style={{backgroundImage: `url(../../img/bg-contact.jpg?v=1)`}}>
                <BreadCrumb class="color-type-2" />

                <Form width="col-md-11" />

            </div>
            
            <div className="section parent-iframe-map">        
                <iframe className="iframe-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.338285634791!2d-77.0138707526461!3d-12.088978027808444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c87f3f7c8e81%3A0x7c10e569568872bc!2sNotar%C3%ADa%20Manuel%20Rom%C3%A1n%20Olivas!5e0!3m2!1ses!2spe!4v1591313588979!5m2!1ses!2spe" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>

        </Container>
    )
}


export default Contacto