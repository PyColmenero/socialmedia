contentDataBase = $("#contentDataBase");
textContact = $(".textContact");

// ARE YOU LOGGED
    if($("#lgg3X002").attr("data-bfx00") == "false"){ // NOT LOGGED
        $("#notLoggedInfo").html(' <div style="margin-top:1%; "><p style="color:grey; font-size:12px"> You are NOT <a href="profile.php" style="text-decoration:underline">LOGGED IN</a>, you cannot reply comments <p></div> ')
    } else {  // LOGGED
        
    }

// TYPES
typeHere = $("#typeHere");
allFilterComments = false;
if(localStorage.getItem('filterComments') === "" || localStorage.getItem('filterComments') === null){
    allFilterComments = true;
    typeHere.text("All Comments")
    localStorage.setItem('filterComments', "")
    $("#allTypesButton").attr("class", "selectBAside")
    
} else {
    typeHere.text( localStorage.getItem('filterComments') + " Comments")
    
    $(".typeButton").each(function(e){
        if($(this).text().trim() == localStorage.getItem('filterComments') ){
            $(this).attr("class" , "typeButton noselect selectBAside");
        } else {
            $(this).attr("class" , "typeButton noselect nonS");
        }
    })
}

if(localStorage.getItem('orderComments') === "" || localStorage.getItem('orderComments') === null){
    orderBy = "date";
} else {
    orderBy = localStorage.getItem('orderComments')
}

if(localStorage.getItem('directionsComments') == "" || localStorage.getItem('directionsComments') == null){
    directionC = "DESC";
} else {
    directionC = localStorage.getItem('directionsComments')
}

// LOAD COMMENTS
loadComments(orderBy, "DESC", allFilterComments, 0);
function loadComments(orderByC, directionCC, filterToggleA, firstRange){
    $.post("php/AJAXHome/ajaxLoadComents.php",{
        orderby: orderByC,
        direcctionOrder: directionCC
    },
    function(data, status){

        var usuarios = JSON.parse(data)
        
        cargar_usuarios(usuarios, filterToggleA, firstRange);
    })
}
/*$boolBarra = true;
        $currentVal = "";
        $index = 0;
        $noDouble = true;
        
        if($repliedStr != "0"){
            
            for( $r = 0; $r < strlen($repliedStr); $r++ ){
                if($repliedStr[$r] == "-"){
                    $boolBarra = false;
                }
                if($boolBarra){
                    $currentVal .= $repliedStr[$r];
                } else {
                    $boolBarra = true;
                    if($currentVal == $idComment){
                        $noDouble = false;
                    }
                    echo"-".$currentVal."-";
                    $currentVal = "";
                    $index++;
                }
            }
            echo"---".$idComment."---";
            $userRepliedColumn = $repliedStr."".$idComment."-";
        }*/
var totalLoops = 0,
cargar_usuarios = function(usuarios, filterToggle, fRange){
    repliedComment = false
    if(localStorage.getItem('filterComments') == "OWN" || localStorage.getItem('filterComments') == "Replied"){
        filterToggle = true;
        ownCom = true
        
        if(localStorage.getItem('filterComments') == "Replied"){
            
        }
    } else {
        ownCom = false
    }
    
    totalLoops = 0
    totalInType = 0
    var i = 0;
   //console.log(ownCom)
    noDouble = false;
    while(i < usuarios.length){
        if(localStorage.getItem('filterComments') == "Replied"){
            repliedComment = true
            noDouble = false;
            filterToggle = true;
            ownCom = false
            
            arrayReps = $("#fD23l00").attr("data-arrReply")
            if(arrayReps != "null" || arrayReps != "0"){
                currentVal = "";
                index = 0;
                
                boolBarra = true;
                
                for( r = 0; r < arrayReps.length; r++ ){
                    if(arrayReps[r] == "-"){
                        boolBarra = false;
                    }
                    if(boolBarra){
                        currentVal += arrayReps[r];
                    } else {
                        boolBarra = true;
                        if(currentVal == usuarios[i]["idComment"]){
                            noDouble = true;
                        }
                        
                        currentVal = "";
                        index++;
                        
                    }
                }
            }
        }
        
        if(usuarios[i]["subject"] == localStorage.getItem('filterComments') || filterToggle === true)
        {
            if(ownCom === false || usuarios[i]["userID"] == $("#0x38").attr("data-pWW"))
            {
               //console.log(noDouble)
                if(repliedComment === false || noDouble){
                    totalLoops++
                    if(totalLoops >= fRange && totalLoops <= (fRange+50)){
                        strID = "showRR";
                        displayN = "block"
                        if(usuarios[i]["hasReply"] != "0") 
                        { 
                            replyB = "Show ";
                            replyBClass = "textShowReply";
                            howMuchR = usuarios[i]["hasReply"] + " Rs";
                        } else { 
                            replyB = "No Replies"; 
                            replyBClass = "textShowReplyNULL";
                            howMuchR = "Show ";
                            str="noC"
                            displayN = "none"
                        }
                        
                        strOfComment = '<div class="commentDB"><div class="information" data-hmc="'+usuarios[i]["hasReply"]+'" data-idUser="'+usuarios[i]["userID"]+'" data-idComment="'+ usuarios[i]["idComment"]+'"><div class="tittle">' + usuarios[i]["tittle"]  + '</div><div class="typeSec">'+ usuarios[i]["subject"]  + '</div></div><div class="juiceText"><p class="textSec">';  
                        
                        currentComm = usuarios[i]["comment"]
                        currentComm = currentComm.replace(/(?:\r\n|\r|\n)/g, '<br>');
                        strOfComment += currentComm
        
                        strOfComment += '</p></div> <div class="loadReplysHere" style="margin-left:5%"> '+/*APPEND HERE COMMENTS*/'</div> <div class="replysButtons">     <div style="display:none" id="writeGHere"><div  class="replyDiv"><div class="contentReply"><div class="divWriteClose"><p class="pWriteR">Write Your Reply: </p><p class="closeButton"><img src="css/photos/closed.png" width="100%"></img></p></div><textarea style="height:100px;"></textarea><div><p style="font-size:10px; color:grey;">LineBreaks and Double Quotes will not be saved.</p></div><div class="sendReplyDiv noselect"><p class="sendReplyP noselect" data-idComment="hola">Send Reply</p></div></div></div></div>' ;
                        
                       strOfComment += '<div class="buttonsAndInfo"><div class="idShowDiv"><div><p class="pIDOwner">#'+usuarios[i]["userID"]+'</p></div></div>'
                        
                        strOfComment += '<div class="contactAnom"><p id="showRR" style="display:'+displayN+'" class="'+replyBClass+' noselect">'+replyB+''+howMuchR+'</p>' +'<p class="textReply noselect">Reply</p></div> </div> </div> </div></div>';
                        
                        contentDataBase.html( contentDataBase.html() + strOfComment)
                        totalInType++;
                    } else {
                        //console.log("OUT RANGE: " + totalInType);
                    }
                }
            }
        }
            
        i++
    }
    if(totalInType == 0){
        contentDataBase.html("<div id='noComm'><b>NO MORE COMMENTS</b></div>")
    }
    //console.log("First: " + fRange + " TotalComments: " + totalInType)
    //console.log("---------- FOR OUT ----------")
    
    
    $("#loadingGIF").css("display" , "none");
    textContact = $("#typeHere");
    asignAll()
    //resizeAll()
    //resizeAllHome()
};


$('#contentDataBase').on('click', '.textContact', function() {
    fhater = $(this).parent()
});

// OPEN REPLY SECTION
$('#contentDataBase').on('click', '.textReply', function() {
    if($("#lgg3X002").attr("data-bfx00") == "true")
    {
        father = $(this).parent().parent().parent().children().eq(0)
        father.css("display" , "block")
    
        father = $(this).parent().parent()
        father.css("display" , "none")
    
        asignAll()
        //resizeAll()
        //resizeAllHome()
    } else {
        $(this).text( 'Not Logged!' )
    }
    
});

// CLOSE REPLY SECTION
$('#contentDataBase').on('click', '.closeButton', function() {
    father = $(this).parent().parent().parent().parent()
    father.css("display" , "none")

    father = father.parent().children().eq(1)
    father.css("display" , "flex")
    
    asignAll()
    //resizeAll()
    //resizeAllHome()
});

// SEND REPLY
button = ""
var value = ""
$('#contentDataBase').on('click', '.sendReplyP', function() {
    father = $(this).parent().parent()
    textarea = father.children('textarea')
    valueD = textarea.val()
    
    var valueA =    valueD.replace(/</g, "");
    valueA =     valueA.replace(/>/g, "");
    valueA =     valueA.replace(/["']/g,  "’" );
    
    valueA =     valueA.replace(/\s\s+/g, ' ');
    
    //valueA =     valueA.replace(/=/g, "va");
    //valueA =     valueA.replace(/(\r\n|\n|\r)/gm, " -  -  - ");
    //console.log(valueA)
    button = $(this)
    
    if(valueA.length >= 2){
        if (!valueA.replace(/\s/g, '').length) {
           //console.log('string only contains whitespace (ie. spaces, tabs or line breaks)');
            button.text("Only Spaces") //valueRR != null || valueRR != " " || 
            setTimeout(function(){
                button.text("Send Reply")
            },500)
            textareaA.val("")
        } else {
            other = $(this).parent().parent().parent().parent().parent().parent()
            fhatehr = other.children().eq(0);
            idComment =     fhatehr.data("idcomment")
            idUserComment =        fhatehr.data("iduser")
           //console.log(idUserComment)
            //console.log(idComment)
            
            valueO = valueA
            sendValueAjaxR(valueO)
            
            button.html( '<img src=css/photos/loading.gif width=80%/>' )
            asignAll()
            //resizeAll()
        }
    } else {
        $(this).text("Too Short")

        setTimeout(function(){
            button.text("Send Reply")
        },500)
    }
});



function sendValueAjaxR(valueOO){
    $.post("php/AJAXHome/sendReply.php",{
        currentReply: valueOO,
        currentCommentID: idComment,
        ownerCommentID: idUserComment
    },
    function(data, status){
        textarea.val("")
        //$("#errorReplyAXXs").html(data)
       // $("#errorReplyAXXs").html( $("#errorReplyAXXs").html() + status )
        
        //console.log(status)
        //if(data.)
        //if(data.substring(0,15) == "Duplicate entry" || data == "" || data == null){
            if( $("#0x38").attr("data-pww") !=  idUserComment){
               //console.log("Send Notification")
            } else {
               //console.log("User Equals")
            }
            
            button.text("Sended")
            setTimeout(function(){
                fathera = button.parent().parent().parent().parent()
                fathera.css("display" , "none")
    
                father = fathera.parent().children().eq(1)
                father.css("display" , "flex")
                
                currentB = button.parent().parent().parent().parent().parent()
                currentB = currentB.children().eq(1)
                currentB = currentB.children().eq(1)
                currentB = currentB.children().eq(0)
                
                currentB.css("display","block")
                currentB.text("Show Replies")
                currentB.attr("class" , "textShowReply")
    
                currentB.attr("data-hmc" , (parseInt(currentB.attr("data-hmc")) + 1) )
                
                currentB.attr("id", "showRR")
                //console.log(currentB)
                
                functinalityShowReply(currentB)
    
                button.text("Send")
                asignAll()
                //resizeAll()
                //resizeAllHome()
            },500)
        
        // } else {
        //    //console.log(data)
            
        // }
    })
}



//<div class="loadReplysHere"><div class="contentReply"><div class="divWriteClose"><p class="pWriteR">Here Will be Replies: </p></div></div></div>



