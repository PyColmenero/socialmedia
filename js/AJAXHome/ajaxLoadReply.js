// LOAD REPLY IN COMMENT CHOOSEN ------------------------------------------------------------------------------------
$('#contentDataBase').on('click', '.textShowReply', function() {//
    currentB = $(this);
    functinalityShowReply(currentB);
});
function functinalityShowReply(currentButton){
    father = currentButton.parent().parent().parent().parent()
    son = father.children().eq(0);
    loadHere = father.children().eq(2);
    idComment = son.data("idcomment");
    if( currentButton.attr("id") == 'showRR' ){
        
        currentButton.html( '<img src=css/photos/loading.gif width=80%/>' )
        currentButton.attr("id" , "hideRR")
        ajax_BD_Replies()
        
    } else {
        fatherInfo = currentButton.parent().parent().parent().parent()
        fatherInfo = fatherInfo.children().eq(0)
    
        currentButton.text( ("Show "  + fatherInfo.attr("data-hmc") + " Rs") )
        loadHere.html("");
        currentButton.attr("id" , "showRR")
    }
}

function ajax_BD_Replies(){
    var ajax = $.ajax({
        data: {},
        url: "php/AJAXHome/ajaxLoadReply.php",
        type: "POST",
        
        success: function(responde){
            //console.log(responde)
            var replies = JSON.parse(responde)
            cargar_replies(replies);
        },
        error: function(response, status, error){
            alert("Not Found");
        }
    })
}
cargar_replies = function(replies){
    let e = 0;
    loadHere.html("");
    bgColor = 212121
    for(var i = 0; i < replies.length; i++){

        if(replies[i]["whichIN"] == idComment){
            //console.log(i + ": " +replies[i]["whichIN"])
            e++;
            if(replies[i]["hasReply"] > 0){ 
                displayR = "block"
            } else { displayR = "none"; }
            
            replySTR = "";
            replySTR = '<div data-hmc="'+replies[i]["hasReply"]+'"data-idUser="'+replies[i]["userID"]+'" class="loadReplysHere" data-idreply="'+replies[i]["id"]+'"><div class="contentReply">'
            
            replySTR += '<div class="divReplyClose"><div class="replyIdDiv"><div class="divJuiceText"><p class="pReplyL">'+replies[i]["reply"]+'</p></div><div class="bottomID"><p class="idPReply">#'+replies[i]["userID"]+ '</p></div></div>';

            replySTR += '<div class="buttonsReply"><p class="buttonReplyReply noselect" data-id="1"> Reply </p><p style="display:'+displayR+'" class="buttonReplyReply noselect" data-hmc="'+replies[i]["hasReply"]+'" data-id="2" id="showRRR">Show '+replies[i]["hasReply"]+' Rs </p>' 
            
            replySTR += '</div></div><div class="replyOfReplyHere"></div><div class="replyWriteReply"></div></div></div>' 
            
            //console.log(replies[i]["userID"])
            loadHere.html( loadHere.html() + replySTR)
        } 
    }

    currentB.html("Hide Replies")
    if(e == 0){ 
        loadHere.html("no Replys") 
        setTimeout( function(){
            loadHere.html("") 
        },1000  )
    }
    
    asignAll()
    //resizeAll()
    //resizeAllHome()
};