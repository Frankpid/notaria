import React, {useEffect, useState} from 'react'
import Link from "next/link"
import Router from 'next/router'
import Container from "../../../components/container"
import BreadCrumb from "../../../components/breadcrumb"
import ServiceListItem from "../../../components/services-list-item"
import Config from "../../../config"
import $ from "jquery"
import axios from "axios"


const ServicioCat = (props) => {    

    const [dataService, setDataService] = useState(props.listServiciosShort)      
    
    const capitalize = (s) => {        
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    useEffect(() => { 
        function searchInObject(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].linkCat === nameKey) {
                    return true
                }
            }
        }
        
        if( props.currentUrl != 'todos' ){
            let verifyUrl = searchInObject(props.currentUrl, dataService)
            !verifyUrl && (Router.push('/'))
        }            
    }, [])

    const dataCatList = dataService.map((item, index) => {
        return props.currentUrl == 'todos' ?
            <div className="box-cat">
                {typeof item.data != "undefined" && (
                    <>
                        <h2 className="title-cat">{capitalize(item.titleCat)}</h2>
                        <div className="row slideshow-type-1">            
                            { 
                                item.data.map((itemInner, index2) => {
                                    return <ServiceListItem key={index2} text={2} data={itemInner} link={item.linkCat + '/' + itemInner.linkCat} class={'col col-md-3 col-sm-6 col-xs-12'} />
                                })                        
                            }                                
                        </div>         
                    </>   
                )}
            </div>
        : props.currentUrl == item.linkCat ? 
            <div className="box-cat" style={{marginTop: '0'}}>  
                {typeof item.data != "undefined" && (
                    <>              
                        <div className="row slideshow-type-1">            
                            { 
                                item.data.map((itemInner, index2) => {
                                    return <ServiceListItem key={index2} text={2} data={itemInner} link={item.linkCat + '/' + itemInner.linkCat} class={'col col-md-3 col-sm-6 col-xs-12'} />
                                })                        
                            }                                
                        </div> 
                    </>   
                )}           
            </div>
        : ""
    })

    const doNavService = dataService.map((item, index) => {
        return typeof item.data != "undefined" && (
            <Link href={"/servicios/" + item.linkCat}>
                <a className={item.linkCat == props.currentUrl ? 'active' : ''}>{item.titleCat}</a>
            </Link>                    
        )
    })

    const doNavServiceMobile = dataService.map((item, index) => {
        return typeof item.data != "undefined" && (
            <option                     
                selected={item.linkCat == props.currentUrl ? true : false} 
                value={item.linkCat}>
                    {item.titleCat}
            </option>
        )
                             
    })

    const redirectCats = (e) => {        
        Router.push('/servicios/' + e.target.value)
    }    

    return (
        <Container namePage="servicios margins-body-type-2" titlePage="Servicios"> 
            
            <BreadCrumb />
            
            <div className="section list-nav-type-1">
                <div className="container-fluid wrapper-fluid">
                    <div className="list-nav">
                        <Link href="/servicios/todos">
                            <a className={props.currentUrl == 'todos' ? 'active' : ''}>Ver Todos</a>
                        </Link>
                        {doNavService}
                    </div>

                    <div className="list-nav mobile">
                        <select onChange={e=>redirectCats(e)}>
                            <option value='todos' selected={props.currentUrl == 'todos' ? true : false}>Ver Todos</option>
                            {doNavServiceMobile}
                        </select>
                    </div>
                </div>
            </div>            


            <div className="section services-list-style-1 margin-type-1"> 
                <div className="container-fluid wrapper-fluid">                               
                    {dataCatList}
                </div>
            </div>
            

        </Container>
    )
}


ServicioCat.getInitialProps = async (ctx) => {    
    const getServiciosShort = await axios(Config.API_PATH + '/servicios-short')
    return {
        currentUrl: ctx.query.namecat,
        listServiciosShort: getServiciosShort.data.listCategoriasShort
    }
}



export default ServicioCat