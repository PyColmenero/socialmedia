<?php
    session_start();
    header('location:../profile.php#buttonReg');
    
    $con = mysqli_connect('localhost','u254792697_coopolarway','ColmeHost06.');
        mysqli_select_db($con, 'u254792697_mydaytoday');

    $email = $_POST['email'];
    $name = $_POST['username'];

    $pass = $_POST['password'];
    $passR = $_POST['passwordR'];
    

    $s = "select * from usertable where username = '$name'";
    $e = "select * from usertable where email = '$email'";

    $result = mysqli_query($con, $s);
    $resultMail = mysqli_query($con, $e);

    $num = mysqli_num_rows($result);
    $mailR = mysqli_num_rows($resultMail);
    
    $sql = mysqli_query($con, "SELECT * FROM usertable ORDER BY idUser DESC LIMIT 1");
    $print_IDD = mysqli_fetch_row($sql);
    $id = ($print_IDD[0] + 1);

    $_SESSION['errorR'] = "";
    if($pass == $passR)
    {
        if($num > 0)
        {
               $_SESSION['errorR'] .= "<p>Username Already Taken</p><br>";
        }
        else
        {
          if($mailR > 0)
          {
               $_SESSION['errorR'] .= "<p>Gmail Already Taken</p><br>";
          }
          else
          {
                $reg = "insert into usertable(idUser, username, password, email, notification, whichNoti, date) values('$id', '$name', '$pass' , '$email', '0', '0', NOW())";
                if (mysqli_query($con, $reg)) {
                    $_SESSION['errorR'] .= "Account Created! ". $name;
                    $_SESSION['username'] = $name;
                } else {
                    $_SESSION['errorR'] .=  "Error occurred: " . mysqli_error($con);
                }
              //mysqli_query($con, $reg);
              //$sucess = " Registration Successful $name";
              
              
          }
        }
    }
    else
    {
        $_SESSION['errorR'] = "<p>Passwords arent equals</p><br>";
    }
?>