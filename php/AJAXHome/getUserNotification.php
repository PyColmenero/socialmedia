<?php
    
    $con = mysqli_connect('localhost','u254792697_coopolarway','ColmeHost06.');
    mysqli_select_db($con, 'u254792697_mydaytoday');
    
    $logged = true;
    // GET MY USERNAME
        if(isset($_SESSION['username'])){
            $username = $_SESSION['username'];
        } else {
            if(isset( $_COOKIE['username'] )){
                $username = $_COOKIE['username'];
            } else {
                die("NOT LOGGED");
                $logged = false;
            }
        }
    
    $id = $_POST["username"];

    if($logged){
        $sql = mysqli_query($con, "select * FROM usertable WHERE idUser = '$id'");
        $print_ID = mysqli_fetch_row($sql);
        $currenNoti = $print_ID[5];
            
        echo $currenNoti;
        //echo $id;
    }
    
        
    $con->close();
        
?>