
$('#buttonWri').click(function(){
    $.ajax({
        url:'php/comment.php',
        method:'post',
        data : $('#myform').serialize(),
        success:function()
        {
           //console.log("higbei")
        } 

    })
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}