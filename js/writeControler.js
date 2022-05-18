input1 = $("#inputTittleW");
textArea = $("#textAreaW");
labelInputW = $("#labelInputW")
labelTAW = $("#labelTAW")
buttonSubmit = $("#buttonWri");

boolInput1 = false;
boolTA1 = false;

input1.on("keyup", function(){
    
    
    if(input1.val().length > 50){
        labelInputW.html( "<b style='color:red'> TOO LONG<b>" )
        boolInput1 = false
    } else if(input1.val().length < 2){
        labelInputW.html( "<b style='color:white'> Too short<b>" )
        boolInput1 = false
    } else {
        boolInput1 = true
        labelInputW.text( "("+ input1.val().length+"/50)" )
    }
    proveWrite()
});

textArea.on("keyup", function(){
    labelTAW.text( "("+ textArea.val().length+"/2000)" )
    
    if(textArea.val().length > 2000){
        labelTAW.html( "<b style='color:red'> TOO LONG<b>" )
        boolTA1 = false
    } else if(textArea.val().length < 10){
        labelTAW.html( " <b style='color:white'> Too short<b>" )
        boolTA1 = false
    } else {
        boolTA1 = true
    }
    proveWrite()
});

proveWrite()
function proveWrite(){
   //console.log(buttonSubmit.attr("value"))
    if(buttonSubmit.attr("value") == "Not Logged"){
        buttonSubmit.attr("disabled" , true)
       //console.log("23r3r")
    } else {
        if(boolInput1 && boolTA1 && textArea.val().length > 0){
            buttonSubmit.attr("disabled" , false)
        } else {
            buttonSubmit.attr("disabled" , true)
        }
    }
}