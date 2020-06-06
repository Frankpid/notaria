import React, {useEffect, useState} from 'react'
import Link from "next/link"
import Container from "../../../../components/container"
import BreadCrumb from "../../../../components/breadcrumb"
import ServiceListItem from "../../../../components/services-list-item"
import Config from "../../../../config"


const ServicioCat = (props) => {    


    return (
        <Container namePage="servicios margins-body-type-2" titlePage="Servicios"> 

            {console.log(props)}
            <BreadCrumb />
            

        </Container>
    )
}


ServicioCat.getInitialProps = async (ctx) => {    
    return {
        catNameUrl: ctx.query.namecat,
        currentUrl: ctx.query.detalle
    }
}



export default ServicioCat