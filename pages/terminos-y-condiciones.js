import React, {useEffect, useState} from 'react'
import Container from "../components/container"
import BreadCrumb from "../components/breadcrumb"
import {useForm} from "react-hook-form"
import $ from "jquery"
import Form from "../components/contacto/form"


const Tyc = () => {

    return (
        <Container namePage="tyc margins-body-type-2" titlePage="Términos y condiciones"> 
            
  
            <BreadCrumb />            

            <div className="section tyc">
                <div className="container-fluid wrapper-fluid flex center-xs">
                    <div className="flex col-md-11 center-xs">
                        <div className="caption caption-static caption-type-1 caption-type-2">
                            <div className="parent-title-2">
                                <h2>Términos y condiciones</h2>
                            </div>

                            <div className="item-body start-xs">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                <h3>Lorem Ipsum is simply título</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                <h3>Lorem Ipsum is simply título</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                <h3>Lorem Ipsum is simply título</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Container>
    )
}


export default Tyc