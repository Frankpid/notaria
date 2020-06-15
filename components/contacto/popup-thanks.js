import React, {useEffect, useState} from 'react'
import Link from "next/link"
import $ from "jquery"
import Config from "../../config"


const PopupThanks = (props) => {


    useEffect(() => {

        function pChangeHeight(){

            $('.item-popup').each(function(i, e){
        
                if( typeof $(this) != 'undefined' ){
        
                    if( $(this).length > 0 && $(this).is(':visible') ){
        
                        var popupHeight = $(this).find('.int-content').outerHeight()
        
                        if( popupHeight + 50 >= $(window).outerHeight() ){
        
                            $(this).addClass('p-change-height')
        
                        }else{
        
                            $(this).removeClass('p-change-height')
        
                        }
        
                    }
        
                }
        
            })
        
        }

        $(window).resize(function(){		
            pChangeHeight()
        })

        pChangeHeight()        

    }, [])



    return (

        <div className="item-popup">
            <div className="int-pscroll">
                <div className="int-content">
                    <div className="close-popup-2" onClick={props.eClick}><i className="icons icon-close-popup-2"></i></div>
                    <div className="int-body">
                        <img src={Config.URL + "/img/thank-social.png?v=2"} alt="thanks" />
                        {props.children}
                        <Link href="/">
                            <a className="popup-button"><img src={Config.URL + "/img/button-back-to-init.png?v=1"} alt="Bank to init" /></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default PopupThanks