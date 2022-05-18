<?php  

    $message = '';  
    $error = '';  

    session_start();
    header('location:../write.php');

    $con = mysqli_connect('localhost','u254792697_coopolarway','ColmeHost06.');
        mysqli_select_db($con, 'u254792697_mydaytoday');

    if(!$con){
        $_SESSION['mensajeComment'] = "<b>Error in DataBase, Try Later...</b>";

    } else {
        if(!isset($_SESSION['username'])) {
            $_SESSION['mensajeComment'] = "<p>You have to be logged for writting</p>";
        } else {

            $sql = mysqli_query($con, "SELECT * FROM comments ORDER BY id DESC LIMIT 1");
            $print_IDD = mysqli_fetch_row($sql);
            $id = ($print_IDD[1] + 1);

            $sqlA = mysqli_query($con, "SELECT * FROM usertable WHERE username = '$username'");
            $print_IDE = mysqli_fetch_row($sqlA);
            $userID = $print_IDE[0];

            $_SESSION['mensajeComment'] = "<p>$userID</p>";

            $tittle =      $_POST["tittle"];
            $subject =     $_POST["subject"];
            $comment =     $_POST["comment"];

            $reg = "insert into comments(date, id, userID, tittle, subject, comment, hasReply) values(NOW(),'$id', '$userID', '$tittle' , '$subject', '$comment', 0)";
            mysqli_query($con, $reg);
            $sucess = " Coment Posted Succesfully, $username";


            if ($con->query($reg) === TRUE) {
                $_SESSION['mensajeComment'] = "<a id='hrefSucces' href='./index.php'>Comment</a> Posted Succesfully";
            } else {
                $_SESSION['mensajeComment'] = "Error updatisng record: " . $con->error;
                echo "Error updating record: " . $con->error;
            }

            $con->close();

        }
    }
?>