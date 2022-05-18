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
                getUserID();
            } else {
                //echo $_COOKIE["username"]." (2)";
                getUserID();
            }
            
        } else {                                // SESSION NO EXISTE
            if(isset($_COOKIE["username"])){        // COOKIE EXISTE
                $_SESSION["username"] = $_COOKIE["username"];
                getUserID();
                //echo $_COOKIE["username"]." (3)";
            } else {
                //echo"not logged";
                $_SESSION["loggedStatus"] = "false";
            }
        }
    }
    
    function getUserID(){
        $con = mysqli_connect('localhost','u254792697_coopolarway','ColmeHost06.');
        mysqli_select_db($con, 'u254792697_mydaytoday');
        
        $username = $_SESSION['username'];
        $sqlA = mysqli_query($con, "select * from usertable where username = '$username'");
        $print_IDE = mysqli_fetch_row($sqlA);
        $userID = $print_IDE[0];
        $_SESSION["loggedID"] = $userID;
        
        $sqlA = mysqli_query($con, "SELECT * FROM usertable WHERE username = '$username'");
        $print_IDE = mysqli_fetch_row($sqlA);
        $repliedArray = $print_IDE[7];
        $_SESSION["repliedArray"] = $repliedArray;
        
        $con->close();
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

        <title>WeReadYou</title>

        <!-- STYLEs -->
        <link rel="stylesheet" href="css/generalCSS.css?vs=1.1">
        <link rel="stylesheet" href="css/navbarCSS.css?vs=1.1">
        <link rel="stylesheet" href="css/asideCSS.css?vs=1.1">

        <link rel="stylesheet" href="css/commentsCSS.css?vs=1.1">

        <!--Jquery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        
        <!-- FONTS -->
        <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan+2&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
            
    </head>
    <body>
        <div id="blackInAside"></div>
        <div id="lgg3X002" data-bfx00="<?php if(isset($_SESSION["loggedStatus"])){echo $_SESSION["loggedStatus"];} ?>"></div>
        <div id="0x38" data-pWW="<?php if(isset($_SESSION["loggedID"])){echo $_SESSION["loggedID"];} ?>"></div>
        <div id="errorLoadRR"><?php if(isset($_SESSION["errorRR"])){/*echo $_SESSION["errorRR"];*/} ?></div>
        <div id="fD23l00" data-arrReply="<?php if(isset($_SESSION["repliedArray"])){echo $_SESSION["repliedArray"];}else{echo"null";} ?>"></div>
        
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
                        <p class=" noselect" id="homeBNav">HOME</p>
                    </div>
                </div>
                <div class="buttonDiv" id="writeButton">
                    <div class="textButtonNB">
                        <a href="./write.php"> <p class="noselect" id="writeBNav">WRITE</p> </a>
                    </div>
                </div>
                <div class="buttonDiv" id="profileButton">
                    <div class="textButtonNB">
                        <a href="./profile.php" style="text-decoration: none"> 
                            <p id="profileB" style="display: inline-block; text-decoration: underline;" class="noselect">PROFILE</p> 
                            <p id="nonotification" style="display: inline-block"></p>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        <p id="pvs" style="visibility: hidden;">  - </p>
        <div id="asideContent">

            <div id="asideLeft" style="display: none">
                <div id="myAccountDiv">
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
                                            echo " ".$_SESSION['username'];
                                            if(isset($_SESSION["loggedID"]))
                                            {
                                                echo " #".$_SESSION["loggedID"];
                                            }
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
                        <div id="containerTypes">
                            <div id="typesText"> <p id="subjectP">SUBJECT</p></div>
                            <div id="typesDiv">
                                <ul id="unSortedL">
                                    <li id="allTypesButton" class="noselect"> <p> All     </p> </li>
                                    <li class="typeButton noselect" id="asideSchool"> <p>    School      </p> </li>
                                    <li class="typeButton noselect" id="asideLeisure"> <p>    Leisure      </p> </li>
                                    <li class="typeButton noselect" id="asideFriends"> <p>   Friends     </p> </li>
                                    <li class="typeButton noselect" id="asideLove"> <p>      Love        </p> </li>
                                    <li class="typeButton noselect" id="asideFamily"> <p>    Family      </p> </li>
                                    <li class="typeButton noselect" id="asideMoney"> <p>     Money       </p> </li>
                                    <li class="typeButton noselect" id="asidePolitics"> <p>  Politics    </p> </li>
                                    <li class="typeButton noselect" id="asideMemes"> <p>     Memes       </p> </li>
                                    <li class="typeButton noselect" id="asideWork"> <p>      Work        </p> </li>
                                    <li class="typeButton noselect" id="asideNSFW"> <p>      NSFW        </p> </li>
                                    <br>
                                    <li class="typeButton noselect" id="asideOwn"> <p>      OWN        </p> </li>   
                                    <li class="typeButton noselect" id="asideRepli"> <p>      Replied        </p> </li>   
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    
            <section id="content">

                <div id="homeSec">
                    <div id="strechHome">
                        <div id="sectionYouAre">
                            <div id="optionsComment">
                                <div id="orderOptionsC">
                                    <p id="orderHere" data-orien="up"> Date ↥ </p>
                                </div>
                                <div id="typesOptionsC">
                                    <p id="typeHere"> All </p>
                                </div>
                                <div id="nextOptionsC">
                                    <label id="leftArrowNO"> &#60 </label><label id="numberHere"> 0/50 </label><label id="rightArrowNO"> &#62 </label>
                                </div>
                            </div>
                            <div id="notLoggedInfo">
                                
                            </div>
                            <?php 
                                if(isset($_SESSION["echoSess"])){
                                    echo $_SESSION["echoSess"];
                                   // $_SESSION["echoSess"] = "";
                                } 
                                if(isset($_SESSION["errorReply"])){
                                    //echo $_SESSION["errorReply"];
                                    $_SESSION["errorReply"] = "";
                                } 
                            ?>
                            <p id="errorReplyAXXs"></p>
                            <div id="inOrderDiv">
                                <p id="errorLoadComments"></p>
                                <?php
                                    if(isset($_SESSION["loadComentError"]))
                                    {
                                        //echo $_SESSION["loadComentError"];
                                        $_SESSION["loadComentError"] = "";
                                    } else {
                                        //echo"Good1";
                                    }
                                    
                                ?>
                            </div>
                        </div>
                        <div id="test" style= "display:block; width:90%; margin:auto;">
                            <div><!--<div class="commentDB" style="margin: 5% 0px;"><div class="information" data-hmc="3" data-iduser="3" data-idcomment="2"><div class="tittle" style="font-size: 33.66px;">Ale,edita este texto porfa</div><div class="typeSec" style="font-size: 22.44px; text-decoration: underline;">Leisure</div></div><div class="juiceText"><p class="textSec" style="font-size: 22.44px;">Ale edita este texto porfa</p></div> <div class="loadReplysHere" style="margin-left:5%"> </div> <div class="replysButtons">     <div style="display:none" id="writeGHere"><div class="replyDiv"><div class="contentReply"><div class="divWriteClose"><p class="pWriteR">Write Your Reply: </p><p class="closeButton"><img src="css/photos/closed.png" width="100%"></p></div><textarea style="height:100px;"></textarea><div><p style="font-size:10px; color:grey;">LineBreaks and Double Quotes will not be saved.</p></div><div class="sendReplyDiv noselect"><p class="sendReplyP" data-idcomment="hola" style="padding: 0.5% 1.5%; font-size: 18.7px;">Send Reply</p></div></div></div></div>
                                <div class="buttonsAndInfo">
                                    <div class="idShowDiv">
                                        <div><p class="pIDOwner">#57856</p></div>
                                    </div>
                                    <div class="contactAnom">
                                        <p id="showRR" style="display: block; font-size: 20.944px;" class="textShowReply noselect">Show 3 Rs</p>
                                        <p class="textReply noselect" style="font-size: 20.944px;">Reply</p></div> 
                                    </div>
                                </div>
                            </div>-->
                            </div>
                            <div>
                            <!--<div data-hmc="3" data-iduser="1" class="loadReplysHere" data-idreply="9">
                                <div class="contentReply" style="background:#272727">
                                    <div class="divReplyClose">
                                        <div class="replyIdDiv">
                                            <div class="divJuiceText"><p class="pReplyL">Yo lo editó ok? </p></div>
                                            <div class="bottomID"><p class="idPReply">#0x0352 </p></div>
                                        </div>
                                        <div class="buttonsReply">
                                            <p class="buttonReplyReply noselect" data-id="1"> Reply </p>
                                            <p style="display:block" class="buttonReplyReply noselect" data-hmc="3" data-id="2" id="showRRR">Show 3 Rs </p>
                                        </div>
                                    </div>
                                <div class="replyOfReplyHere"></div>
                                <div class="replyWriteReply"></div>
                            </div>-->
                            </div>
                        </div>
                        <div id="contentDataBase">
                            
                            <div id="loadingGIF" style="display:none;">
                                <img src=css/photos/loading1.gif width=20%/>
                                <p class="noselect">Loading Home Section...</p>
                            </div>
                            
                        </div>
                    </div>
                    
                </section>
    
            </div>
        </div>
        
        
        <script src="js/aside.js"></script>
        <script src="js/asideButtons.js"></script>
        <script src="js/opctionsCommentController.js"></script>

        <script src="js/Resize/asignAll.js"></script>
        <!-- <script src="js/Resize/homeRiseze.js"></script>
        <script src="js/Resize/defaultResize.js"></script> -->
        
        <script src="js/AJAXHome/getNotification0.js"></script>
        <script src="js/AJAXHome/ajaxLoadComments.js"></script>
        <script src="js/AJAXHome/ajaxLoadReply.js"></script>
        <script src="js/AJAXHome/loadReplyReply.js"></script>
        
        
        <!-- Default Statcounter code for Acolmenero https://acolmenero.xyz/ -->
        <script type="text/javascript">
            var sc_project=12507478; 
            var sc_invisible=1; 
            var sc_security="5f1c3e22"; 
        </script>
        <script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async ></script>
        <noscript>
            <div class="statcounter">
                <a title="Web Analytics" href="https://statcounter.com/" target="_blank"><img class="statcounter" src="https://c.statcounter.com/12507478/0/5f1c3e22/1/" alt="Web Analytics"></a>
            </div>
        </noscript>
        <!-- End of Statcounter Code -->

    </body>
</html>
