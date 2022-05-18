homeButton = $("#homeButton")
writeButton = $("#writeButton")
profileButton = $("#profileButton")

home =      $("#homeSec")
write =     $("#writeSec")
profile =   $("#profileSec")

state = 1;

home.css("display" , "none")
write.css("display" , "block")
profile.css("display" , "none")

homeButton.click(function(){
    if(state != 0){
        asignAll()
        //resizeAll()

        home.css("display" , "block")
        write.css("display" , "none")
        profile.css("display" , "none")

        homeButton.css("background" , "rgb(146, 0, 0)")
        writeButton.css("background" , "rgb(117, 0, 0)")
        profileButton.css("background" , "rgb(117, 0, 0)")

        state = 0
        if(window.innerWidth < window.innerHeight)
        { 
            divNB1.css("visibility" , "visible"); 
        } 


        loadAllComents()

    }
})

divNB1 = $("#divNB1")

writeButton.click(function(){
    if(state != 1){
        asignAll()
        //resizeAll()

        home.css("display" , "none")
        write.css("display" , "block")
        profile.css("display" , "none")

        homeButton.css("background" , "rgb(117, 0, 0)")
        writeButton.css("background" , "rgb(146, 0, 0)")
        profileButton.css("background" , "rgb(117, 0, 0)")

        state = 1

        if(window.innerWidth < window.innerHeight){
            divNB1.css("visibility" , "hidden")
            aside.css("left" , ((-aside.width())*2))
            hidden = false
        }

    }
    asignAll()
    //resizeAll()
})

profileButton.click(function(){
    if(state != 2){
        asignAll()
        //resizeAll()


        home.css("display" , "none")
        write.css("display" , "none")
        profile.css("display" , "block")

        homeButton.css("background" , "rgb(117, 0, 0)")
        writeButton.css("background" , "rgb(117, 0, 0)")
        profileButton.css("background" , "rgb(146, 0, 0)")

        state = 2

       //console.log("ijge")

    }
})

buttonsType = $(".typeButton")
buttonsType.click(function(){
    currentButton = $(this)
    readTextFile("json/sectionsDB.json", function(text){
        var data = JSON.parse(text);
        var innerHomeSect = ""
        for(let index in data){
            currentValueInText = data[((data.length - index) - 1)].subject;
            currentValueInText = currentValueInText.toString()
            currentValueInText = currentValueInText.trimLeft()
            currentValueInText = currentValueInText.replace(/\s/g,'')

            currentButtonType = currentButton.text()
            currentButtonType = currentButtonType.toString()
            currentButtonType = currentButtonType.trimLeft()
            currentButtonType = currentButtonType.replace(/\s/g,'')

            if(currentValueInText.toString() == currentButtonType.toString() ){
                innerHomeSect = innerHomeSect + '<div class="commentDB"><div class="information"><div class="tittle">'+data[((data.length - index) - 1)].tittle+'</div><div class="typeSec">'+data[((data.length - index) - 1)].subject+'</div></div><div class="juiceText"><p class="textSec">'+data[((data.length - index) - 1)].history+'</p></div><div class="contactAnom"><p class="textContact">Send Email</p></div></div>';
                if(index == 50) { break; }
               //console.log(((data.length - index) - 1))
            }
        }
        document.getElementById("contentDataBase").innerHTML = innerHomeSect
    })
})

$("#allTypesButton").click(loadAllComents)

function loadAllComents(){
    readTextFile("json/sectionsDB.json", function(text){
        var data = JSON.parse(text);
        var innerHomeSect = ""
        for(let index in data){
            
            innerHomeSect = innerHomeSect + '<div class="commentDB"><div class="information"><div class="tittle">'+data[((data.length - index) - 1)].tittle+'</div><div class="typeSec">'+data[((data.length - index) - 1)].subject+'</div></div><div class="juiceText"><p class="textSec">'+data[((data.length - index) - 1)].history+'</p></div><div class="contactAnom"><p class="textContact">Send Email</p></div></div>';
            if(index == 50) { break; }
           //console.log(((data.length - index) - 1))
        }
        document.getElementById("contentDataBase").innerHTML = innerHomeSect
    });
}

// NONE
writeButton.css("background" , "rgb(146, 0, 0)")