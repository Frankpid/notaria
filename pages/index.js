import Container from "../components/container"
import SlideShow from "../components/slideshow"
import FormalitiesList from "../components/formalities-list"
import ServicesList from "../components/services-list"
import Appointment from "../components/appointment"
import Accounts from "../components/accounts"
import Confidence from "../components/confidence"
import ContactForm from "../components/contacto/form"
import axios from "axios"
import Api from "../config"


const Index = (props) => {

    return (
        <Container namePage="home" titlePage="Home">
            <SlideShow data={props.listSlideshow} />
            <FormalitiesList data={props.listTramiteShort} />
            <ServicesList data={props.listServiciosShort} />
            <Appointment />
            <Accounts />
            <Confidence data={props.listPartners} />
            <ContactForm width="col-md-12" />
        </Container>
    )
}

Index.getInitialProps = async (ctx) => {
    const getSlideShow = await axios(Api.API_PATH + '/slideshow')
    const getTramiteShort = await axios(Api.API_PATH + '/tramite-short')
    const getServiciosShort = await axios(Api.API_PATH + '/servicios-short')
    const getPartners = await axios(Api.API_PATH + '/partners')
    return { 
        listSlideshow: getSlideShow.data.listSlideshow,
        listTramiteShort: getTramiteShort.data.listTramite,
        listServiciosShort: getServiciosShort.data.listCategoriasShort,
        listPartners: getPartners.data.listPartners
    }
}


export default Index