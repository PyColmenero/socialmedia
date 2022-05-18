function asignHome(){
    textReply = $(".textReply")
    textShowReply = $(".textShowReply")
    pWriteR = $("#pWriteR")
    subjectP = $("#subjectP")
    tittle = $(".tittle")
    textSec = $(".textSec")
    buttonReplyReply = $(".buttonReplyReply")
    textShowReply = $(".textShowReply")
    sendReplyP = $(".sendReplyP")
    sendReplReplyP = $(".sendReplReplyP")
    
    profileB = $("#profileB")
    writeBNav = $("#writeBNav")
    homeBNav = $("#homeBNav")
}

function resizeAllHome(){
    asignHome()
    //MOBILE    
    if(propotion){
        
        //HOME
        commentDB.css("margin" , "5% 0")
        
        tittle.css("font-size" , (widthWindow * 0.045));
        typeSec.css("font-size" , (widthWindow * 0.03));
        typeSec.css("text-decoration" , "underline");
        textSec.css("font-size" , (widthWindow * 0.03));
        
        fontSButtons = 0.028;
        buttonReplyReply.css("font-size" , (widthWindow * fontSButtons));
        textShowReply.css("font-size" , (widthWindow * fontSButtons));
        textReply.css("font-size" , (widthWindow * fontSButtons));
        sendReplyP.css("font-size" , (widthWindow * fontSButtons));
        sendReplReplyP.css("font-size" , (widthWindow * fontSButtons));
        sendReplReplyP.css("font-size" , (widthWindow * fontSButtons));
        
        //$(".sendReplReplyP").css("font-size" , ( widthWindow * 0.025 ));
        $(".pReplyL").css("font-size" , ( widthWindow * 0.025 ));
        
        
        //textShowReply.css("font-size" , (widthWindow * 0.025));
        //textShowReply.css("padding" , "1% .5%");
        
        //$(".textShowReplyNULL").css("font-size" , (widthWindow * 0.025));
        pWriteR.css("font-size" , heightWindow * 0.025)
        
        $(".sendReplyP").css("font-size" , (widthWindow * 0.025));
        $(".sendReplyP").css("padding" , "0.5% 1.5%");
            
        $("#strechHome").css("width" , "100%")    
        
    } else { //LAPTOP
        if(realDevide == true)
        {
            
            profileB.css("font-size", "11")
            writeBNav.css("font-size", "11")
            homeBNav.css("font-size", "11")
            
            //HOME
            //textReply.css("padding-top" , ".8%");
            //textShowReply.css("padding" , ".8%");
            $(".sendReplyP").css("padding" , "1% 0");
            
            //$(".textShowReply").css("padding" , "1% 0");
            tittle.css("font-size" , (heightWindow * 0.04));
            typeSec.css("font-size" , (heightWindow * 0.02));
            
            commentDB.css("margin" , "3% 0")
            pWriteR.css("font-size" , heightWindow * 0.025)
            subjectP.css("font-size" , heightWindow * 0.022)
            
            $("#strechHome").css("width" , "70%")
            $("#strechHome").css("margin" , "auto")
            
        }
    } 
    
    
    $("#notification").width( $("#notification").height() )
    /*$(".svgLike").css("margin-top" , ( ( $(this).parent().height() - $(this).height() ) / 2 ) );
   //console.log(( ( $(".likeIcon").parent().height() - $(".svgLike").height() ) / 2 ) ) */
    
    blackInAside = $("#blackInAside")
    $("#homeSec").height( ((heightWindow - navbar.height()) - 4 ) )
    blackInAside.width(widthWindow)
    blackInAside.height(heightWindow)
    $("#contentDataBase").height( ( (heightWindow - (navbar.height() + $("#sectionYouAre").height())) - (heightWindow/(heightWindow/100)) ) )

    
    
}






