import React, { useState, useEffect } from 'react';
import Link from "next/link"


const NavigationItem = (props) => {    
    

    const [showNavitem, setShowNavItem] = useState(false)
    const [navItems, setNavItems] = useState([])


    useEffect(() => {
        if( props.childrens.length > 2 ){
            setNavItems([...props.childrens])            
        }                  
    }, [])    

   

    const verifyClass = (classs) => {
        let res = ''
        if( classs != undefined ){                        
            res += classs + ' '
        }

        if( props.childrens.length > 0 ){                        
            res += 'with-subnav'
        }
        return res
    }


    const verifyLink = () => {        
        let res
        if(props.childrens.length > 0){
            res = <a className={verifyClass(props.class)}>
                <span>{props.name}</span>
            </a>
        }else{
            res = <Link href={props.link}>
                <a className={verifyClass(props.class)}>
                    <span>{props.name}</span>
                </a>
            </Link>
        }

        return res
    }


    const subNavList = navItems.map((currentElem, index) => {
        return <Link href={currentElem.link}>
            <a>{currentElem.name}</a>
        </Link>
    })


    return (
        <li onMouseEnter={() => !setShowNavItem(true)} onMouseLeave={() => setShowNavItem(false)} className={props.classActive}>            
            {verifyLink()}
            { showNavitem && props.childrens.length > 2 && (
                <div className="sub-nav">   
                    {subNavList}                                      
                </div>
            )}   
        </li>
    )
}



export default NavigationItem