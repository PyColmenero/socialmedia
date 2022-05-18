
// OPEN REPLY/WRITE SECTION
$('#contentDataBase').on('click', '.buttonReplyReply', function() {
    currentAA = $(this);
    
    if( $(this).attr("data-id") == 1){
        father = $(this).parent().parent().parent()
        son = father.children().eq(2)

        son.html('<div class="replyDiv"><div class="contentReply"><div class="divWriteClose"><p class="pWriteR">Write Your Reply: </p><p class="closeButtonReply">x</p></div><textarea></textarea><div class="sendReplyDiv"><p class="sendReplReplyP" data-idComment="hola">Send Reply</p></div></div></div>')
        asignAll()
        //resizeAll()
    } else {
        currentBRs = $("this")
        fatherA = $(this).parent().parent().parent()
        loadReplyR = fatherA.children().eq(2)
        idReplyDiv = fatherA.parent()
        currentReplyID = idReplyDiv.attr("data-idreply")
        
        if( $(this).attr("id") == "showRRR"){
            
            $(this).text( "Hide Rd" )
            $(this).attr("id" , "hideR") 
            
            //function
            ajax_BD_RepliesR()
            currentAA.html('<img src=css/photos/loading.gif width=30%/>')
            
            
        } else {
            loadReplyR.html( "" )
            
            $(this).text( "Show Rd" )
            $(this).attr("id" , "showRRR") 
        }
    }
    
});

function ajax_BD_RepliesR(){
    var ajax = $.ajax({
        data: {},
        url: "php/loadReplyReply.php",
        type: "POST",
        success: function(responde){
            //console.log(responde)
            var repliesRg = JSON.parse(responde)
            cargar_repliesR(repliesRg);
        },
        error: function(response, status, error){
            alert("Not Found");
        }
    })
}

cargar_repliesR = function(repliesA){
    let e = 0;
    loadReplyR.html("");
    for(var i = 0; i < repliesA.length; i++){
        currentID = repliesA[i]["whichIN"]
        if( currentID.includes("-") ){
            
            var boolbarra = false
            idOtherReply = ""
            for( cc in currentID ){
                if(boolbarra === false){
                    if(currentID[cc] == "-"){
                        boolbarra = true
                    }
                } else {
                    idOtherReply += currentID[cc];
                }
                
            }
            //console.log(i + ": " +repliesA[i]["whichIN"])
            e++;
            //console.log( currentID )
            //console.log( idOtherReply )
            //console.log( currentReplyID + " ---" )
            
            if(currentReplyID == idOtherReply){
                loadReplyR.html( loadReplyR.html() + '<div class="loadReplysHere" data-idreply="'+repliesA[i]["id"]+'"><div class="contentReply"><div class="divReplyClose"><p class="pReplyL">'+ repliesA[i]["reply"]+'</p><div class="buttonsReply"><p class="buttonReplyReply" data-id="1">Reply   </p><p class="buttonReplyReply" data-id="2" id="showRRR">Show Rs </p></div></div><div class="replyOfReplyHere"></div><div class="replyWriteReply"></div></div></div>' )
            }
        } 
    }
    currentAA.text("Hide Replies")
    if(e == 0){ 
        loadHere.html("no Replys") 
        setTimeout( function(){
            loadHere.html("") 
        },1000  )
    }
    
    asignAll()
    //resizeAll()
};



// CLOSE REPLY SECTION
$('#contentDataBase').on('click', '.closeButtonReply', function() {
    father = $(this).parent().parent().parent().parent()
    father.html("")
    asignAll()
    //resizeAll()
});


// SEND REPLY TO REPLY
$('#contentDataBase').on('click', '.sendReplReplyP', function() {
    butotnSendReply = $(this);
    father = $(this).parent().parent()
    textarea = father.children('textarea')
    valueRR = textarea.val()
    
    other = $(this).parent().parent().parent().parent().parent().parent().parent()
    fhatehr = other.children().eq(0);
    idRep =     fhatehr.data("idreply")
    
   //console.log(idRep)
   //console.log(fhatehr.attr("class"))
   //console.log(valueRR)
    
    button = $(this).parent()
    button.html( '<img src=css/photos/loading.gif width=15%/>' )
    asignAll()
    //resizeAll()
    
    sendValueAjaxaaR()
    
    
    
   //console.log("SEND REPLY TO REPLY")
    
});
function sendValueAjaxaaR(){
    $.post("php/sendReplyReply.php",{
        currentReply: valueRR,
        currentReplyID: idRep
    },
    function(data, status){
        button.text("Sended")
       //console.log(data + ", " + status);
        setTimeout(function(){
            father = button.parent().parent().parent()
           //console.log(father.attr("class"))
            father.html("")
            asignAll()
            //resizeAll()
        },700)
    })
}













