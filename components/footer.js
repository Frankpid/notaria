import Link from "next/link"
import React, {useState, useEffect} from "react"
import axios from "axios"
import Config from "../config"


const Footer = () => {

    const [showAccordionData, setShowAccodionData] = useState({accordionItem: null})

    const [dataTramiteList, setDataTramiteList] = useState([])

    const [dataServicioList, setDataServicioList] = useState([])

    const capitalize = (s) => {        
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    useEffect(() => {
        let aScript = document.createElement('script')
        aScript.type = 'text/javascript'
        aScript.src = " https://js.stripe.com/v3/"
  
        document.head.appendChild(aScript)
        aScript.onload = () => {

            let body = document.body, html = document.documentElement
            let htmlHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )
            let screenHeight = window.screen.height
        
            document.getElementsByClassName('scroll-up')[0].addEventListener('click', function(event){
                event.preventDefault()
                window.scrollTo({                    
                    'top': 0
                })
            })

            function debounce(func, wait = 10, immediate = true) {
                let timeout
                return function() {
                    let context = this, args = arguments
                    let later = function() {
                        timeout = null
                        if (!immediate) func.apply(context, args)
                    }

                    let callNow = immediate && !timeout
                    clearTimeout(timeout)
                    timeout = setTimeout(later, wait)
                    if (callNow) func.apply(context, args)
                }
            }                        

            var scrollPos = 0
            const nav = document.querySelector('.scroll-up')

            function checkPosition() {
                let windowY = window.scrollY                
                if (windowY > screenHeight) {
                    // Scrolling UP                    
                    nav.classList.add('is-visible')
                    nav.classList.remove('is-hidden')
                } else {
                    // Scrolling DOWN
                    nav.classList.add('is-hidden')
                    nav.classList.remove('is-visible')
                }
                scrollPos = windowY
            }

            window.addEventListener('scroll', debounce(checkPosition))
            //window.addEventListener('scroll', checkPosition)
        }

        const getTramite = async () => {
            const result = await axios(Config.API_PATH + '/tramite-short')
            //console.log(result.data)
            setDataTramiteList(result.data)

            const result2 = await axios(Config.API_PATH + '/servicios-mini-short')
            setDataServicioList(result2.data)
        }

        getTramite()
    }, [])


    function setShow(name){      
        const newStatus = showAccordionData.accordionItem == name ? null : name
        setShowAccodionData({accordionItem: newStatus}) 
    }    


    return (        
        <>
            <footer className="footer">
                <div className="container-fluid wrapper-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-lg-6 flex column-xs footer-nav-1">

                            <div className="col-xs-12 col-sm-4 col-md-5">
                                <img src="../../img/logo-footer.png?v=1" />

                                <div className="office-hour">
                                    <p>Horario de atención:</p>
                                    <p>9:00am - 6:00pm (Verano)</p>
                                    <p>9:00am - 7:00pm (Resto del año)</p>
                                </div>

                                <div className="footer-list-data">
                                    <a href="tel:017151588" className="phone">
                                        <i className="icons icon-phone"></i>
                                        <span className="list-parent">
                                            <span>Central telefónica:</span>
                                            <span className="num-phone">(01) + 7151588</span>                                        
                                        </span>
                                    </a>

                                    <a href="#" className="city">
                                        <i className="icons icon-place"></i>
                                        <span className="list-parent">
                                            <span>Dirección:</span>
                                            <span>Avenida Javier Prado Este, 1451</span>
                                        </span>
                                    </a>

                                    <a href="mailto:informes@notariaroman.com" className="mail">
                                        <i className="icons icon-mail"></i>
                                        <span className="list-parent">
                                            <span>Escribenos a:</span>
                                            <span>Informes@notariaroman.com</span>
                                        </span>
                                    </a>
                                </div>

                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-3">
                                <div className="footer-list-style-1">
                                    <h2 className="title">Trámites en línea</h2>
                                    <div className="list-footer services-list-footer">
                                        {
                                            dataTramiteList.listTramite != undefined && (dataTramiteList.listTramite.map((item, index) => {
                                                return <Link key={index} href={'/tramites-en-linea/'+item.link}>
                                                    <a>{item.title}</a>
                                                </Link>
                                            }))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 do-line">
                                <div className="footer-list-style-1">
                                    <h2 className="title">Servicios</h2>
                                    <div className="list-footer formalities-list-footer accordion">  
                                        
                                        {
                                            dataServicioList.listCategoriasShort != undefined && (
                                                dataServicioList.listCategoriasShort.map((item, index) => {
                                                    return typeof item.data != "undefined" && (
                                                        <div className="accordion-item">
                                                            <button className="accordion-button" onClick={() => setShow('acc'+index)}>
                                                                <span>{item.titleCat}</span>
                                                                <i className="icons icon-arrow-down-small-2"></i>
                                                            </button>

                                                            {showAccordionData.accordionItem == 'acc'+index && (
                                                                <div className="accordion-data list-footer">
                                                                    {
                                                                        item.data.map((item2, index2) => {
                                                                            return <Link key={index+'-'+index2} href={'/servicios/' + item2.linkCat}>
                                                                                    <a>{capitalize(item2.title)}</a>
                                                                                </Link>
                                                                            
                                                                        })
                                                                    }                                                            
                                                                </div>
                                                            )}
                                                        </div>
                                                    )
                                                })
                                            )
                                        }                                        

                                    </div>
                                </div>
                            </div>
                            
                        </div>


                        <div className="col-xs-12 col-md-10 col-lg-6 flex footer-nav-list-2">

                            <div className="footer-row">
                                <div className="footer-list-style-1">
                                    <h2 className="title">
                                        <Link href="/nuestra-notaria">
                                            <a>Nuestra notaria</a>
                                        </Link>
                                    </h2>
                                </div>
                            </div>

                            <div className="footer-row">
                                <div className="footer-list-style-1">
                                    <h2 className="title">
                                        <Link href="/nuestro-equipo">
                                            <a>Nuestro Equipo</a>
                                        </Link>
                                    </h2>
                                </div>
                            </div>

                            <div className="footer-row">
                                <div className="footer-list-style-1">
                                    <h2 className="title">Consultas</h2>
                                </div>
                            </div>

                            <div className="footer-row">
                                <div className="footer-list-style-1">
                                    <h2 className="title">
                                        <Link href="/contacto">
                                            <a>Contacto</a>
                                        </Link>
                                    </h2>
                                </div>
                            </div>

                            <div className="footer-row">
                                <div className="footer-list-style-1">
                                    <h2 className="title">Reserva de citas</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                <div className="container-fluid wrapper-fluid footer-nav-2">
                    <div className="flex top-xs middle-sm footer-nav-3">
                        <div className="col-md-7 flex between-md start-xs middle-sm footer-nav-3-child">
                            <p className="copyright">©Todos los derechos reservados 2020 Notaría Roman</p>
                            <div className="legals">
                                <Link href="/terminos-y-condiciones">
                                    <a target="_blank">Terminos y condiciones</a>       
                                </Link>

                                <Link href="/politicas-de-privacidad">
                                    <a target="_blank">Politica de privicidad</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-5 flex end-md start-xs middle-sm">
                            <a href="https://libiak.com/" target="_blank">
                                <div className="brand-2">
                                    <span>Desarrollado por</span>
                                    <img src="../../img/libiak.png?v=1" alt="Libiak" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </footer>
            <button className="scroll-up"></button>
        </>
    )
}

export default Footer