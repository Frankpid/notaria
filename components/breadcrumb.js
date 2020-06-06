import React, {useEffect, useState} from 'react'
import Link from "next/link"

const BreadCrumb = (props) => {

    const [showBreadcrumb, setShowBreadCrumb] = useState([])

    useEffect(() => {

        let 
        url = window.location.href,
        urlArr = url.split('/')

        console.log(urlArr)
        
        setShowBreadCrumb(urlArr)

    }, [])


    return (
        <div className={"section breadcrumb " + props.class}>        
            <div className="container-fluid wrapper-fluid flex middle-xs">  
                <i className="icons icon-triangle-right-2"></i>              
                <div className="list">

                    {showBreadcrumb[0] && showBreadcrumb[2] &&
                        <Link href="/">
                            <a className="bc-index">
                                <i className="icons icon-bc-index"></i>
                                <span>Home</span>
                            </a>
                        </Link>
                    }

                    {showBreadcrumb[3] &&
                        <Link href={showBreadcrumb[3] == 'servicios' ? '/servicios/todos' : showBreadcrumb[3]}>
                            <a className="bci-next">
                                <i className="icons icon-right-small-2"></i>
                                <span>{showBreadcrumb[3] == 'servicios' ? 'Servicios' : showBreadcrumb[3].replace(/-/gi, ' ')}</span>
                            </a>
                        </Link>
                    }

                    {showBreadcrumb[4] &&
                        <Link href={showBreadcrumb[5] ? '../' + showBreadcrumb[4] : showBreadcrumb[4]}>
                            <a className="bci-next">
                                <i className="icons icon-right-small-2"></i>
                                <span>{showBreadcrumb[4].replace(/-/gi, ' ')}</span>
                            </a>
                        </Link>
                    }

                    {showBreadcrumb[5] &&
                        <Link href={showBreadcrumb[5]}>
                            <a className="bci-next">
                                <i className="icons icon-right-small-2"></i>
                                <span>{showBreadcrumb[5].replace(/-/gi, ' ')}</span>
                            </a>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb