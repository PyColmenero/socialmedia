allB = $("#allTypesButton");

asideSchool = $("#asideSchool");
asideLeisure = $("#asideLeisure");
asideFriends = $("#asideFriends");
asideLove = $("#asideLove");
asideFamily = $("#asideFamily");
asideMoney = $("#asideMoney");
asidePolitics = $("#asidePolitics");
asideMemes = $("#asideMemes");
asideWork = $("#asideWork");
asideNSFW = $("#asideNSFW");

asideOwn = $("#asideOwn");
asideRepli = $("#asideRepli");

typeHere = $("#typeHere")


allB.click(function(){
    localStorage.setItem('filterComments', "");
    allFilterComments = true;
    loadComments("date", "DESC", true, 0)
    typeHere.text("All Comments")
    detectOpen()
    centerText.text(" 0/50 ")
    contentDataBase.html('<div id="loadingGIF" ><img src=css/photos/loading1.gif width=20%/><p>Loading Home Section...</p></div>')
    
    allB.attr("class", "selectBAside")
    $(".typeButton").each(function(e){
        $(this).attr("class", "typeButton noselect nsc")
    })
})

asideSchool.click(function(){
    setButtonAside("School", $(this))
})
asideLeisure.click(function(){
    setButtonAside("Leisure", $(this))
})
asideFriends.click(function(){
    setButtonAside("Friends", $(this))
})
asideLove.click(function(){
    setButtonAside("Love", $(this))
})
asideFamily.click(function(){
    setButtonAside("Family", $(this))
})
asideMoney.click(function(){
    setButtonAside("Money", $(this))
})
asidePolitics.click(function(){
    setButtonAside("Politics", $(this))
})
asideMemes.click(function(){
    setButtonAside("Memes", $(this))
})
asideWork.click(function(){
    setButtonAside("Work", $(this))
})
asideNSFW.click(function(){
    setButtonAside("NSFW", $(this))
})

asideOwn.click(function(){
    setButtonAside("OWN", $(this))
})
asideRepli.click(function(){
    setButtonAside("Replied", $(this))
})

function setButtonAside(typeSTR, currentB){
    localStorage.setItem('filterComments', typeSTR);
    allFilterComments = false;
    loadComments("date", "DESC", false, 0)
    typeHere.text( localStorage.getItem('filterComments') + " Comments")
    contentDataBase.html('<div id="loadingGIF" ><img src=css/photos/loading1.gif width=20%/><p>Loading Home Section...</p></div>')
    centerText.text(" 0/50 ")
    detectOpen()
    
    $(".typeButton").each(function(e){
        
        if($(this).attr("id") == currentB.attr("id")){
            $(this).attr("class", "typeButton noselect selectBAside")
        } else {
            $(this).attr("class", "typeButton noselect nsc")
        }
        allB.attr("class", "nonS")
    })
}





 