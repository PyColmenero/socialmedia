setInterval(function(){ 
    getUserNotification() 
}, 60000);
                
function getUserNotification(){
    var ajax = $.ajax({
        data: {},
        url: "php/AJAXHome/getNotification.php",
        type: "POST",
        success: function(responde){
            if(parseInt(responde) == 0 || responde == "nl"){
                $("#nonotification").text( "" )
            } else {
                if($("#notification").attr("id") == null){
                    $("#nonotification").attr("id" ,"notification")
                    $("#notification").text( responde )
                } else {
                    $("#notification").text( responde )
                    //$("#notification").attr("id" ,"nonotification")
                    
                }
            }
        },
        error: function(response, status, error){
           //console.log(response)
           //console.log(status)
           //console.log(error)
        }
    })
}
