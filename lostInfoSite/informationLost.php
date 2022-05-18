<?php 
    session_start();
    $_SESSION["loggedStatus"] = "true";
    //echo"<p style='color:white'>";
    //setcookie("username", "sessU");
    
    if(isset($_SESSION["loggedSS"])){
        if($_SESSION["loggedSS"] != "true"){
            detectOnLog();
        } else {
            destoyAll();
        }
    } else {
        detectOnLog();
    }
    
    
    function detectOnLog(){
        if(isset($_SESSION["username"])){       // SESSION EXISTE
            $sessU = $_SESSION["username"];
            if(!isset($_COOKIE["username"])){
                setcookie("username", $sessU, (time() + (60*60*24*365)) );
                //echo $_SESSION["username"]." (1)";
            } else {
                //echo $_COOKIE["username"]." (2)";
            }
            
        } else {                                // SESSION NO EXISTE
            if(isset($_COOKIE["username"])){        // COOKIE EXISTE
                $_SESSION["username"] = $_COOKIE["username"];
                //echo $_COOKIE["username"]." (3)";
            } else {
                //echo"not logged";
                $_SESSION["loggedStatus"] = "false";
            }
        }
    }
    
    function destoyAll(){
        setcookie("username", "", time() - 3600);
        echo"not logged A ";
        if(isset($_SESSION["username"])){
            unset($_SESSION["username"]);
        }
        if(isset($_SESSION["loggedSS"])){
            unset($_SESSION["loggedSS"]);
        }
        $_SESSION["loggedStatus"] = "false";
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>WeHearYou</title>

        <link rel="stylesheet" href="styleLostInfo.css">

        <!--Jquery-->
        <script src="../jquery-3.4.1.min.js"></script>
        
        <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan+2&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
        
        <style>
            #writeDiv{
                margin-top:10%;
            }
        </style>
    </head>
    <body>
        <nav id="navBarMain">
            <div id="divNB1">
            </div>
            <div id="divNB2">
                <p id="brandP">My Day ToDay</p>
            </div>
            <div id="divNB3">
                <div class="buttonDiv" id="homeButton">
                    <div class="textButtonNB">
                        <a href="/index.php"><p>HOME</p></a>
                    </div>
                </div>
                <div class="buttonDiv" id="writeButton">
                    <div class="textButtonNB">
                        <a href="/write.php"><p>WRITE</p></a>
                    </div>
                </div>
                <div class="buttonDiv" id="profileButton">
                    <div class="textButtonNB">
                    <a href="/profile.php"> <p>PROFILE</p> </a>
                    </div>
                </div>
            </div>
            
        </nav>
        <p id="pvs" style="visibility: hidden;">  - </p>
            <section id="content">
                <div id="writeSec">
                    <div id="writeDiv">
                            <h3>RECOVER PROFILE INFORMATION</h3><br />                 
                            <form method="post" id="myform" action="sendMail.php">   
                                <div id="divUpWrite">
                                    <p class="pInWrite">I know my: </p>
                                    <input type="radio" value="one" id="example_radio1" name="radioA" /> <label for="example_radio1">UserName  </label>
                                    <input type="radio" value="two" id="example_radio2" name="radioA" /> <label for="example_radio2">Password  </label>
                                </div>
                                <div id="divMWrite">
                                    <div id="ppWrite">
                                        <p class="pInWrite">Choose An Option ⤴</p>  
                                    </div>
                                    <input type="text" name="userInfo" class="form-control" required/><br /> 
                                    <div id="mailInput"></div>
                                </div>
                                <div id="divButtonWrite">
                                    <input id="buttonWri" type="submit" disabled name="submit1" value="Send Email" class="btn btn-info" /><br/>
                                </div>
                                <?php 
                                    if(isset($_SESSION['msgMail'])){
                                        echo $_SESSION['msgMail'];
                                        $_SESSION['msgMail'] = "";
                                    }
                                ?>
                            </form> 
                        </div>
                </div>
            </section>
        </div>

        <script src="windowsSizeLost.js"></script>
        
    </body>
</html>