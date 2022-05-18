logButton = $("#logButton");
regButton = $("#regButton");
notButton = $("#notButton");

loginForm = $("#loginForm");
registerForm = $("#registerForm");
profileDiv = $("#profileDiv")
notificationDIV = $("#notificationDIV")

var stateProfile = 0;

everyNotReply = new Array()


logButton.click(function(){
    loadLog()
})
regButton.click(function(){
    loadReg()
})

notButton.click(function(){
    loadNoti()
})

function loadNoti(){
    stateProfile = 2;
    loginForm.css("display" , "none")
    registerForm.css("display" , "none")
    profileDiv.css("display" , "none")
    notificationDIV.css("display" , "block")
    
    everyNotHere.html('<div id="loadingGIF" ><img src=css/photos/loading1.gif width=20%/><p>Loading Home Section...</p></div>')
    
    getUserNotification()
}
function loadReg(){
    stateProfile = 1;
    loginForm.css("display" , "none")
    registerForm.css("display" , "block")
    
    if(propotion){
        profileDiv.css("display" , "block")
    } else {
        profileDiv.css("display" , "flex")
    }
    
    notificationDIV.css("display" , "none")
}
function loadLog(){
    stateProfile = 0;
    loginForm.css("display" , "block")
    registerForm.css("display" , "none")
    
    if(propotion){
        profileDiv.css("display" , "block")
    } else {
        profileDiv.css("display" , "flex")
    }
    
    notificationDIV.css("display" , "none")
}

myCurrentID = $("#0x38").attr("data-pww")

function getUserNotification(){
    /*$.post("php/AJAXHome/getUserNotification.php",{},
    function(data, status){
       //console.log(data)
        desencriptData(data)
    })*/
    var ajax = $.ajax({
        data: {"username": myCurrentID},
        url: "php/AJAXHome/getUserNotification.php",
        type: "POST",
        success: function(data, status){
           //console.log(data)
            desencriptData(data)
        },
        error: function(response, status, error){
            alert("Not Found");
        }
    })
}

replysArray = new Array()
commentsArray = new Array()
notifications = new Array()

function desencriptData(notification){
    boolEntrance = false
    boolOut = false
    boolBarra = true
    first = ""
    second = ""
    commentsArray = []
    replysArray = []
    
    notifications = []
    //console.log(notification)
    for(e in notification){
        if(boolEntrance){
            if(notification[e] != ")"){
                if(notification[e] != "-"){
                    if(boolBarra){
                        first += notification[e]
                    } else {
                        second += notification[e]
                    }
                } else {
                    boolBarra = false
                }
            } else {
                boolBarra = true
                notifications.push([first,second]);
                first = ""
                second = ""
                boolEntrance = false
            }
        } 
        if(notification[e] == "("){
            boolEntrance = true
        }
    }
    
    boolEqual = true
    boolEqualR = true
    for( let e = 0; e < notifications.length; e++){
        
        for( let a = 0; a < commentsArray.length; a++){
            if(commentsArray[a] == notifications[e][0]){
                boolEqual = false
            }
        }
        if(boolEqual){
            commentsArray[e] = notifications[e][0]
            boolEqual = true;
        }
        
        for( let a = 0; a < replysArray.length; a++){
            if(replysArray[a] == notifications[e][0]){
                boolEqualR = false
            }
        }
        if(boolEqualR){
            replysArray[e] = notifications[e][1]
            boolEqualR = true;
        }
        
        //replysArray[e] = notifications[e][1]
    }
   //console.log(commentsArray)
   //console.log(replysArray)
   //console.log(notifications)
    if(commentsArray.length != 0){
        getEveryNot("date", "DESC");
    } else {
        if($("#0x38").attr("data-pWW") != "nl"){
            everyNotHere.html("<div style='margin-top:5%'><h4><b>¡Ooops!</b> You Don't have Notifications<h4><h4>Yo may want to see <label id='h4OwnComments'>your own Comments</label></h4></div>")
        } else {
            everyNotHere.html("<div style='margin-top:5%'><h4><b>¡Ooops!</b> You are not Looged in<h4><h4>Yo may want either to <label id='h4Login'>Log In</label> or <label id='h4Reg'>Register</label></h4></div>")
        }
        
        
    }
    
}

$('#notificationDIV').on('click', '#h4OwnComments', function() {
    localStorage.setItem('filterComments', "OWN");
    window.location.replace("./index.php");
});
$('#notificationDIV').on('click', '#h4Login', function() {
    loadLog()
});
$('#notificationDIV').on('click', '#h4Reg', function() {
    loadReg()
});

// AJAX DATABASE PETITION
function getEveryNot(orderByC, directionCC){
    var ajax = $.ajax({
        data: {},
        url: "php/AJAXHome/ajaxLoadNotifications.php",
        type: "POST",
        success: function(responde){
            //console.log(responde)
            var replies = JSON.parse(responde)
            loadNotificaitons(replies);
        },
        error: function(response, status, error){
            alert("Not Found");
        }
    })
}

// BUILD EVERY NOTIFICATION
everyNotHere = $("#everyNotHere")
loadNotificaitons = function(usuarios){
    
    everyNotHere.html("")
    totalLoops = 0
    totalInType = 0
    var i = 0;
    myID = $("#0x38").attr("data-pWW");
    while(i < usuarios.length){
        /*currentStr = ""
        boolBarra = false
        allowedToShow = false
        
        if(currentNotSTR != "x"){
            //console.log(currentNotSTR + " CURRENT NOT")
            for(let h = 0; h < currentNotSTR.length; h++){
                if( currentNotSTR[h] == "-"){
                    //console.log(currentStr)
                    //console.log(myID)
                    //console.log("------")
                    if(currentStr == myID){
                       //console.log("COIN")
                        allowedToShow = true
                    }
                    currentStr = ""
                    boolBarra = true
                } 
                if( boolBarra == false){
                    currentStr += currentNotSTR[h]
                } else {
                    boolBarra = false
                }
            }
        } else {
            allowedToShow = false
        }*/
        allowedToShow =  false
        //console.log(commentsArray.length)
        
        for(let t = 0; t < (commentsArray.length); t++){
            //console.log(t+": "+commentsArray[t])
            if(commentsArray[t] == usuarios[i]["idComment"]){
                allowedToShow = true;
            } else {
                //console.log(notifications[t][0])
                //console.log(usuarios[i]["idComment"])
            }
        }
        //console.log("--------")
        
        if(allowedToShow){
            totalLoops++
            if(totalLoops <= 50){
                //SWITCH ACCORDING TO IF HAS REPLYS
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
                
                // CREATE COMMENT
                /*strOfComment = '<div class="commentDB"><div class="information" data-hmc="'+usuarios[i]["hasReply"]+'" data-idUser="'+usuarios[i]["userID"]+'" data-idComment="'+ usuarios[i]["idComment"]+'"><div class="tittle">' + usuarios[i]["tittle"]  + '</div> <div class="typeSec">'+ usuarios[i]["subject"]  + '</div></div> <div class="juiceText"><p class="textSec">';*/  
                strOfComment = '<div class="commentDB"><div class="information" data-hmc="'+usuarios[i]["hasReply"]+'" data-idUser="'+usuarios[i]["userID"]+'" data-idComment="'+ usuarios[i]["idComment"]+'"><div class="tittle">' + usuarios[i]["tittle"]  + '</div><div class="typeSec">'+ usuarios[i]["subject"]  + '</div></div><div class="juiceText"><p class="textSec">';
                    
                    // CREATE BREAK LINES IN JUICE TEXT
                    currentComm = usuarios[i]["comment"]
                    currentComm = currentComm.replace(/(?:\r\n|\r|\n)/g, '<br>');
                    strOfComment += currentComm
    
                /*strOfComment += '</p></div> <div class="loadReplysHere" style="margin-left:5%"></div> <div class="replysButtons">     <div style="display:none" id="writeGHere"><div  class="replyDiv"><div class="contentReply"><div class="divWriteClose"><p class="pWriteR">Write Your Reply: </p><p class="closeButton"><img src="css/photos/closed.png" width="100%"></img></p></div><textarea style="height:100px;"></textarea><div><p style="font-size:10px; color:grey;">LineBreaks and Double Quotes will not be saved.</p></div><div class="sendReplyDiv noselect"><p class="sendReplyP" data-idComment="hola">Send Reply</p></div></div></div></div><div class="contactAnom">'+ '<p id="showRR" style="display:'+displayN+'" class="'+replyBClass+' noselect">'+replyB+''+howMuchR+'</p>' +'<p class="textReply noselect">Reply</p></div> </div> </div> </div>';*/
                strOfComment += '</p></div> <div class="loadReplysHere" style="margin-left:5%"> '+/*APPEND HERE COMMENTS*/'</div> <div class="replysButtons">     <div style="display:none" id="writeGHere"><div  class="replyDiv"><div class="contentReply"><div class="divWriteClose"><p class="pWriteR">Write Your Reply: </p><p class="closeButton"><img src="css/photos/closed.png" width="100%"></img></p></div><textarea style="height:100px;"></textarea><div><p style="font-size:10px; color:grey;">LineBreaks and Double Quotes will not be saved.</p></div><div class="sendReplyDiv noselect"><p class="sendReplyP noselect" data-idComment="hola">Send Reply</p></div></div></div></div>' ;
                    
               strOfComment += '<div class="buttonsAndInfo"><div class="idShowDiv"><div><p class="pIDOwner">#'+usuarios[i]["userID"]+'</p></div></div>'
                
                strOfComment += '<div class="contactAnom"><p id="showRR" style="display:'+displayN+'" class="'+replyBClass+' noselect">'+replyB+''+howMuchR+'</p>' +'<p class="textReply noselect">Reply</p></div> </div> </div> </div></div>';
                
                // APPEND STR OF COMMENT IN DIV
                everyNotHere.html( everyNotHere.html() + strOfComment)
            } else {
                everyNotHere.html( "<b style'font-size:50px'>+</b>")
            }
        }
        i++
    }
    if(usuarios.length == 0){
        everyNotHere.html("<div id='noComm'><b>NO NOTIFICATIONS</b></div>")
    }
    
    loadNOTReplys()
    asignAll()
    //resizeAll()
    profileDiv.css("display" , "none")
};

// LOAD EVERY REPLY OF COMMENT
        arrayButtons = new Array()
        $(".textShowReply").each(function(e){
            currentButtonShow = $(this);
            arrayButtons = arrayButtons.concat(currentButtonShow)
        })
        
        function loadNOTReplys(){
            arrayButtons = []
            $(".textShowReply").each(function(e){
                currentButtonShow = $(this);
                arrayButtons = arrayButtons.concat(currentButtonShow)
            })
            //console.log(arrayButtons)
            for(let a = 0; a < arrayButtons.length; a++){
                //console.log( arrayButtons[a] );
            }
            //console.log("-----------------------")
            
            //console.log(arrayButtons[1])
            if(arrayButtons.length != null && arrayButtons.length != 0)
            showNotReply(arrayButtons[0], 0)
            
        }
        
        function showNotReply(currentButton, id){
            //console.log(id)
            currentButton = arrayButtons[id]
            //console.log(currentButton)

            /*for(let a = 0; a < arrayButtons.length; a++){
               //console.log(a + ": ");
               //console.log(arrayButtons[a])
            }*/
            
            father = currentButton.parent().parent().parent().parent()
            son = father.children().eq(0);
            loadHere = currentButton.parent().parent().parent().parent().children().eq(2);
            currentB = currentButton
            idComment = son.data("idcomment");
            
            currentButton.html( '<img src=css/photos/loading.gif width=80%/>' )

            currentButton.attr("id" , "hideRR")
            ajax_BD_Replies_Not(id)

        }
        
        function ajax_BD_Replies_Not(id){
            var ajax = $.ajax({
                data: {},
                url: "php/AJAXHome/ajaxLoadReply.php",
                type: "POST",
                
                success: function(responde){
                    
                    var replies = JSON.parse(responde)
                    load_not_Reply(replies, id);
                    
                },
                error: function(response, status, error){
                    alert("Not Found");
                }
            })
        }
        
        load_not_Reply = function(repliesA, id){
            let e = 0;
            loadHere.html("");
            
            for(var i = 0; i < repliesA.length; i++){
                allowedToShowR =  false
                //console.log("--------")
                //console.log(notifications.length)
                for(let t = 0; t < (replysArray.length); t++){
                    //console.log(t+": "+notifications[t][1])
                    if(replysArray[t] == repliesA[i]["id"]){
                        allowedToShowR = true;
                    }
                }
                
                if(allowedToShowR){
                    bgColor = "#5e0000";
                    dataNot = "true"
                } else {
                    bgColor = "#272727"
                    dataNot = "false"
                }
                if(repliesA[i]["whichIN"] == idComment){
                    //console.log(i + ": " +replies[i]["whichIN"])
                    e++;
                    if(repliesA[i]["hasReply"] > 0) { 
                        displayR = "block";
                    } else { displayR = "none"; }
                    
                    
                    
                    replySTR = "";
                    
                    /*replySTR = '<div data-hmc="'+repliesA[i]["hasReply"]+'"data-idUser="'+repliesA[i]["userID"]+'" class="loadReplysHere" data-idreply="'+repliesA[i]["id"]+'"><div class="contentReply" data-not="'+dataNot+'"  style="background:'+bgColor+';" ><div class="divReplyClose"><p class="pReplyL">'+ repliesA[i]["reply"]+'</p><div class="buttonsReply"><p class="buttonReplyReply noselect" data-id="1"> Reply </p>';
                    
                    replySTR += '<p style="display:'+displayR+'" class="buttonReplyReply noselect" data-hmc="'+repliesA[i]["hasReply"]+'" data-id="2" id="showRRR">Show '+repliesA[i]["hasReply"]+' Rs </p>' 
                    
                    replySTR += '</div></div><div class="replyOfReplyHere"></div><div class="replyWriteReply"></div></div></div>'*/
                    replySTR = '<div data-hmc="'+repliesA[i]["hasReply"]+'"data-idUser="'+repliesA[i]["userID"]+'" class="loadReplysHere" data-idreply="'+repliesA[i]["id"]+'"><div class="contentReply" data-not="'+dataNot+'"  style="background:'+bgColor+';">'
            
                    replySTR += '<div class="divReplyClose"><div class="replyIdDiv"><div class="divJuiceText"><p class="pReplyL">'+repliesA[i]["reply"]+'</p></div><div class="bottomID"><p class="idPReply">#'+repliesA[i]["userID"]+ '</p></div></div>';
        
                    replySTR += '<div class="buttonsReply"><p class="buttonReplyReply noselect" data-id="1"> Reply </p><p style="display:'+displayR+'" class="buttonReplyReply noselect" data-hmc="'+repliesA[i]["hasReply"]+'" data-id="2" id="showRRR">Show '+repliesA[i]["hasReply"]+' Rs </p>' 
                    
                    replySTR += '</div></div><div class="replyOfReplyHere"></div><div class="replyWriteReply"></div></div></div>'
                    
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
            profileDiv.css("display" , "none")
            
            if(id != (arrayButtons.length - 1)){
                nextID = id+1
                showNotReply(arrayButtons[nextID], nextID)
                //console.log(arrayButtons[nextID])
            } else {
                //console.log("finished COMMENTS?")
                asignAll()
                //resizeAll()
                profileDiv.css("display" , "none")
                loadNOTReplysR()
            }
        };

// LOAD EVERY REPLY OF REPLY

arrayButtonsR = new Array()
$(".buttonReplyReply").each(function(e){
    currentButtonShowR = $(this);
    arrayButtonsR = arrayButtonsR.concat(currentButtonShowR)
})

    function loadNOTReplysR(){
       //console.log("LLEGA AQUI")
        ammount = 0
        arrayButtonsR = []
        $(".buttonReplyReply").each(function(e){
            currentButtonShowR = $(this);
            if(currentButtonShowR.attr("data-id") == "2")
            {
                if(currentButtonShowR.text() != "Show 0 Rs " && currentButtonShowR.attr("id") == "showRRR"){
                    arrayButtonsR = arrayButtonsR.concat(currentButtonShowR)
                    ammount++;
                }
            }
            
        })
        //console.log(arrayButtons)
        /*for(let a = 0; a < arrayButtonsR.length; a++){
           //console.log( arrayButtonsR[a] );
        }*/
        //console.log("--------------------------------------------")
    
        //console.log(arrayButtons[1])
        if(ammount != 0){
            showNotReplyR(arrayButtonsR[0], 0)
        } else {
            deleteNotifications()
        }
        
        
    }
    
    function showNotReplyR(currentButton, idA){
        buttonReply = currentButton

            
        currentBRs = $("this");
        fatherA = currentButton.parent().parent().parent();
        loadReplyR = fatherA.children().eq(2);
        
        idReplyDiv = fatherA.parent();
        currentReplyID = idReplyDiv.attr("data-idreply");
        
        
        
            currentButton.attr("id" , "hideR");
            ajax_BD_Not_RepliesRB(idA);
            currentButton.html('<img src=css/photos/loading.gif width=85%/>');

    }
    
    function ajax_BD_Not_RepliesRB(idA){
        var ajax = $.ajax({
            data: {},
            url: "php/AJAXHome/loadReplyReply.php",
            type: "POST",
            success: function(responde){
                var repliesRg = JSON.parse(responde)
                cargar_Not_repliesRB(repliesRg, idA);
            },
            error: function(response, status, error){
                alert("Not Found");
            }
        })
    }
    
    cargar_Not_repliesRB = function(repliesA, idA){
        let e = 0;
        loadReplyR.html("");
        ammount = 0;
        for(var i = 0; i < repliesA.length; i++){
            ammount++
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
                
                /*boolBarraBB = false
                currentStrRR = ""
                currentNotSTRAR = repliesA[i]["notification"]
                allowedToShowR = false
                boolSecondR = false
                if(currentNotSTRAR != "x"){
                    //console.log(currentNotSTRAR + " REPLY")
                    for(let h = 0; h < currentNotSTRAR.length; h++){
                        
                        if( currentNotSTRAR[h] == "-"){
                            //console.log(currentStrRR)
                            currentStrRR = ""
                            boolBarraBB = true
                            
                        } else {
                            //console.log(currentNotSTRA[h])
                        }
                        
                        if( boolBarraBB == false){
                            currentStrRR += currentNotSTRAR[h]
                        } else {
                            boolBarraBB = false
                        }
                    }
                    //console.log(currentStrRR)
                    if(currentStrRR == myID){
                        //console.log("COIN")
                        allowedToShowR = true
                    }
                    //console.log("------")
                } else {
                    allowedToShowR = false
                }*/
                allowedToShowR =  false
                //console.log("--------")
                //console.log(notifications.length)
                for(let t = 0; t < (replysArray.length); t++){
                    //console.log(t+": "+notifications[t][1])
                    if(replysArray[t] == repliesA[i]["id"]){
                        allowedToShowR = true;
                    }
                }
                
                if(allowedToShowR){
                    bgColor = "#5e0000";
                    dataNot = "true"
                    //console.log(bgColor)
                } else {
                    bgColor = "#272727"
                    dataNot = "false"
                }
                
                if(repliesA[i]["hasReply"] > 0) { 
                        displayR = "block";
                    } else { displayR = "none"; }
                    
                if(currentReplyID == idOtherReply){
                    /*strReply = '<div data-hmc="'+repliesA[i]["hasReply"]+'"data-iduser="'+repliesA[i]["userID"]+'" data-idreply="'+repliesA[i]["id"]+'" class="loadReplysHere" "><div class="contentReply" data-not="'+dataNot+'" style="background:'+bgColor+';" ><div class="divReplyClose"><p class="pReplyL">'+ repliesA[i]["reply"]+'</p><div class="buttonsReply"><p class="buttonReplyReply" data-id="1">Reply</p>';
                    displayA = "none"
                    if(repliesA[i]["hasReply"] > 0)
                    { 
                        displayA = "block";
                    }
                    strReply += '<p style="display:'+displayA+'" class="buttonReplyReply" data-id="2" id="showRRR">Show ' + repliesA[i]["hasReply"] + ' Rs </p>';
                    strReply += '</div></div><div class="replyOfReplyHere"></div><div class="replyWriteReply"></div></div></div>';*/
                    
                    strReply = '<div data-hmc="'+repliesA[i]["hasReply"]+'"data-idUser="'+repliesA[i]["userID"]+'" class="loadReplysHere" data-idreply="'+repliesA[i]["id"]+'"><div class="contentReply"data-not="'+dataNot+'" style="background:'+bgColor+';"> '
            
                    strReply += '<div class="divReplyClose"><div class="replyIdDiv"><div class="divJuiceText"><p class="pReplyL">'+repliesA[i]["reply"]+'</p></div><div class="bottomID"><p class="idPReply">#'+repliesA[i]["userID"]+ '</p></div></div>';
        
                    strReply += '<div class="buttonsReply"><p class="buttonReplyReply noselect" data-id="1"> Reply </p><p style="display:'+displayR+'" class="buttonReplyReply noselect" data-hmc="'+repliesA[i]["hasReply"]+'" data-id="2" id="showRRR">Show '+repliesA[i]["hasReply"]+' Rs </p>' 
                    
                    strReply += '</div></div><div class="replyOfReplyHere"></div><div class="replyWriteReply"></div></div></div>'
                    
                    loadReplyR.html( loadReplyR.html() + strReply)
                }
            } 
        }
        
        if(ammount == 0){
           //console.log("N1O")
        } else {
           //console.log("Si")
        }
        
        
        buttonReply.text("Hide Rs")
        
        if(e == 0){ 
            loadReplyR.html("no Replys") 
            setTimeout( function(){
                loadReplyR.html("") 
            },1000  )
        }
        
        if(idA != (arrayButtonsR.length - 1)){
            nextIDR = idA+1
            showNotReplyR(arrayButtonsR[nextIDR], nextIDR)
            //console.log(arrayButtonsR[nextIDR])
            //console.log(arrayButtons[nextID])
        } else {
            //console.log("layer")
            arrayButtonsR = []
            $(".buttonReplyReply").each(function(e){
                currentButtonShowR = $(this);
                if(currentButtonShowR.attr("data-id") == "2")
                {
                    if(currentButtonShowR.text() != "Show 0 Rs " && currentButtonShowR.attr("id") != "hideR"){
                        arrayButtonsR = arrayButtonsR.concat(currentButtonShowR)
                    }
                }
            })
            if(arrayButtonsR.length != 0){
                showNotReplyR(arrayButtonsR[0], 0)
            } else {
               //console.log("EVERY COMMENT TOTALY DESPLAGET")
                
                deleteNotifications()
               //console.log("hola?")
                
                asignAll()
                //resizeAll()
                profileDiv.css("display" , "none")
            //console.log(arrayButtonsR.length)
        }
    };
}

function deleteNotifications(){
    $.post("php/AJAXHome/deleteCurrentNotifications.php",{},
    function(data, status){
       //console.log(data)
       //console.log(status)
    })
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
