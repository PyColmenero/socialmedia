<?php
    session_start();
    header('location:../profile.php');
    
    $con = mysqli_connect('localhost','u254792697_coopolarway','ColmeHost06.');
        mysqli_select_db($con, 'u254792697_mydaytoday');
    
    $name = $_POST['userV'];
    $pass = $_POST['passwordV'];

    $e = "select * from usertable where username = BINARY '$name'";
    $s = "select * from usertable where BINARY username = '$name' && password = BINARY '$pass'";

    $result = mysqli_query($con, $s);
    $resultU = mysqli_query($con, $e);

    $num = mysqli_num_rows($result);
    $numU = mysqli_num_rows($resultU);


    if($numU > 0)
    {
        if($num > 0)
        {
            setcookie("username" , $name , (time() + 8640000) );
            $_SESSION["username"] = $name;
            $_SESSION['errorR'] = "<p> You'r Welcome <b>$name</b> </p>";
        }
        else
        {
            $_SESSION['errorR'] = "<p>Wrong Password </p>" . $numU;
        }
    } else {
        $_SESSION['errorR'] = "<p>User Name not Found</p>";
    }

    
    
?>