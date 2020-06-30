import React, {useEffect, useState} from 'react'
import Link from "next/link"
import Router from "next/router"
import Container from "../../../../components/container"
import BreadCrumb from "../../../../components/breadcrumb"
import ServiceListItem from "../../../../components/services-list-item"
import Config from "../../../../config"
import Detail from "../../../../components/detail"
import FormalitiesList from "../../../../components/formalities-list"
import axios from "axios"
import ReactHtmlParser from 'react-html-parser'


const ServicioCat = (props) => {  
    
    //console.log(props)
    
    const [dataService, setDataService] = useState(props.listServiciosShort) 
    const [dataTramite, setDataTramite] = useState([]) 

    const folderName = props.getDataServicio[0]['data'][0]['folder_name']
    const img = props.getDataServicio[0]['data'][0]['object_img'].length>2 ? JSON.parse(props.getDataServicio[0]['data'][0]['object_img'])[0] : ""
    const pdf = props.getDataServicio[0]['data'][0]['object_pdf'].length>2 ? JSON.parse(props.getDataServicio[0]['data'][0]['object_pdf'])[0] : ""
    const dataInner = ReactHtmlParser(props.getDataServicio[0]['data'][0]['object_descripcion'])
    

    const dataCurrent = <>
        <div className="header-parent-title flex middle-xs between-md">        
            <h2>{props.getDataServicio[0]['data'][0]['nombre']}</h2>
            <a href={Config.URL_BACK+'/uploads/'+folderName+'/'+pdf} className="button-detail with-bg-img" target={"_blank"} download></a>
        </div>

        <div className="detail-body">     
            <div className="inner-data">                
                <img style={{marginBottom: 20}} src={Config.URL_BACK + "/uploads/"+ folderName +"/"+ img} className="banner-detail" />   
                {dataInner}
            </div>  
            <p>Tenga en cuenta que en determinados actos y/o contratos deberá acreditar ante el Notario el pago de tributos; ello como requisito previo a la elevación de la escritura pública.</p>                     
        </div>

        <a href={Config.URL_BACK+'/uploads/'+folderName+'/'+pdf} className="button-detail with-bg-img" style={{marginTop: "37px"}} target={"_blank"} download></a>
    </>

    useEffect(() => {      
        
        const getTramiteShort = async () => {
            const dataTramite = await axios(Config.API_PATH + '/tramite-short')
            setDataTramite(dataTramite.data)
        }     
        
        getTramiteShort()
        
        function searchInObject(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].linkCat === nameKey) {
                    return true
                }
            }
        }

        function searchInMultiObject(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                for (var j = 0; j < myArray[i]["data"].length; j++) {
                    if (myArray[i]["data"][j].linkCat === nameKey) {
                        return true
                    }
                }                
            }
        }
        
        if( props.currentUrl != 'todos' ){
            let verifyCatUrl = searchInObject(props.catNameUrl, dataService)
            !verifyCatUrl && (Router.push('/'))

            let verifyCurrentUrl = searchInMultiObject(props.currentUrl, dataService)
            !verifyCurrentUrl && (Router.push('/'))
        }

    }, [])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const doNavLateral = dataService && dataService.map((item, index) => {
        return <div key={index} className={"item item-"+index}>
            {
                typeof item.data != "undefined" && (
                    <>
                        <h2 className="title-list-detail">{jsUcfirst(item.titleCat)}</h2>
                        <div className="data-list-detail">
                            {item.data.map((item2, index2) => {
                                return <Link key={index + "-" + index2} href={"../" + item.linkCat + "/" + item2.linkCat}>
                                    <a className={props.catNameUrl + props.currentUrl == item.linkCat + item2.linkCat ? "active" : ""}>{jsUcfirst(item2.title)}</a>
                                </Link>
                            })}
                        </div>
                    </>
                )
            }            
        </div>
    })



    return (
        <Container namePage="servicios inner margins-body-type-2" titlePage="Servicios"> 
            
            <BreadCrumb />            

            <Detail class={"detail-style-1 service-detail"} dataList={doNavLateral} dataContent={dataCurrent} />

            <FormalitiesList data={dataTramite} />

        </Container>
    )

    function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
}


ServicioCat.getInitialProps = async (ctx) => { 
    let catNameUrl = ctx.query.namecat
    let currentUrl = ctx.query.detalle

    const getServiciosShort = await axios(Config.API_PATH + '/servicios-short')  
    const getDataServicio = await axios(Config.API_PATH + '/servicio-article?catid='+catNameUrl+'&id='+currentUrl)   
    return {
        catNameUrl: catNameUrl,
        currentUrl: currentUrl,
        listServiciosShort: getServiciosShort.data.listCategoriasShort,
        getDataServicio: getDataServicio.data.dataServicio
    }
}



export default ServicioCat