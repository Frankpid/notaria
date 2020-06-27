import Container from "../components/container"
import MissionVision from "../components/nuestra-notaria/mission-vision"
import OurValues from "../components/nuestra-notaria/our-values"
import BreadCrumb from "../components/breadcrumb"
import ListTeam from "../components/nuestro-equipo/list-team"
import Config from "../config"
import axios from "axios"


const OutTeam = (props) => {

    const {nombre, descripcion, folder_name, object_img, object_img_rpv} = props.listNuestraNotaria[0]

    const img = object_img.length>2 ? JSON.parse(object_img)[0] : ''
    const img_rpv = object_img_rpv.length>2 ? JSON.parse(object_img_rpv)[0] : ''

    const cssImg = `
        .section.snt-2 {
            background-image: url("${Config.URL_BACK + '/uploads/' + folder_name + '/' + img}")
        }
        @media (max-width: 630px){
            .section.snt-2 {
                background-image: url("${Config.URL_BACK + '/uploads/' + folder_name + '/' + img_rpv}")
            }
        }        
    `

    return (
        <Container namePage="nuestro-equipo margins-body-type-2" titlePage="Nuestra Notaria">

            <BreadCrumb />

            <style>
                {cssImg}
            </style>

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
                                <h2><strong>{nombre}</strong> <br />Notario</h2>
                            </div>                            
                            <p className="description">{descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>

            <ListTeam data={props.listTeam} />
                        
        </Container>
    )
}


OutTeam.getInitialProps = async (ctx) => {
    const getNuestraNotaria = await axios(Config.API_PATH + '/nnria')
    const getTeam = await axios(Config.API_PATH + '/team')
    return { 
        listNuestraNotaria: getNuestraNotaria.data.listNnria,
        listTeam: getTeam.data.listTeam,        
    }
}



export default OutTeam