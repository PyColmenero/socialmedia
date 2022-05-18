<?php

    session_start();
    
    
        
    // GET MY USERNAME AND USER-ID
        if(isset($_SESSION['username'])){
            $username = $_SESSION['username'];
            deleteNot($username);
        } else {
            if(isset( $_COOKIE['username'] )){
                $username = $_COOKIE['username'];
                deleteNot($username);
            } else {
                die("NOT LOGGED");
            }
        }
        
    function deleteNot($user){
        
        // CONECT WITH DB
        $con = mysqli_connect('localhost','u254792697_coopolarway','ColmeHost06.');
            mysqli_select_db($con, 'u254792697_mydaytoday');
        if ($con->connect_error) {
            die("Connection failed: " . $con->connect_error);
        }
        
        $sql = "UPDATE usertable SET notification='0' WHERE username='$user'";
        if ($con->query($sql) === TRUE) {
            echo ". Notifications UPDATED Succesfully .";
        } else {
            echo  ". Error UPDATING Notification: " . $con->error;
        }
        
        $sql = "UPDATE usertable SET whichNoti='0' WHERE username='$user'";
        if ($con->query($sql) === TRUE) {
            echo ". Notifications UPDATED Succesfully .";
        } else {
            echo  ". Error UPDATING Notification: " . $con->error;
        }
        
    }
        
?>