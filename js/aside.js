hambButton = $("#divNB1")
aside = $("#asideLeft")


hambButton.click(function(){
    detectOpen()
})

var hidden = false
if(window.innerWidth < window.innerHeight)
{ 
    hidden = true
} 


blackInAside = $("#blackInAside");
//detectOpen()
function detectOpen(){
    
    if(propotion){
        blackInAside = $("#blackInAside");
        if(hidden){
            aside.css("left" , "-200%" )
            
            blackInAside.animate({
                opacity: "0"
            }, 500, function(){
                blackInAside.css("display" , "none")
            });
            
           //console.log("CLOSED")
            hidden = false
        } else {
            aside.css("left" , "0")
            
            blackInAside.css("display" , "block")
            blackInAside.animate({opacity: '0.8'}, "fast");
            
           //console.log("OPEN")
            hidden = true
        }
    } else {
        //console.log("egn")
    }
    
}

blackInAside.click(function(){

    detectOpen()
    /*blackInAside.animate({
        opacity: "0"
    }, 500, function(){
        blackInAside.css("display" , "none")
    });*/

})