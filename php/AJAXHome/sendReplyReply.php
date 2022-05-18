<?php
    session_start();
    // CONNECT WITH DATABASE
        $con = mysqli_connect('localhost','u254792697_coopolarway','ColmeHost06.');
        mysqli_select_db($con, 'u254792697_mydaytoday');
        if ($con->connect_error) {
            die("Connection failed: " . $con->connect_error);
        }
        $error = false;

    // GET ID FOR REPLY
    $sql = mysqli_query($con, "SELECT * FROM replies ORDER BY id DESC LIMIT 1");
    $print_IDD = mysqli_fetch_row($sql);
    $id = ($print_IDD[1] + 1);
          
    // GET USERNAME AND ID OF WRITTER
    if(isset($_SESSION['username'])){
        $username = $_SESSION['username'];
        $sqlA = mysqli_query($con, "select * from usertable where username = '$username'");
        $print_IDE = mysqli_fetch_row($sqlA);
        $userID = $print_IDE[0];
    } else {
        if(isset($_COOKIE['username'])){
            $username = $_COOKIE['username'];
            $sqlA = mysqli_query($con, "select * from usertable where username = '$username'");
            $print_IDE = mysqli_fetch_row($sqlA);
            $userID = $print_IDE[0];
        } else {
            echo"NO LOGGED";
            $error = true;
        }
    }
    
    // POSTs
    $idReply = $_POST["currentReplyID"];
    $currentOwnerID = $_POST["ownerReplyID"];

    $repliedOwnerID = $_POST["ownerReplyID"];
    $reply = $_POST['currentReply'];
    
    
    
    // IF IM LOGGED
    if($error == false)
    {
        // GET WHICH-IN WITH  REPLIED ID
        $sqlA = mysqli_query($con, "select * from replies where id = '$idReply'");
        $print_IDE = mysqli_fetch_row($sqlA);
        $otherID = $print_IDE[4]; 
        $commID = "";
        
        $bool1 = false;
        $length = strlen($otherID);
        for($i = 0; $i < $length; $i++){
            if( $otherID[$i] == "-"){
                break;
            } else {
                $commID .= $otherID[$i];
            }
            
        }
        
        $whichIn = $commID."-".$idReply;
        $_SESSION["errorRR"] = "<p style='color:white'>".$whichIn . "--<p>";
        
        $sqlc = mysqli_query($con, "select * FROM replies WHERE id = '$idReply'");
        $print_IDU = mysqli_fetch_row($sqlc);
        $commentOwnerID = $print_IDU[4];
        
        $commentOwnerID = intval($commentOwnerID);
        $commentID = $commentOwnerID;
        
        // APPEND TO USER-Replied COLUMN
            $sqlj = mysqli_query($con, "select * from usertable where username = '$username'");
            $print_IDa = mysqli_fetch_row($sqlj);
            $repliedStr = $print_IDa[7];
            
            $boolBarra = true;
            $currentVal = "";
            $index = 0;
            $noDouble = true;
            for( $r = 0; $r < strlen($repliedStr); $r++ ){
                if($repliedStr[$r] == "-"){
                    $boolBarra = false;
                }
                if($boolBarra){
                    $currentVal .= $repliedStr[$r];
                } else {
                    $boolBarra = true;
                    if($currentVal == $commentID){
                        $noDouble = false;
                    }
                    $currentVal = "";
                    $index++;
                }
            }
            if($noDouble){
                $userRepliedColumn = $print_IDa[7]."-".$commentID;
                $sqlb = "UPDATE usertable SET replied='$userRepliedColumn' WHERE id=$userID";
                if ($con->query($sqlb) === TRUE) {
                    echo ". Replied UPDATED Succesfully .";
                } else {
                    echo  ". Error Replied Column: " . $con->error;
                }
            } 
        
        //GET ID OF COMMENT OWNER
        $sqlf = mysqli_query($con, "select * FROM comments WHERE id = '$commentID'");
        $print_IDUA = mysqli_fetch_row($sqlf);
        $commentOwnerID = $print_IDUA[2];
                
        //INSERT INTO REPLYES TABLE
        $reg = "insert into replies(date, id, userID, reply, whichIN, hasReply) values(NOW(), '$id', '$userID' , '$reply' , '$whichIn', 0)";
        mysqli_query($con, $reg);
        
    
        // GET  HAS-REPLY OF REPLIED
            $sqlA = mysqli_query($con, "SELECT * FROM replies WHERE id = '$idReply'");
            $print_IDe = mysqli_fetch_row($sqlA);
            $replysComment = $print_IDe[5];
            $replysComment = (1 + $replysComment);
        
            // SET HAS-REPLY OF REPLIED
                $sql = "UPDATE replies SET hasReply= '$replysComment' WHERE id = $idReply";
                if ($con->query($sql) === TRUE) {
                    echo " Record updated successfully";
                } else {
                    echo "Error updating record: " . $con->error;
                }
        
        // UPDATE USERTABLE NOTI COLUMN OF ¡COMMENT OWNER!
        $currentNot = 0;
        $repliedID = $_POST["ownerReplyID"];
        
        echo ". MiID: " . $userID." - ";
        echo " CoOwnerID: " . $commentOwnerID." - ";
        echo " ReOwnerID: " . $repliedID." - ";
        
        if($userID != $commentOwnerID){
            
            $sqld = mysqli_query($con, "select * FROM usertable WHERE idUser = '$commentOwnerID'");
            $print_IDEB = mysqli_fetch_row($sqld);
            $currentNot = $print_IDEB[4];
            $currentNot = ($currentNot + 1);
            
                //echo " x- equals1 x- ";
                $sqle = "UPDATE usertable SET notification = '$currentNot' WHERE idUser = $commentOwnerID";
                if ($con->query($sqle) === TRUE) {
                    echo ". Comment Succes .";
                } else {
                    echo  "Comment NOT Succes: " . $con->error;
                }
            
            $currentNoti = "(".$commentID."-".$id.")";
            $sqlI = mysqli_query($con, "SELECT * FROM usertable WHERE idUser = '$commentOwnerID'");
            $print_IDg = mysqli_fetch_row($sqlI);
            if($print_IDg[5] != "0"){
                $currentNoti = $print_IDg[5];
                $currentNoti .= "(".$commentID."-".$id.")";
            } 
            
            
            //APPEND WHICH NOTI
                $sqlf = "UPDATE usertable SET whichNoti = '$currentNoti' WHERE idUser = $commentOwnerID";
                if ($con->query($sqlf) === TRUE) {
                    echo " NOTI USER";
                } else {
                    echo  ". Error NOTI USER: " . $con->error. " .";
                }
                
        } else {
            echo ". COMMENT && MI = equals .";
        }
        $currentNot = 0;
        
        
        if($userID != $repliedID){
            $sqld = mysqli_query($con, "select * FROM usertable WHERE idUser = '$repliedID'");
            $print_IDEB = mysqli_fetch_row($sqld);
            $currentNot = $print_IDEB[4];
            $currentNot = ($currentNot + 1);
            //echo " - " . $commentOwnerID . " - ";
            //echo " x- equals1 x- ";
            $sqle = "UPDATE usertable SET notification = '$currentNot' WHERE idUser = $repliedID";
            if ($con->query($sqle) === TRUE) {
                echo "Replied Succes";
            } else {
                echo  ". Replied NOT Succes: " . $con->error. " .";
            }
            
            $currentNoti = "(".$commentID."-".$id.")";
            $sqlH = mysqli_query($con, "SELECT * FROM usertable WHERE idUser = '$repliedID'");
            $print_IDf = mysqli_fetch_row($sqlH);
            if($print_IDf[5] != "0"){
                $currentNoti = $print_IDf[5];
                $currentNoti .= "(".$commentID."-".$id.")";
            } 
            
            
            //APPEND WHICH NOTI
                $sqlf = "UPDATE usertable SET whichNoti = '$currentNoti' WHERE idUser = $repliedID";
                if ($con->query($sqlf) === TRUE) {
                    echo " NOTI USER";
                } else {
                    echo  ". Error NOTI USER: " . $con->error. " .";
                }
        } else {
            echo ". REPLIED && MI = equals .";
        }
        
        
            
        
        /*$sqlg = mysqli_query($con, "select * FROM comments WHERE id = '$commentID'");
        $print_IDEB = mysqli_fetch_row($sqlg);
        $currentNotComm = $print_IDEB[7];
        if($currentNotComm != "x")
        {
            $thereIsCoincience = false;
            $firstID = "";
            $boolBarra = false;
            for($i = 0; $i < strlen($currentNotComm); $i++ ){
                if( $currentNotComm[$i] == "-"){
                    $boolBarra = true;
                }
                if( $boolBarra === false){
                    $firstID .= $currentNotComm[$i];
                } else {
                    $boolBarra = false;
                    if( $firstID == $currentOwnerID ){
                        $thereIsCoincience = true;
                        echo ". COINC: " . $firstID;
                        break;
                    } else {
                        $firstID = "";
                    }
                }
                
            }
            if($thereIsCoincience == false){
                $currentNotComm = $currentNotComm ."". $currentOwnerID."-";
            }
        } else {
            $currentNotComm = $idReply."-";
        }*/
        /*echo ". a: " . $commentID;
        echo " ,b: " . $currentNotComm;
        echo " ,c: " . $idReply;*/
        
        /*if($thereIsCoincience == false){
            echo ". " . $currentOwnerID;
            echo ". " . $userID;
            $sqlf = "UPDATE comments SET notification = '$currentNotComm' WHERE id = '$commentID'";
            if ($con->query($sqlf) === TRUE) {
                echo ". Record updated successfully";
            } else {
                echo  ". Error updating record: " . $con->error;
            }
        } else {
            echo ". REPLY TO SELF";
        }*/
        
        
        $con->close();
    }
    
    
?>