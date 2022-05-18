<?php

    session_start();
    header("location:../profile.php");
    
    unset($_SESSION["username"]);
    setcookie("username", "", time() - 3600);
    
    session_destroy();
    session_start();
    
    $_SESSION["loggedSS"] = "true";
    
    
    session_regenerate_id(true);

?>