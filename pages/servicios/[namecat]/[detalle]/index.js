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


const ServicioCat = (props) => {    
    
    const [dataService, setDataService] = useState(props.listServiciosShort) 
    const [dataTramite, setDataTramite] = useState([])  

    const dataCurrent = <>
        <div className="header-parent-title flex middle-xs between-md">        
            <h2>Escritura pública</h2>
            <a href="#" className="button-detail with-bg-img"></a>
        </div>

        <div className="detail-body">     
            <div className="inner-data">
                <img src={Config.URL + "/img/detail-img.jpg?v=2"} className="banner-detail" />    
                <p>Para la elevación a Escritura Pública existen requisitos generales (aplicables a todos los actos o contratos) y otros especiales que corresponden sólo a algunos actos o contratos.</p>  

                <h3>Beneficios</h3>
                <p>Una Escritura Pública tiene el beneficio de otorgar fecha cierta a todos los actos y contratos. El Notario corrobora la identidad de los contratantes y su contrato se conserva para siempre en su Archivo Notarial, pudiendo obtener copias a través de Testimonios y Partes Notariales, todas las veces que sean necesarias.</p>

                <h3>Requisitos generales</h3>
                <p>Una Escritura Pública tiene el beneficio de otorgar fecha cierta a todos los actos y contratos. El Notario corrobora la identidad de los contratantes y su contrato se conserva para siempre en su Archivo Notarial, pudiendo obtener copias a través de Testimonios y Partes Notariales, todas las veces que sean necesarias.</p>

                <ul>
                    <li>Minuta suscrita por todos los contratantes y autorizada por Abogado Colegiado. Ello excepto en los siguientes casos:</li>
                    <ul>
                        <li>Otorgamiento, aceptación, sustitución, revocación y renuncia del poder;</li>
                        <li>Renuncia de nacionalidad;</li>
                        <li>Nombramiento de tutor y curador en los casos que puede hacerse por escritura pública;</li>
                        <li>Reconocimiento de hijos;</li>
                        <li>Autorización para el matrimonio de menores de edad otorgada por quienes ejercen la patria potestad;</li>
                        <li>Aceptación expresa o renuncia de herencia;</li>
                        <li>Declaración jurada de bienes y rentas;</li>
                        <li>Declaración de voluntad de constitución de pequeña o microempresa; entre otros.</li>
                    </ul>
                    <li>Documento Nacional de Identidad (Original y Copia Simple) de los contratantes. El Documento Nacional debe encontrarse vigente (revisar su fecha de caducidad). Si desea mayor información sobre el DNI, hacer clic en el siguiente vínculo: <a href="#">http://www.reniec.gob.pe</a></li>
                    <li>En el caso de Extranjeros, presentarán Carnet de Extranjería vigente (Original y Copia) , con el pago de la tasa del año en curso o Pasaporte (Original y Copia) con visación que lo autorice a celebrar negocios en el territorio nacional. Debe recordarse que actualmente se está efectuando el cambio del Carnet Extranjería Manual por uno de emisión mecanizada. Si desea mayor información sobre el Carnet de Extranjería, su canje y las autorizaciones de visado del Pasaporte hacer clic en el siguiente vínculo: <a href="#">http://www.migraciones.gob.pe</a></li>
                    <li>En caso que alguno de los contratantes actúe a través de representantes (apoderado) acompañar Certificado de Vigencia de Poder expedido por la <strong>SUNARP.</strong></li>
                    <li>En caso que alguno de los contratantes actúe en representación de una persona jurídica, acompañar Certificado de Vigencia de Poder expedido por la <strong>SUNARP.</strong></li>
                    <li>Si se solicita constancia o fe de entrega notarial de un cheque, acompañar copia del cheque a ser entregado.</li>
                </ul>
            </div>  
            <p>Tenga en cuenta que en determinados actos y/o contratos deberá acreditar ante el Notario el pago de tributos; ello como requisito previo a la elevación de la escritura pública.</p>                     
        </div>

        <a href="#" className="button-detail with-bg-img" style={{marginTop: "37px"}}></a>
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


    const doNavLateral = dataService && dataService.map((item, index) => {
        return <div key={index} className={"item item-"+index}>
            <h2 className="title-list-detail">{item.titleCat}</h2>
            <div className="data-list-detail">
                {item.data.map((item2, index2) => {
                    return <Link key={index + "-" + index2} href={"../" + item.linkCat + "/" + item2.linkCat}>
                        <a className={props.catNameUrl + props.currentUrl == item.linkCat + item2.linkCat ? "active" : ""}>{item2.title}</a>
                    </Link>
                })}
            </div>
        </div>
    })



    return (
        <Container namePage="servicios inner margins-body-type-2" titlePage="Servicios"> 
            
            <BreadCrumb />            

            <Detail class={"detail-style-1 service-detail"} dataList={doNavLateral} dataContent={dataCurrent} />

            <FormalitiesList data={dataTramite} />

        </Container>
    )
}


ServicioCat.getInitialProps = async (ctx) => { 
    const getServiciosShort = await axios(Config.API_PATH + '/servicios-short')   
    return {
        catNameUrl: ctx.query.namecat,
        currentUrl: ctx.query.detalle,
        listServiciosShort: getServiciosShort.data.listCategoriasShort
    }
}



export default ServicioCat