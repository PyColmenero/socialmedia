var account = 0;


$("#stopIt").click(function(){
    clearInterval(botC);
   //console.log("Stop");
})

$("#doIt").click(function(){
    
    botC = setInterval(function(){
        account++;
       //console.log("Click " + account);
        
        var ajax = $.ajax({
            data: {},
            url: "php/testCommentBot.php",
            type: "POST",
            succes: function(response){
                $("#status").html("comments: " + account)
               //console.log(response);
            },
            error: function(response, status, error){
                $("#status").html(response)
                $("#status").html( $("#status").html() + " , " + error)
                $("#status").html( $("#status").html() + " , " + status)
               //console.log("Error");
            }
        })
    },1000)
})