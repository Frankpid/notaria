import Link from "next/link"
import React, {useState, useEffect} from "react"


const Detail = (props) => {           

    //console.log(props)

    return (        
        <div className={"section " + props.class}>            

            <div className="container-fluid wrapper-fluid">

                <div className="flex between-xs top-xs">                

                    <div className="col-1">                        
                        {props.dataList}
                    </div>

                    <div className="col-2">
                        {props.dataContent}
                    </div>

                </div> 

            </div>           

        </div>
    )
}


/*
Detail.getInitialProps = async (ctx) => {    
    return {
        catNameUrl: ctx.query.namecat,
        currentUrl: ctx.query.detalle
    }
}
*/

export default Detail