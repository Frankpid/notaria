import React, {useEffect, useState} from 'react'
import Link from "next/link"
import Router from "next/router"
import Container from "../../components/container"
import BreadCrumb from "../../components/breadcrumb"
import Config from "../../config"
import Detail from "../../components/detail"
import FormalitiesList from "../../components/formalities-list"

import AutorizacionDeViaje from "../../components/tramites-forms/autorizacion-de-viaje"


const TramitePage = (props) => {    
    
    
    const [dataTramite, setDataTramite] = useState([
        {
            titleCat: "Autorización de viaje",            
            linkCat: 'autorizacion-de-viaje',
            formBody: <AutorizacionDeViaje width="col-md-9" />,
            data: [
                
            ]
        },
        {
            titleCat: "Constitución de empresas",            
            linkCat: 'constitucion-de-empresas',
            data: [
                
            ]
        },
        {
            titleCat: "Poderes",            
            linkCat: 'poderes',
            data: [
                
            ]
        },
        {
            titleCat: "Transferencias inmobiliarias",            
            linkCat: 'transferencias-inmobiliarias',
            data: [
                
            ]
        },
        {
            titleCat: "Transferencias vehiculares",            
            linkCat: 'transferencias-vehiculares',
            data: [
                
            ]
        }
    ])   


    useEffect(() => {        
        function searchInObject(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].linkCat === nameKey) {
                    return true
                }
            }
        }

        
        if( props.currentUrl != 'todos' ){
            let verifyCatUrl = searchInObject(props.currentUrl, dataTramite)
            !verifyCatUrl && (Router.push('/'))
        }
    })


    const dataCurrent = dataTramite.filter(current => current.linkCat == props.currentUrl ) 


    const doNavLateral = <>
        <div className={"item item-1"}>
            <h2 className="title-list-detail">Trámites en linea</h2>
            <div className="data-list-detail">
                {dataTramite.map((item, index) => {
                    return <Link key={index} href={item.linkCat}>
                        <a className={props.currentUrl == item.linkCat ? "active" : ""}>{item.titleCat}</a>
                    </Link> 
                })}
            </div>
        </div>
    </>



    return (
        <Container namePage="tramites inner margins-body-type-2" titlePage="Servicios">              
            
            <BreadCrumb />            

            <Detail class={"detail-style-1 service-detail"} dataList={doNavLateral} dataContent={dataCurrent[0].formBody} />


        </Container>
    )
}


TramitePage.getInitialProps = async (ctx) => {    
    return {
        currentUrl: ctx.query.tramitePage
    }
}



export default TramitePage