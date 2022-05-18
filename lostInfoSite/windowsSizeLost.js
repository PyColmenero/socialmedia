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
    
    aside.css("display" , "none")
    setTimeout(function(){
        aside.css("display" , "block");
    } , 500)
}

window.addEventListener("resize", function(event){
    detectMeasures();
    asignAll()
    resizeAll();
});
    
//ASIGNACIONES
function asignAll(){
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

        //CONTENT
        content = $("#content");
        writeSec = $("#writeSec");
            //WRITE
            writeDiv = $("#writeDiv");
            divUpWrite = $("#divUpWrite");


}

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
    
            //CONTENT
            content.width( ((widthWindow) - (2)));
            content.height( ((heightWindow - navbar.height()) - 4 ) );
            content.css("margin-left" , "0");
                // WRITE
                writeDiv.css("width" , "70%");
                writeDiv.css("margin-top" , "15%");
                
        } else { //LAPTOP
            if(realDevide == true)
            {
                //NAVBAR
                navbar.height( heightWindow / 15);
                divNB1.height( navbar.height() );
                divNB2.height( navbar.height() );
                divNB3.height( navbar.height() );
        
                textButtonNB.css("font-size" , (heightWindow * 0.03));
                brandP.css("font-size" , (heightWindow * 0.03));
                

                //CONTENT
                content.width( ((widthWindow) - (2)));
                content.height( ((heightWindow - navbar.height()) - 6 ) );
                content.css("margin-left" , (aside.width()));
        
                    // WRITE
                    writeDiv.css("width" , "30%");
                    writeDiv.css("margin-top" , "5%");
               //console.log("Laptop");
            }
        }
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
    
}

asignAll();
resizeAll();


//CHOOSE
var htmlMail = '<div id="ppWrite"><p class="pInWrite">My Mail: </p>  </div><input type="text" name="mailUser" class="form-control" required/><br />';

$('#example_radio1').click(function() {
   if($( this ).is(':checked')) { 
      //console.log("it's checked 1"); 
       $("#ppWrite").text( "Username: " ) 
       $("#buttonWri").removeAttr("disabled")
       
       $("#mailInput").text("");
   }
});
$('#example_radio2').click(function() {
   if($( this ).is(':checked')) { 
      //console.log("it's checked 2"); 
       $("#ppWrite").text( "Password: " );
       $("#buttonWri").removeAttr("disabled");
       
       document.getElementById("mailInput").innerHTML = (htmlMail);
   }
});