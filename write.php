<?php 
    session_start();
    //echo"<p style='color:white'>";
    //setcookie("username", "sessU");
    
    if(isset($_SESSION["loggedSS"])){
        
        if($_SESSION["loggedSS"] != "true"){
            detectOnLog();
        } else {
            destoyAll();
        }
        //echo "loggedSS";
    } else {
        detectOnLog();
    }
    
    
    function detectOnLog(){
        if(isset($_SESSION["username"])){       // SESSION EXISTE
            $sessU = $_SESSION["username"];
            if(!isset($_COOKIE["username"])){
                setcookie("username", "$sessU", (time() + (60*60*24*365)) );
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
        
    }
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>WeHearYou</title>
        
        <!-- Styles -->
        <link rel="stylesheet" href="css/generalCSS.css?vs=1.1">
        <link rel="stylesheet" href="css/navbarCSS.css?vs=1.1">
        <link rel="stylesheet" href="css/asideCSS.css?vs=1.1">
        
        <link rel="stylesheet" href="css/writeCSS.css?vs=1.1">


        <!--Jquery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        
        <!-- FONTS -->
        <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan+2&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
        

    </head>
    <body>
        <div id="blackInAside"></div>
        <nav id="navBarMain">
            <div id="divNB1">
                <div id="iconDiv">
                    <img src="css/photos/Hamburger_icon.svg.png" width="10px" id="iconNavb">
                </div>
            </div>
            <div id="divNB2">
                <p id="brandP" class="noselect">My Day ToDay</p>
            </div>
            <div id="divNB3">
                <div class="buttonDiv" id="homeButton">
                    <div class="textButtonNB">
                        <a href="./index.php"><p>HOME</p></a>
                    </div>
                </div>
                <div class="buttonDiv" id="writeButton">
                    <div class="textButtonNB">
                        <p>WRITE</p>
                    </div>
                </div>
                <div class="buttonDiv" id="profileButton">
                    <div class="textButtonNB">
                    <a href="./profile.php"> <p>PROFILE</p> </a>
                    </div>
                </div>
            </div>
            
        </nav>
        <p id="pvs" style="visibility: hidden;">  - </p>
        <div id="asideContent">

            <div id="asideLeft" style="display: none">
                <div id="myAccountDiv" >
                    <div id="miAccount">
                        <div>
                            <div id="photoAside">
                                <svg id="svgUser" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 482.9 482.9" style="enable-background:white 0 0 482.9 482.9;" xml:space="preserve">
                                    <g>
                                        <g>
                                            <path d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5    c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6    c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2z     M164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4    c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0    c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z"/>
                                            <path d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3    c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7    c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41    c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56    c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8    c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3    c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3    C447,415.5,446.9,388.8,446.8,383.6z"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div id="accountInfo">
                                <p id="username"> 
                                    <?php 
                                        if(isset($_SESSION['username'])){
                                            $_COOKIE['username'] = $_SESSION['username'];
                                        }
                                        if(isset($_COOKIE['username'])){
                                            echo $_COOKIE['username'];
                                        } else {
                                            echo "Not Logged";
                                        }
                                    ?> 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="typesAside">
                    <div id="containerTypes1">

                    </div>
                    
                </div>
            </div>
    
            <section id="content">

                <div id="writeSec">
                    <div id="writeDiv">
                            <h4 style="font-weight:200; font-size:15px; "><?php 
                                if(isset($_SESSION["username"])){
                                    echo"<span style='color: white;'>Tell us your Story</span>";
                                } else {
                                    echo"<b style='color:red;'>YOU HAVE TO BE <a href='profile.php' style='text-decoration:underline'>LOGGED IN</a> FOR WRITING</b>";
                                }
                            ?></h4><br />                 
                            <form method="post" id="myform" action="php/comment.php">   
                                <br />  
                                <div id="flexFormWrite">
                                    <div style="width: 100%; ">
                                        <div id="divUpWrite">
                                            <p class="pInWrite">TITTLE</p>  
                                            <input id="inputTittleW" type="text" name="tittle" class="form-control" required/><p style="margin-top:3%;" id="labelInputW"></p><br />
                                        </div>
                                        <div id="divMWrite">
                                            <p class="pInWrite">Suject</p>  
                                            <!--<input type="text" name="subject" class="form-control" required/><br />-->
                                            <select id="selectSub" name="subject">
                                                <option value="School">School</option>
                                                <option value="Leisure">Leisure</option>
                                                <option value="Friends">Friends</option>
                                                <option value="Love">Love</option>
                                                <option value="Family">Family</option>
                                                <option value="Money">Money</option>
                                                <option value="Politics">Politics</option>
                                                <option value="Memes">Memes</option>
                                                <option value="Work">Work</option>
                                                <option value="NSFW">NSFW</option>
                                             </select>
                                        </div>
                                    </div>
                                    <div style="width: 100%">
                                        <div id="divDownWrite">
                                            <label class="pInWrite">History</label><p style="margin-top:3%;" id="labelTAW"></p>
                                            <textarea id="textAreaW" type="text" name="comment" class="form-control" required></textarea><br /> 
                                            <p style="color: white; font-size:10px">Remember that emoticons are not allowed</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="divButtonWrite">
                                    <input id="buttonWri" type="submit" name="submit1" value="<?php 
                                        if(isset($_SESSION["username"])){
                                            echo'Post it!';
                                        } else {
                                            echo 'Not Logged';
                                        }
                                    ?>" class="btn btn-info" /><br />                      
                                </div>
                                <?php 
                                    if(isset($_SESSION['mensajeComment'])){
                                        echo $_SESSION['mensajeComment'];
                                        $_SESSION['mensajeComment'] = "";
                                    }
                                ?>
                            </form> 
                        </div>
                </div>

                
            </section>

        </div>

        
        
        
        <script src="js/aside.js"></script>
        
        <script src="js/writeControler.js"></script>
        <script src="js/Resize/asignAll.js"></script>
        <!--<script src="js/sectionsDB.js"></script>
        <script src="js/navbarbuttons.js"></script>

        <script src="js/Resize/windowsSize0.js"></script>-->

        
    </body>
</html>




