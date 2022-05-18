<?php
    session_start();
    
    header('location:./informationLost.php');
    
    $con = mysqli_connect('localhost','id12751531_root','ColmeHost06.', 'id12751531_welistenyou');
    
    $passOrName = $_POST['radioA'];
    $pass = $_POST["userInfo"];
    
    $cual = "";
    
    if($passOrName == "one"){
        
        $sql = mysqli_query($con, "SELECT * FROM usertable WHERE `usertable`.`username` = '$pass'");
        $print_IDD = mysqli_fetch_row($sql);
        
        $to = $print_IDD[2];
        $pass = $print_IDD[1];
        $subject = "Recover your password";
        $message = "You'r password is " . $pass . "<br> Thanks for being a <a href='https://welistenyou.000webhostapp.com/'>WeListenYou.ml</a>.";
        
        $cual = "Username";
    } else {
        $mail = $_POST["mailUser"];
        $sql = mysqli_query($con, "SELECT * FROM usertable WHERE `usertable`.`password` = '$pass' && `usertable`.`email` = '$mail'");
        $print_IDD = mysqli_fetch_row($sql);// && password = '$mail'
        
        $to = $print_IDD[2];
        $pass = $print_IDD[0];
        $subject = "Recover your Username";
        $message = "You'r username is " . $pass . "<br> Thanks for being a <a href='https://welistenyou.000webhostapp.com/'>WeListenYou.ml</a>.";
        
        $cual = "Pass";
    }
    
    $headers = "From = The Sender name <coopolarway@gmail.com>\r\n";
    $headers = "Content-type: text/html\r\n";
    
    mail($to, $subject, $message, $headers);
    
    //$hiddenMail =
    $_SESSION["msgMail"] = "</u> Mail Sended to " . $to . "<br> If you dont find it, search in Spam";
    echo $_SESSION["msgMail"];
    
    
?>