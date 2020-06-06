import Container from "../components/container"
import MissionVision from "../components/nuestra-notaria/mission-vision"
import OurValues from "../components/nuestra-notaria/our-values"
import BreadCrumb from "../components/breadcrumb"
import ListTeam from "../components/nuestro-equipo/list-team"


const OutTeam = () => {
    return (
        <Container namePage="nuestro-equipo margins-body-type-2" titlePage="Nuestra Notaria">

            <BreadCrumb />

            <div className="section title-type-1">
                <div className="container-fluid wrapper-fluid caption-type-1 caption-type-2 caption-static"> 
                    <div className="parent-title-2 center-xs">
                        <h2>Nuestro <strong>equipo</strong></h2>
                    </div>
                </div>
            </div>

            <div className="section snt-2">
                <div className="container-fluid wrapper-fluid">                    
                    <div className="row end-xs">
                        <div className="caption caption-static caption-type-1 caption-type-2 col-md-6 start-xs equal-margin-1">
                            <div className="parent-title-2">
                                <h2><strong>Manuel A. Román Olivas</strong> <br />Notario</h2>                                
                            </div>                            
                            <p className="description">"Les doy la bienvenida a nuestra Notaria. Es un placer para nosotros atenderlos  de manera física y virtual con la  con la misma dedicación y esmero profesional.  Nuestra razon de ser  será siempre brindarles el mejor servicio en el mas corto tiempo, cuidando y enmarcando todas nuestras acciones dentro de la ley, para finalmente brindarles la seguridad juridica que necesitan desde la comodidad de su casa o en nuestras oficinas" .</p>
                        </div>
                    </div>
                </div>
            </div>

            <ListTeam />
                        
        </Container>
    )
}


export default OutTeam