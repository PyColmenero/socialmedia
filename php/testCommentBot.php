<?php  

$message = '';  
$error = '';  

session_start();
//header('location:../testBot.php');

$con = mysqli_connect('localhost','id12751531_root','ColmeHost06.');
mysqli_select_db($con, 'id12751531_welistenyou');
    
    $sql = mysqli_query($con, "SELECT * FROM comments ORDER BY id DESC LIMIT 1");
    $print_IDD = mysqli_fetch_row($sql);
    $id = ($print_IDD[1] + 1);
    
    $username = "CommentBot";
    
    $tittle =      "Attact Tittle " . $id;
    
    $randomNumber = rand(0, 7);
    switch ($randomNumber) {
        case 0:
            $subR = "School";
            break;
        case 1:
            $subR = "Friends";
            break;
        case 2:
            $subR = "Love";
            break;
        case 3:
            $subR = "Family";
            break;
        case 4:
            $subR = "Money";
            break;
        case 5:
            $subR = "Politics";
            break;
        case 6:
            $subR = "Memes";
            break;
        case 7:
            $subR = "NSFW";
            break;
    }
    $subject =     $subR;
    $comment =     "Just a Littel Bot Attact by CommentBot " . $id . "                   Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur?";
    
    $reg = "insert into comments(date, id, username, tittle, subject, comment, hasReply) values(NOW(),'$id', '$username', '$tittle' , '$subject', '$comment', 0)";
    mysqli_query($con, $reg);

    if ($con->query($reg) === TRUE) {
        $_SESSION["status"] =  "Record updated successfully" . $id;
    } else {
        $_SESSION['status'] = "Error updating record: " . $con->error;
    }
    
    $con->close();


?>