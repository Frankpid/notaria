import React, { useState, useEffect } from 'react'
import NavigationItem from "./navigation-item"

const Navigation = (props) =>{

    
    const [navOptions, setNavOptions] = useState([
        {
            class: 'nav-item-home',
            name: 'Home',
            link: '/',
            target: false,
            childrens: [                              
            ]
        },
        {
            class: '',
            name: 'Tramites en linea',
            link: '/tramites-en-linea',    
            target: false,        
            childrens: [                
                {name: 'Autorización de viaje', link: '/tramites-en-linea/autorizacion-de-viaje'},
                {name: 'Constitución de empresas', link: '/tramites-en-linea/constitucion-de-empresas'},
                {name: 'Poderes', link: '/tramites-en-linea/poderes'},
                {name: 'Transferencias inmobiliarias', link: '/tramites-en-linea/transferencias-inmobiliarias'},
                {name: 'Transferencias vehiculares', link: '/tramites-en-linea/transferencias-vehiculares'} 
            ]
        },
        {
            class: '',
            name: 'Servicios',
            link: '/servicios',      
            target: false,      
            childrens: [                
                {name: 'Todos', link: '/servicios/todos'},                
                {name: 'Instrumentos Protocolares', link: '/servicios/instrumentos-protocolares'},
                {name: 'Asuntos No Contenciosos', link: '/servicios/asuntos-no-contenciosos'},
                {name: 'Instrumentos Extra Protocolares', link: '/servicios/instrumentos-extra-protocolares'}                
            ]
        },
        {
            class: '',
            name: 'Nuestra Notaria',
            link: '/nuestra-notaria',            
            childrens: [                              
            ]
        },
        {
            class: '',
            name: 'Nuestro Equipo',
            link: '/nuestro-equipo',
            target: false,            
            childrens: [                              
            ]
        },
        {
            class: '',
            name: 'Consultas',
            link: 'http://consultas.notariaroman.pe', 
            target: true,           
            childrens: [                              
            ]
        },
        {
            class: '',
            name: 'Contacto',
            link: '/contacto', 
            target: false,           
            childrens: [                              
            ]
        }
    ])


    const [currentActive, setCurrentActive] = useState(false)


    useEffect(() => {   

        function searchInObject(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].link === nameKey) {
                    return true
                }
            }
        }

        function searchInMultiObject(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                for (var j = 0; j < myArray[i].childrens.length; j++) {
                    if (myArray[i][j].link === nameKey) {
                        return myArray[i][j].link
                    }
                }
            }
        }

        let arrCurrentPath = window.location.href.split('/')
        
        setCurrentActive(arrCurrentPath[3])

    }, [])


    const mapData = navOptions.map((item, index) => {return <NavigationItem classActive={item.link == '/'+currentActive ? 'active' : ''} target={item.target} key={index} class={item.class} name={item.name} link={item.link} childrens={item.childrens} />})        


    return (
        <nav className="nav">
            <ul>
                {mapData}                     
            </ul>
        </nav>
    )
}

export default Navigation