function asignAll(){
    
}

asignAll()

//DETECT MEASURES
var onlyOnce = true;
var onlyOnce1 = true;
var changeDev = false;
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

detectMeasures()

var realDevide;
if(window.screen.width > window.screen.height){
    realDevide = true;
    

} else {
    realDevide = false;
    aside.css("left" , "-120%");
    
}

$( document ).ready(function() {
    $("#asideLeft").css("display" , "block");
});

window.addEventListener("resize", function(event){
    detectMeasures()
    if(!propotion){
        aside.css("left" , "0");
        $("#blackInAside").css("opacity","0")
    } else {
        aside.css("left" , "-120%");
    }

});
