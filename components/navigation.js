import React, { useState } from 'react'
import NavigationItem from "./navigation-item"

const Navigation = (props) =>{

    
    const [navOptions, setNavOptions] = useState([
        {
            class: 'nav-item-home',
            name: 'Home',
            link: '/',
            childrens: [                              
            ]
        },
        {
            class: '',
            name: 'Tramites en linea',
            link: '',            
            childrens: [                
                {name: 'Asuntos No Contenciosos 31', link: ''},
                {name: 'Instrumentos Protocolares', link: ''},
                {name: 'Instrumentos Protocolares 2', link: ''}                
            ]
        },
        {
            class: '',
            name: 'Servicios',
            link: '',            
            childrens: [                
                {name: 'Asuntos No Contenciosos', link: ''},
                {name: 'Instrumentos Protocolares 22', link: ''},
                {name: 'Instrumentos Protocolares 4', link: ''}                
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
            childrens: [                              
            ]
        },
        {
            class: '',
            name: 'Consultas',
            link: '/consultas',            
            childrens: [                              
            ]
        },
        {
            class: '',
            name: 'Contactos',
            link: '/contactos',            
            childrens: [                              
            ]
        }
    ])


    const mapData = navOptions.map((item, index) => {return <NavigationItem key={index} class={item.class} name={item.name} link={item.link} childrens={item.childrens} />})        


    return (
        <nav className="nav">
            <ul>
                {mapData}                     
            </ul>
        </nav>
    )
}

export default Navigation