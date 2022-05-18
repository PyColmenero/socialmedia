// ----- SHOW MSG ON FOCUS INPUT ----- //
    var allOk = 0;
    var boolFreeName = false;
    var boolLongName = false;
    var boolCorrectName = false;
    var boolMailTaken = false;
    var boolEqualPass = false;
    var boolLongPass = false;
    var boolCorrectPass = false;
    var boolPolitics = false;
    
    getErrors()
    function getErrors(){
        allOk = 0
        
        if(boolFreeName) { allOk++; }
        if(boolLongName) { allOk++; }
        if(boolCorrectName) { allOk++; }
        if(boolMailTaken) { allOk++; }
        if(boolEqualPass) { allOk++; }
        if(boolLongPass) { allOk++; }
        if(boolCorrectPass) { allOk++; }
        if(boolPolitics) { allOk++; }
        
        /*//console.log(allOk)
       //console.log(boolFreeName)
       //console.log(boolLongName)
       //console.log(boolCorrectName)
       //console.log(boolMailTaken)
       //console.log(boolEqualPass)
       //console.log(boolLongPass)
       //console.log(boolCorrectPass)*/
        
        if(allOk == 8){
            $("#buttonReg").prop("disabled", false);
           //console.log("hola1")
        } else {
            $("#buttonReg").prop("disabled", true);
           //console.log("hola2")
        }
        //console.log(allOk)
    }
    
    
    politicsCB = $("#politicsCB")
    politicsCB.click(function(){
        if(politicsCB.prop("checked")){
            $("#politicsP").css("color","grey")
            boolPolitics = true
        } else {
            $("#politicsP").css("color","red")
            boolPolitics = false
        }
        getErrors()
    })
    // ----- Login Username ----- //
    var bool1 = 0
    logUsername = $("#regInput1");
    logUsername.on("keydown", function(e){
        bool1 = 0;
        //console.log("--")
        var ajax = $.ajax({
            data: {},
            url: "php/ajaxUsername.php",
            type: "POST",
            success: function(responde){
                //console.log(responde)
                
                var usuarios = JSON.parse(responde)
                cargar_usuarios(usuarios);
            },
            error: function(response, status, error){
                //alert("Not Found");
            }
        })
    })
    cargar_usuarios = function(usuarios){
        //console.log("-w-")
        for(var i = 0; i < usuarios.length; i++){
            if( usuarios[i]["username"] == logUsername.val()){
                //console.log(usuarios[i]["username"])
                bool1++;
            }
        }
        if(bool1 == 0){ //IF ITS FREE
            userFreedom = $("#userFreedom")
            userFreedom.text("Free Username");
            boolFreeName = true;
            
            if(logUsername.val().length >= 8){ //IF LONGER THAN 8
                if(logUsername.val().length > 49){
                    userFreedom.text("Too Large( "+logUsername.val().length+" of max 50)");
                    boolLongName = false
                    logUsername.css("border" , "2px solid red")
                } else {
                    valUserL = logUsername.val()
                    var spaces = 0
                    for(i in valUserL){
                        if(valUserL[i] == " "){
                            spaces++;
                        }
                    }
                    if(spaces == 0){
                        userFreedom.text("");
                        boolLongName = true
                        logUsername.css("border" , "2px solid green")
                        boolCorrectName = true;
                    } else {
                        boolCorrectName = false;
                        logUsername.css("border" , "2px solid red")
                        userFreedom.text("Spaces are not allowed");
                    }
                    
                }
                
            } else {
                userFreedom.text("Too Short( "+logUsername.val().length+" of min 8)")
                boolLongName = false
                logUsername.css("border" , "2px solid red")
            }
            
        } else {
            $("#userFreedom").text("Taken Username")
            boolFreeName = false;
            logUsername.css("border" , "2px solid red")
        } 
        
    };
    logUsername.blur(function() {
        //$("#userFreedom")
    }); 
    
    // ----- Register Mail ----- //
    mailInput = $("#mailInput");
    msgMail = $("#msgMail");
    
    
    mailInput.focus(function() { 
        msgMail.css("font-size", "13px"); 
        msgMail.css("display", "block"); 
    }); 
    mailInput.blur(function() {
        msgMail.css("display", "none"); 
    }); 
    
    mailInput.on("keydown", function(e){
        bool1 = 0;
        var ajax = $.ajax({
            data: {},
            url: "php/ajaxEmail.php",
            type: "POST",
            success: function(responde){
                //console.log(responde)
                var usuarios = JSON.parse(responde)
                cargar_mail(usuarios);
            },
            error: function(response, status, error){
                //alert("Not Found");
            }
        })
    })
    var bool1 = 0
    
    cargar_mail = function(usuarios){
        for(var i = 0; i < usuarios.length; i++){
            if( usuarios[i]["username"] == mailInput.val()){
                //console.log(usuarios[i]["username"])
                bool1++;
            }
        }
        if(bool1 != 0){
            $("#emailFreedom").text("Mail Taken");
            boolMailTaken = false;
            mailInput.css("border" , "2px solid red")
        } else {
            $("#emailFreedom").text("")
            boolMailTaken = true
            mailInput.css("border" , "2px solid green")
        }
    };
    // ----- PASSWORDS CHECK LONG ----- //
    regInput3 = $("#regInput3");
    regInput4 = $("#regInput4");
    passLong1 = $("#passLong1");
    passLong2 = $("#passLong2");
    
    /*regInput4.on("onkeyup", function(e){
        analizePasswords();regInput1
    });*/
    let regInput1
    document.getElementById("regInput4").onkeyup = function(){
        analizePasswords()
    }

    document.getElementById("regInput3").onkeyup = function(){
        analizePasswords()
    }
    function analizePasswords(){
        valRegPW1 = regInput3.val()
        valRegPW2 = regInput4.val()
        if(valRegPW1 != valRegPW2){
            boolEqualPass = false
            passLong2.text( "Passwords Not Equeals" )
            regInput4.css("border" , "2px solid red")
        } else {
            boolEqualPass = true
            passLong2.text( "" )
            regInput4.css("border" , "2px solid green")
        }
        
        if(valRegPW1.length < 8){
            boolLongPass = false
            passLong1.text( "Password Too Shot" )
           //console.log("sfjie")
            regInput3.css("border" , "2px solid red")
        } else {
            if(valRegPW1.length > 49){
                boolLongPass = false
            } else {
                boolLongPass = true

                let numberPW = false;
                let upcasePW = false;
                let downcasePW = false;
                let spacesPass = true;
                
                var strings = valRegPW1;
                var i = 0;
                var character='';
                while (i < strings.length){
                    character = strings.charAt(i);
                    //console.log(character)
                    
                    if(character == " "){
                        spacesPass = false
                        //console.log("ivneigfeg")
                    } else {
                        if (!isNaN(character * 1)){
                            numberPW = true;
                        }else{
                            
                                if (character == character.toUpperCase()) {
                                    upcasePW = true
                                }
                                if (character == character.toLowerCase()){
                                    downcasePW = true
                                }
                            }
                            
                        }
                    i++;
                }
                
                error1 = "";
                if(numberPW == false){
                    error1 += "PassWord Need Numbers </br>";
                }
                if(upcasePW == false){
                    error1 += "PassWord Need Uppercase Letters </br>";
                }
                if(downcasePW == false){
                    error1 += "PassWord Need Downrcase Letters </br>";
                }
                if(spacesPass == false){
                    error1 = "Spaces are Not Allowed";
                }
                if(numberPW && upcasePW && downcasePW && spacesPass){
                    //console.log("ok")
                    boolCorrectPass = true
                    regInput3.css("border" , "2px solid green")
                } else {
                    //console.log("nok")
                    boolCorrectPass = false
                    regInput3.css("border" , "2px solid red")
                }
                passLong1.html( error1 )
                //console.log(passLong1)
            }
        }
    }

// ----- PASSWORDS CHECKBOX ----- //
boxPass = $("#showPass")
boxPass.click(function(){
   //console.log(boxPass)
    if(boxPass.prop("checked")){
        document.getElementById("loginInput2a").type = "text";
        
    } else {
        document.getElementById("loginInput2a").type = "password";
    }
})

$("#loginInput2").blur(function() {
    document.getElementById("loginInput2").type = "password";
    document.getElementById("showPass").checked = false;
}); 

// REGISTER

boxPassA = $("#showPass1")
boxPassA.click(function(){
    if($(this).prop("checked")){
        document.getElementById("regInput3").type = "text";
        
    } else {
        document.getElementById("regInput3").type = "password";
    }
})

$("#regInput3").blur(function() {
    document.getElementById("regInput3").type = "password";
    document.getElementById("showPass1").checked = false;
}); 


// REGISTER
boxPassC = $("#showPass2")
boxPassC.click(function(){
    if($(this).prop("checked")){
        document.getElementById("regInput4").type = "text";
        
    } else {
        document.getElementById("regInput4").type = "password";
    }
})

$("#regInput4").blur(function() {
    document.getElementById("regInput4").type = "password";
    document.getElementById("showPass2").checked = false;
}); 


if(document.getElementById("logUsername") != null){
    document.getElementById("logUsername").addEventListener("keyup", function(){
        getErrors()
    });
}
if(document.getElementById("mailInput") != null){
    document.getElementById("mailInput").addEventListener("keyup", function(){
        getErrors()
    });
}
if(document.getElementById("regInput3") != null){
    document.getElementById("regInput3").addEventListener("keyup", function(){
        getErrors()
    });
}
if(document.getElementById("regInput4") != null){
    document.getElementById("regInput4").addEventListener("keyup", function(){
        getErrors()
    });
}





