import Link from "next/link"
import Navigation from "./navigation"
import NavigationSmall from "./navigation-small"

const Header = () =>{
    return (        
        <div className="header-top">
            <div className="container-fluid wrapper-fluid">
                <div className="row middle-xs around-xs end-sm header-top-list">
                    <a href="tel:017151588" className="phone">
                        <i className="icons icon-phone"></i>
                        <span>(01) + 7151588</span>
                    </a>

                    <a href="#" className="city">
                        <i className="icons icon-place"></i>
                        <span>Avenida Javier Prado Este, 1451</span>
                    </a>

                    <a href="mailto:informes@notariaroman.com" className="mail">
                        <i className="icons icon-mail"></i>
                        <span>Informes@notariaroman.com</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header