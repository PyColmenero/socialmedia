<?php

    

    if(isset($_SESSION["username"])){       // SESSION EXISTE
        $sessU = $_SESSION["username"];
        if(!isset($_COOKIE["username"])){
            setcookie("username", $sessU, (time() + (60*60*24*365)) );
            getUserNot($_SESSION["username"]);
        } else {
            echo $_COOKIE["username"]." (2)";
            getUserNot($_COOKIE["username"]);
        }
    } else {                                // SESSION NO EXISTE
        if(isset($_COOKIE["username"])){        // COOKIE EXISTE
            $_SESSION["username"] = $_COOKIE["username"];
            getUserNot($_COOKIE["username"]);
        } else {
            echo "nl";
        }
    }
    
    function getUserNot($user) {
        $con = mysqli_connect('localhost','u254792697_coopolarway','ColmeHost06.');
        mysqli_select_db($con, 'u254792697_mydaytoday');
    
        $username = $user;
    
        $sqld = mysqli_query($con, "SELECT * FROM usertable WHERE username = '$username'");
        $print_IDEA = mysqli_fetch_row($sqld);
        $currentNot = $print_IDEA[4];
    
        echo $currentNot;
        //echo $username;
        //echo "--".$user;
    }
?>