<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>JustATest</title>
        
        <!--Jquery-->
        <script src="jquery-3.4.1.min.js"></script>

    </head>
    <body>
        <p id="stopIt"> stopIt  </p> <br>
        <p id="doIt">   doIt    </p> <hr>
        <?php
            if(isset($_SESSION["status"])){
                echo $_SESSION["status"];
            } else {
                echo "none";
            }
        ?>
        <hr>
        <p id="status">       </p> 
        <script src="js/trash/commentBot.js"></script>
    </body>
</html>