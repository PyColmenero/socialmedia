var onlyOnce = true;
var onlyOnce1 = true;
var changeDev = false;

aside = $("#asideLeft");
detectMeasures();


var realDevide;
if(window.screen.width > window.screen.height){
    realDevide = true;
    aside.width( (widthWindow / 6) );
    
} else {
    realDevide = false;
    aside.css("left" , (-aside.width()));
    //console.log(realDevide);
    aside.width( (widthWindow / 6) );
    
}
$( document ).ready(function() {
    $("#asideLeft").css("display" , "block");
    //console.log("READY!");
});


window.addEventListener("resize", function(event){
    detectMeasures();
    //resizeAll();
});
   stateProfile = 0;
//ASIGNACIONES
function asignAll(){
    blackInAside = $("#blackInAside");
    pvs = $("#pvs");
    //NAVBAR
    iconNab = $("#iconNavb");
    navbar = $("#navBarMain");
    divNB1 = $("#divNB1");
    divNB2 = $("#divNB2");
    divNB3 = $("#divNB3");
    textButtonNB =$(".textButtonNB");

    nbhidden = $(".navBarNotHidden");
    nbnhidden = $(".navBarHidden");

    brandP = $("#brandP");
    //ASIDECONTENT
    asideContent = $("#asideContent");
        //ASIDE
        aside = $("#asideLeft");
        aside.width( "1px" )
            myAccount = $("#miAccount");
            myAccountDiv = $("#myAccountDiv");
            asidesType = $("#typesAside");
            contentLT = $("#contentLaptop");
        //CONTENT
        content = $("#content");
        writeSec = $("#writeSec");
            //WRITE
            writeDiv = $("#writeDiv");
            divUpWrite = $("#divUpWrite");

            //HOME
            commentDB = $(".commentDB")
            textContact = $(".textContact");
            tittle = $(".tittle");
            typeSec = $(".typeSec");
            textSec = $(".textSec");
            
            //PROFILE
            containerLR = $("#containerLR");
            
            registerForm = $("#registerForm")
            registerForm.css("width" , "20%")
            loginForm = $("#loginForm")
            loginForm.css("width" , "20%")
            
            logout = $("#logout")
            passwordF = $("#passwordF")
}


            
//RESIZE
function resizeAll(){
    
        //MOBILE    
        if(propotion){
            //NAVBAR
            
            navbar.height( (widthWindow / 10));
            divNB1.height( navbar.height() );
            divNB2.height( navbar.height() );
            divNB3.height( navbar.height() );
    
            textButtonNB.css("font-size" , (widthWindow * 0.03));
            brandP.css("font-size" , (widthWindow * 0.03));
    
            divNB1.css("visibility" , "visible");
            
            //ASIDE
    
            aside.width( (widthWindow /2) );
            aside.height( ((heightWindow - navbar.height())) );
    
            //CONTENT
            content.width( (widthWindow - (content.offsetWidth  - content.clientWidth)) );
            content.height( (heightWindow - navbar.height()) );
            //content.height( ((heightWindow - navbar.height()) - 4 ) );
            content.css("margin-left" , "0");
                // WRITE
                writeSec.width( (widthWindow - 2) );
                writeSec.height( (content.height() - 2) );
                writeDiv.css("width" , (widthWindow * 0.8));
               //console.log()
    
                //HOME
                commentDB.css("margin" , "5% 0")
                
                tittle.css("font-size" , (widthWindow * 0.04));
                typeSec.css("font-size" , (widthWindow * 0.03));
                textSec.css("font-size" , (widthWindow * 0.025));
                
                $(".textShowReply").css("font-size" , (widthWindow * 0.025));
                $(".textShowReply").css("padding" , "1% .5%"); //$(".textShowReply").
                $(".textReply").css("font-size" , (widthWindow * 0.025));
                $(".textReply").css("padding" , "1% .5%");
                $(".sendReplyP").css("font-size" , (widthWindow * 0.025));
                $(".sendReplyP").css("padding" , "1.5% 2.5%");
                
                //PORFILE
                //containerLR.css("width" , "90%")
                containerLR.css("display" , "block")
                
                registerForm.css("width" , "70%")
                registerForm.css("margin" , "auto")
                registerForm.css("margin-top" , "5%")
                
                loginForm.css("width" , "70%")
                loginForm.css("margin" , "auto")
                loginForm.css("margin-top" , "5%")
                
                loginForm.css("padding" , "2%")
                
                if(stateProfile != 2){
                    $("#profileDiv").css("display", "block")
                } else {
                    $("#profileDiv").css("display", "none")
                }
                
                logout.css("width" , "70%")
                logout.css("margin-top" , "5%")
                passwordF.css("width" , "70%")
                passwordF.css("margin-top" , "5%")
                
                $("#switchLR").css("width", "90%")
                $("#flexFormWrite").css("display", "block")

            writeDiv.css("margin-top" , "5%");
                $("#everyNotHere").css("width", "90%")
            aside.css("left" , ((-aside.width())*2));
            //console.log("Mobile");
        } else { //LAPTOP textContact
            if(realDevide == true)
            {
                //NAVBAR
                navbar.height( heightWindow / 15);
                divNB1.height( navbar.height() );
                divNB2.height( navbar.height() );
                divNB3.height( navbar.height() );
        
                textButtonNB.css("font-size" , (heightWindow * 0.03));
                brandP.css("font-size" , (heightWindow * 0.03));
                
                divNB1.css("visibility" , "hidden");
        
                //ASIDE
                aside.css("left" , "0");
                asideContent.height( (heightWindow - navbar.height()) );
                aside.width( (widthWindow / 6) );
                aside.height( ((heightWindow - navbar.height()) - 2)  );
                //asidesType.height( (((heightWindow - navbar.height()) - myAccount.width())) );
                
                //CONTENT
                content.width( ((widthWindow - aside.width()) - (2 + (content.offsetWidth  - content.clientWidth))) );
                content.height( (heightWindow - navbar.height()) );
                //content.height( ((heightWindow - navbar.height()) - 6 ) );
                content.css("margin-left" , (aside.width()));
        
                    // WRITE
                    writeDiv.css("width" , "60%");
                    writeSec.width( (content.width()- 2) );
                    writeSec.height( (((heightWindow - navbar.height()) - 28 )) );
                    writeDiv.css("margin-top" , ((heightWindow / 7.5) -(widthWindow*0.05)) )
                    
                    //HOME
                    $(".textReply").css("padding" , "1% 0");
                    $(".sendReplyP").css("padding" , "1% 0");
                    
                    $(".textShowReply").css("padding" , "1% 0");
                    tittle.css("font-size" , (heightWindow * 0.04));
                    typeSec.css("font-size" , (heightWindow * 0.02));
                    commentDB.css("margin" , "3% 0")
                    
                    //PROFILE
                    containerLR.css("display" , "flex")
                    
                    registerForm.css("width" , "30%")
                    registerForm.css("margin" , "auto")
                    registerForm.css("margin-top" , "2%")
                    
                    loginForm.css("width" , "30%")
                    //loginForm.height( (registerForm.height() - 4) )
                    //$("#formNotButton").height( ($("#formNotButton1").height() - 2) )
                    
                    loginForm.css("margin" , "auto")
                    loginForm.css("margin-top" , "2%")
                    
                    loginForm.css("padding" , "2%")
                    
                    if(stateProfile != 2){
                        $("#profileDiv").css("display", "flex")
                    } else {
                        $("#profileDiv").css("display", "none")
                    }
                    
                    logout.css("width" , "40%")
                    logout.css("margin-top" , "5%")
                    passwordF.css("width" , "40%")
                    passwordF.css("margin-top" , "5%")
                    
                    $("#switchLR").css("width", "70%")

                //console.log("Laptop");
                $("#everyNotHere").css("width", "50%")
                
                $("#flexFormWrite").css("display", "flex")
            }
        }
        asideContent.css( "margin-top" , (navbar.height() - pvs.height() ) );
    
        iconNab.width( navbar.height()/1.5 );
        $("#iconDiv").width( ( (iconNab.width()  ) ) );
    
        asidesType.height( ((heightWindow - (navbar.height() + myAccountDiv.height())) -2 ) );
    
        navbar.css("max-width" , widthWindow );
    
        
        $("#textAreaW").height( (divUpWrite.height() * 2) );
        $("#textAreaW").width( (divUpWrite.width() * 0.8) );
        
        blackInAside.width(widthWindow)
        blackInAside.height(heightWindow)
        
        /*$("#notificationDIV").height( (heightWindow - ($("#loginregisterform").height() + navbar.height() )))
       //console.log( $("#notificationDIV").height() )
       //console.log( heightWindow )
       //console.log( $("#loginregisterform").height() )
       //console.log( navbar.height() )*/
}

//DETECT MEASURES
function detectMeasures(){
    widthWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    heightWindow = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    if(widthWindow >= heightWindow){
        propotion = false;
        if(onlyOnce1){
            onlyOnce1 = false;
            changeDev = true;
        }
    }
    else{
        propotion = true;
        if(onlyOnce === true){ 
            aside.css("left" , (-aside.width())); 
            onlyOnce = false ;
        }
        if(onlyOnce1){
            onlyOnce1 = false;
            changeDev = false;
        }
    }
    //display
}

asignAll();
//resizeAll();