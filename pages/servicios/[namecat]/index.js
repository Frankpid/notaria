import React, {useEffect, useState} from 'react'
import Link from "next/link"
import Router from 'next/router'
import Container from "../../../components/container"
import BreadCrumb from "../../../components/breadcrumb"
import ServiceListItem from "../../../components/services-list-item"
import Config from "../../../config"
import $ from "jquery"


const ServicioCat = (props) => {    


    const [dataService, setDataService] = useState([
        {
            titleCat: "Instrumentos protocolares",            
            linkCat: 'instrumentos-protocolares',
            data: [
                {
                    title: ['<h2>Instrumentos Protocolares 1</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-protocolares-1'
                },
                {
                    title: ['<h2>Instrumentos Protocolares 2</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-protocolares-2'
                },
                {
                    title: ['<h2>Instrumentos Protocolares 3</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-protocolares-3'
                },
                {
                    title: ['<h2>Instrumentos Protocolares 4</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-protocolares-4'
                },
                {
                    title: ['<h2>Instrumentos Protocolares 5</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-protocolares-5'
                },
                {
                    title: ['<h2>Instrumentos Protocolares 6</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-protocolares-6'
                }
            ]
        },
        {
            titleCat: "Asuntos no contenciosos",            
            linkCat: 'asuntos-no-contenciosos',
            data: [
                {
                    title: ['<h2>Asuntos no contenciosos 1</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'asuntos-no-contenciosos-1'
                },
                {
                    title: ['<h2>Asuntos no contenciosos 2</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'asuntos-no-contenciosos-2'
                },
                {
                    title: ['<h2>Asuntos no contenciosos 3</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'asuntos-no-contenciosos-3'
                },
                {
                    title: ['<h2>Asuntos no contenciosos 4</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'asuntos-no-contenciosos-4'
                },
                {
                    title: ['<h2>Asuntos no contenciosos 5</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'asuntos-no-contenciosos-5'
                },
                {
                    title: ['<h2>Asuntos no contenciosos 6</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'asuntos-no-contenciosos-6'
                }
            ]
        },
        {
            titleCat: "Instrumentos extra protocolares",            
            linkCat: 'instrumentos-extra-protocolares',
            data: [
                {
                    title: ['<h2>Instrumentos Extra Protocolares 1</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-extra-protocolares-1'
                },
                {
                    title: ['<h2>Instrumentos Extra Protocolares 2</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-extra-protocolares-2'
                },
                {
                    title: ['<h2>Instrumentos Extra Protocolares 3</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-extra-protocolares-3'
                },
                {
                    title: ['<h2>Instrumentos Extra Protocolares 4</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-extra-protocolares-4'
                },
                {
                    title: ['<h2>Instrumentos Extra Protocolares 5</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-extra-protocolares-5'
                },
                {
                    title: ['<h2>Instrumentos Extra Protocolares 6</h2>'],
                    description: 'Lorem Ipsum is simply dummy text of the printing loren ipsum loren ipsum simply dummy text of the.',
                    linkCat: 'instrumentos-extra-protocolares-6'
                }
            ]
        }
    ])    


    const dataCatList = dataService.map((item, index) => {
        return props.currentUrl == 'todos' ?
            <div className="box-cat">
                <h2 className="title-cat">{item.titleCat}</h2>
                <div className="row slideshow-type-1">            
                    { 
                        item.data.map((itemInner, index2) => {
                            return <ServiceListItem key={index2} data={itemInner} link={item.linkCat + '/' + itemInner.linkCat} class={'col col-md-3 col-sm-6'} />
                        })                        
                    }                                
                </div>            
            </div>
        : props.currentUrl == item.linkCat ? 
            <div className="box-cat" style={{marginTop: '0'}}>                
                <div className="row slideshow-type-1">            
                    { 
                        item.data.map((itemInner, index2) => {
                            return <ServiceListItem key={index2} data={itemInner} link={item.linkCat + '/' + itemInner.linkCat} class={'col col-md-3 col-sm-6'} />
                        })                        
                    }                                
                </div>            
            </div>
        : ''
    })


    const doNavService = dataService.map((item, index) => {
        return <Link href={"/servicios/" + item.linkCat}>
            <a className={item.linkCat == props.currentUrl ? 'active' : ''}>{item.titleCat}</a>
        </Link>                    
    })


    const doNavServiceMobile = dataService.map((item, index) => {
        return  <option                     
                    selected={item.linkCat == props.currentUrl ? true : false} 
                    value={item.linkCat}>
                        {item.titleCat}
                </option>
                             
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
    return {currentUrl: ctx.query.namecat}
}



export default ServicioCat