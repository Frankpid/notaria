import React, {useState, useEffect} from "react"
import Link from "next/link"
import Navigation from "./navigation"
import NavigationSmall from "./navigation-small"
import HeaderTop from "./header-top"

const Header = () =>{

    const [handleTogglenav, setHandleToggleNav] = useState({class: 'nav-hide'})


    const toggleNav = () => {
        const toggleClass = handleTogglenav.class == 'nav-hide' ? 'nav-show' : 'nav-hide'
        setHandleToggleNav({class: toggleClass})
    }

    return (  
        <>                  
            <header className="header">
                <HeaderTop />
                <div className={"container-fluid wrapper-fluid " + handleTogglenav.class}>
                    <button className="button-nav-mobile" onClick={() => toggleNav()}>
                        <i className="icons icon-button-nav-mobile"></i>
                    </button>
                    <div className="row between-xs middle-xs wrapper-nav">                    
                        <Link href="/">
                            <a className="parent-logo"><img className="logo" src="./img/logo.png?v=1" /></a>
                        </Link>

                        <div className="navigation-small-2">
                            <NavigationSmall />
                        </div>

                        <div className="row between-md parent-nav">
                            <Navigation />
                            <NavigationSmall />
                        </div>
                    </div>
                </div>
            </header>
            <div className="space-header"></div>
        </>
    )
}

export default Header