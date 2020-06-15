import Head from "next/head"
import HeaderTop from "./header-top"
import Header from "./header"
import Footer from "./footer"
import Config from "../config"


const Container = (props) => {    
    return (
        <div className="body-main">
            <Head>
                <title>Notaria Roman - {props.titlePage}</title>                
                <meta http-equiv="Cache-control" content="public" />    
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="¡Reserva tu cita en Notaria Roman!" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="stylesheet" href={Config.URL + "/common/css/main.min.css?v=1"}></link>              
            </Head>

            <Header />            

            <div className={"body " + props.namePage}>
                {props.children}
            </div>

            <Footer />
        </div>
    )
}

export default Container