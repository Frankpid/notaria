import Container from "../components/container"
import SlideShow from "../components/slideshow"
import FormalitiesList from "../components/formalities-list"
import ServicesList from "../components/services-list"
import Appointment from "../components/appointment"
import Accounts from "../components/accounts"
import Confidence from "../components/confidence"
import ContactForm from "../components/contacto/form"


const Index = () => {
    return (
        <Container namePage="home" titlePage="Home">
            <SlideShow data={12} />
            <FormalitiesList />
            <ServicesList />
            <Appointment />
            <Accounts />
            <Confidence />
            <ContactForm width="col-md-12" />
        </Container>
    )
}


export default Index