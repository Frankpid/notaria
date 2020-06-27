import React, {useEffect, useState} from 'react'
import Link from "next/link"
import Router from "next/router"
import Container from "../../components/container"
import BreadCrumb from "../../components/breadcrumb"
import Config from "../../config"
import Detail from "../../components/detail"
import FormalitiesList from "../../components/formalities-list"
import axios from "axios"

import AutorizacionDeViaje from "../../components/tramites-forms/autorizacion-de-viaje"
import ConstitucionEmpresa from "../../components/tramites-forms/constitucion-de-empresas"
import Poderes from "../../components/tramites-forms/poderes"
import TransferenciaInmobiliaria from "../../components/tramites-forms/transferencia-inmobiliaria"
import TransferenciaVehicular from "../../components/tramites-forms/transferencia-vehicular"


const TramitePage = (props) => {    
    
    const [dataTramite, setDataTramite] = useState([
        {
            titleCat: "Autorización de viaje",            
            linkCat: 'autorizacion-de-viaje',
            formBody: <AutorizacionDeViaje key={1} width="col-xs-12 col-md-9" />,
            data: [
                
            ]
        },
        {
            titleCat: "Constitución de empresas",            
            linkCat: 'constitucion-de-empresas',
            formBody: <ConstitucionEmpresa key={2} width="col-xs-12 col-md-9" />,
            data: [
                
            ]
        },
        {
            titleCat: "Poderes",            
            linkCat: 'poderes',
            formBody: <Poderes key={2} width="col-xs-12 col-md-9" />,
            data: [
                
            ]
        },
        {
            titleCat: "Transferencias inmobiliarias",            
            linkCat: 'transferencias-inmobiliarias',
            formBody: <TransferenciaInmobiliaria key={2} width="col-xs-12 col-md-9" />,            
            data: [
                
            ]
        },
        {
            titleCat: "Transferencias vehiculares",            
            linkCat: 'transferencias-vehiculares',
            formBody: <TransferenciaVehicular key={2} width="col-xs-12 col-md-9" />,            
            data: [
                
            ]
        }
    ])   

    const [verifyPage, setVerifyPage] = useState(false)

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
            setVerifyPage(verifyCatUrl)
            !verifyCatUrl && (Router.push('/'))
        }
    })


    const dataCurrent = dataTramite.filter(current => current.linkCat == props.currentUrl ) 


    const doNavLateral = <>
        <div className={"item item-1"}>
            <h2 className="title-list-detail">Trámites en linea</h2>
            <div className="data-list-detail">
                {props.listTramiteShort != undefined && props.listTramiteShort.map((item, index) => {
                    return <Link key={index} href={item.link}>
                        <a className={props.currentUrl == item.link ? "active" : ""}>{item.title}</a>
                    </Link> 
                })}
            </div>
        </div>
    </>



    return (
        <Container namePage="tramites inner margins-body-type-2" titlePage="Servicios">              

            <BreadCrumb />            

            {verifyPage && (
                <Detail class={"detail-style-1 service-detail"} dataList={doNavLateral} dataContent={dataCurrent[0].formBody} />
            )}              

        </Container>
    )
}


TramitePage.getInitialProps = async (ctx) => { 
    const result = await axios(Config.API_PATH + '/tramite-short')
    //console.log(result.data)    
    return {
        currentUrl: ctx.query.tramitePage,
        listTramiteShort: result.data.listTramite
    }
}



export default TramitePage