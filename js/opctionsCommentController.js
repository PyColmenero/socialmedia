orderHere = $("#orderHere");

//contentDataBase = $("#contentDataBase");
orderHere.click(function(){
    contentDataBase.html('<div id="loadingGIF" ><img src=css/photos/loading1.gif width=20%/><p>Loading Home Section...</p></div>')
    if($(this).attr("data-orien") == "up"){
        centerText.text(" 0/50 ")
        $(this).attr("data-orien" , "down")
        $(this).text("Date ↧")
        localStorage.setItem('directionsComments', "ASC")
        
        if(localStorage.getItem('filterComments') === ""){
            loadComments("date", "ASC", true, 0)
        } else {
            loadComments("date", "ASC", false, 0)
        }
        
    } else {
        centerText.text(" 0/50 ")
        $(this).text("Date ↥")
        $(this).attr("data-orien" , "up")
        localStorage.setItem('directionsComments', "DESC")
        
        if(localStorage.getItem('filterComments') === ""){
            loadComments("date", "DESC", true, 0)
        } else {
            loadComments("date", "DESC", false, 0)
        }
        
    }
})

centerText =  $("#numberHere")
leftArrowNO = $("#leftArrowNO");
rightArrowNO = $("#rightArrowNO");

leftArrowNO.click(function(){
    
    if(centerText.text() != " 0/50 "){
        contentDataBase.html('<div id="loadingGIF" ><img src=css/photos/loading1.gif width=20%/><p>Loading Home Section...</p></div>')
        
        firstR = parseInt(centerText.text())
        
        if(localStorage.getItem('filterComments') === "" || localStorage.getItem('filterComments') === null){
            loadComments("date", localStorage.getItem('directionsComments'), true, (firstR-50));
        } else {
            loadComments("date", localStorage.getItem('directionsComments'), false, (firstR-50));
        }
        
        centerText.text( " " + (firstR-50) + "/" + (firstR) + " ")
    }
})

rightArrowNO.click(function(){
    contentDataBase.html('<div id="loadingGIF" ><img src=css/photos/loading1.gif width=20%/><p>Loading Home Section...</p></div>')
    centerText =  $(this).parent().children().eq(1)
    firstR = parseInt(centerText.text())
    
    if(localStorage.getItem('filterComments') === "" || localStorage.getItem('filterComments') === null){
        loadComments("date", localStorage.getItem('directionsComments'), true, (firstR+50));
       //console.log("valeok")
    } else {
        loadComments("date", localStorage.getItem('directionsComments'), false, (firstR+50));
    }
    
    centerText.text( " " + (firstR+50) + "/" + (firstR+100) + " ")
})