
// OPEN REPLY/WRITE SECTION
$('#contentDataBase').on('click', '.buttonReplyReply', function() {
    currentAA = $(this);
    functionalityShowReplyR(currentAA, false)
});

function functionalityShowReplyR(currentButton, origin){
    buttonReply = currentButton
    if( currentButton.attr("data-id") == 1){
        if($("#lgg3X002").attr("data-bfx00") == "true")
        {
            father = currentButton.parent().parent().parent()
            son = father.children().eq(2)
            
            son.html('<div class="replyDiv"><div class="contentReply"><div class="divWriteClose"><p class="pWriteR">Write Your Reply: </p><p class="closeButtonReply"> <img src="css/photos/closed.png" width="100%"></img> </p></div><textarea style="height:100px;"></textarea><p style="font-size:10px; color:grey;">LineBreaks and Double Quotes will not be saved.</p><div class="sendReplyDiv"><p class="sendReplReplyP noselect" data-idComment="hola">Send Reply</p></div></div></div>');
            asignAll()
            //resizeAll()
            //resizeAllHome()
        } else {
            //alert("Sorry, you have to be logged for replying")
            buttonReply.text( 'Not Logged!' )
        }
    } else {
        
        currentBRs = $("this");
        fatherA = currentButton.parent().parent().parent();
        loadReplyR = fatherA.children().eq(2);
        
        idReplyDiv = fatherA.parent();
        currentReplyID = idReplyDiv.attr("data-idreply");
        
        if( currentButton.attr("id") == "showRRR" || origin === true){
            currentButton.attr("id" , "hideR");
            
            ajax_BD_RepliesRB();
            currentButton.html('<img src=css/photos/loading.gif width=85%/>');
        } else {
            
            loadReplyR.html( "" )
            
            currentButtonA = buttonReply.parent().parent().parent().parent()
            
            currentButton.html( "Show " + currentButtonA.attr("data-hmc") + " Rs" );
            currentButton.attr("id" , "showRRR");
            
        }
    }
}

function ajax_BD_RepliesRB(){
    var ajax = $.ajax({
        data: {},
        url: "php/AJAXHome/loadReplyReply.php",
        type: "POST",
        success: function(responde){
            //console.log( responde )
            var repliesRg = JSON.parse(responde)
            cargar_repliesRB(repliesRg);
        },
        error: function(response, status, error){
            alert(response);
            alert(status);
            alert(error);
        }
    })
}

cargar_repliesRB = function(repliesA){
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
            e++;
            
            if(currentReplyID == idOtherReply){
                displayA = "none"
                if(repliesA[i]["hasReply"] > 0)
                { 
                    displayA = "block";
                }
                
                /*strReply = '<div data-hmc="'+repliesA[i]["hasReply"]+'"data-iduser="'+repliesA[i]["userID"]+'" data-idreply="'+repliesA[i]["id"]+'" class="loadReplysHere" "><div class="contentReply"><div class="divReplyClose"><p class="pReplyL">'+ repliesA[i]["reply"]+'</p><div class="buttonsReply"><p class="buttonReplyReply" data-id="1">Reply</p>';
                
                strReply += '<p style="display:'+displayA+'" class="buttonReplyReply" data-id="2" id="showRRR">Show ' + repliesA[i]["hasReply"] + ' Rs </p>';
                strReply += '</div></div><div class="replyOfReplyHere"></div><div class="replyWriteReply"></div></div></div>';
                
                */
                
                strReply = "";
                strReply = '<div data-hmc="'+repliesA[i]["hasReply"]+'"data-idUser="'+repliesA[i]["userID"]+'" class="loadReplysHere" data-idreply="'+repliesA[i]["id"]+'"><div class="contentReply">'
                
                strReply += '<div class="divReplyClose"><div class="replyIdDiv"><div class="divJuiceText"><p class="pReplyL">'+repliesA[i]["reply"]+'</p></div><div class="bottomID"><p class="idPReply">#'+repliesA[i]["userID"]+ '</p></div></div>';
    
                strReply += '<div class="buttonsReply"><p class="buttonReplyReply noselect" data-id="1"> Reply </p><p style="display:'+displayA+'" class="buttonReplyReply noselect" data-hmc="'+repliesA[i]["hasReply"]+'" data-id="2" id="showRRR">Show '+repliesA[i]["hasReply"]+' Rs </p>' 
                
                strReply += '</div></div><div class="replyOfReplyHere"></div><div class="replyWriteReply"></div></div></div>';
                
                loadReplyR.html( loadReplyR.html() + strReply)
            }
            
        } 
    }
    buttonReply.text("Hide Rs")
    
    
            
    if(e == 0){ 
        loadReplyR.html("no Replys") 
        setTimeout( function(){
            loadReplyR.html("") 
        },1000  )
    }
    
    
    
    asignAll()
    //resizeAll()
    //resizeAllHome()
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
    buttonSendR = $(this);
    functionalitySendReplyR(buttonSendR)
    
});
function functionalitySendReplyR(currentButtonA){
    
    //father.children('textarea')
    father = currentButtonA.parent().parent()
    textareaA = father.children('textarea')
    valueRR = textareaA.val()
    textareaA.val("")
    if(valueRR.length >= 2 ){
        if (!valueRR.replace(/\s/g, '').length) {
           //console.log('string only contains whitespace (ie. spaces, tabs or line breaks)');
            currentButtonA.text("Only Spaces") //valueRR != null || valueRR != " " || 
            setTimeout(function(){
                currentButtonA.text("Send Reply")
            },500)
            textareaA.val("")
        } else {
            //console.log(currentButtonA)
            other = currentButtonA.parent().parent().parent().parent().parent().parent()//.parent()
            idRep =     other.attr("data-idreply")
            idUserReply =     other.attr("data-iduser")
           //console.log(idUserReply + " Replied OWNER ID")
            
            button = currentButtonA.parent()
            currentButtonA.html( '<img src=css/photos/loading.gif width=85%/>' )
            asignAll()
            sendValueAjaxaaR()
        }
        
    } else {
        currentButtonA.text("Too Short") //valueRR != null || valueRR != " " || 

        setTimeout(function(){
            currentButtonA.text("Send Reply")
        },500)
        textareaA.val("")
    }
    
}

function sendValueAjaxaaR(){
    $.post("php/AJAXHome/sendReplyReply.php",{
        currentReply: valueRR,
        currentReplyID: idRep,
        ownerReplyID: idUserReply
    },
    function(data, status){
       //console.log(data)
        buttonSendR.text("Sended")
        setTimeout(function(){
            buttonS = buttonSendR.parent().parent().parent().parent().parent()
            buttonS = buttonS.children().eq(0)
            buttonS = buttonS.children().eq(1)
            buttonS = buttonS.children().eq(1)
            buttonS.css("display" , "block")
            
            functionalityShowReplyR(buttonS, true)
            
            hmcData = buttonSendR.parent().parent().parent().parent().parent().parent();
            hmcData.attr("data-hmc" , (parseInt(hmcData.attr("data-hmc")) + 1))

            father = button.parent().parent().parent()
            father.html("")
            
            hmcReply = buttonReply.parent().parent().parent().parent().parent().parent().parent()
            hmcReply.attr("data-hmc" , (hmcReply.attr("data-hmc") + 1) )
            
            //resizeAllHome()
            asignAll()
            //resizeAll()
        },700)
    })
}



