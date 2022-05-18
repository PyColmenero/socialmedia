<?php
    session_start();
    // CONECT WITH DB
        $con = mysqli_connect('localhost','u254792697_coopolarway','ColmeHost06.');
            mysqli_select_db($con, 'u254792697_mydaytoday');
        if ($con->connect_error) {
            die("Connection failed: " . $con->connect_error);
        }
         
    // GET ID OF LAST REPLY FOR GET MY reply ID
        $sql = mysqli_query($con, "SELECT * FROM replies ORDER BY id DESC LIMIT 1");
        $print_ID = mysqli_fetch_row($sql);
        $id = ($print_ID[1] + 1);
          
    // GET MY USERNAME AND USER-ID
        if(isset($_SESSION['username'])){
            $username = $_SESSION['username'];
            $sqlA = mysqli_query($con, "select * from usertable where username = '$username'");
            $print_IDa = mysqli_fetch_row($sqlA);
            $userID = $print_IDa[0];
        } else {
            if(isset( $_COOKIE['username'] )){
                $username = $_COOKIE['username'];
                $sqlA = mysqli_query($con, "select * from usertable where username = '$username'");
                $print_IDb = mysqli_fetch_row($sqlA);
                $userID = $print_IDb[0];
            } else {
                die("NOT LOGGED");
            }
        }
    // GET POSTs VAR
        $ownerOfComment = $_POST["ownerCommentID"];
        
        $idComment = $_POST["currentCommentID"];
    
        $reply = $_POST['currentReply'];
        
        
    // APPEND TO USER-Replied COLUMN
        $sqlg = mysqli_query($con, "select * from usertable where username = '$username'");
        $print_IDe = mysqli_fetch_row($sqlg);
        $userRepliedColumn = $print_IDe[7]."-".$id;
        $repliedStr = $print_IDa[7];
        
        $boolBarra = true;
        $currentVal = "";
        $index = 0;
        $noDouble = true;
        
        if($repliedStr != "0"){
            
            for( $r = 0; $r < strlen($repliedStr); $r++ ){
                if($repliedStr[$r] == "-"){
                    $boolBarra = false;
                }
                if($boolBarra){
                    $currentVal .= $repliedStr[$r];
                } else {
                    $boolBarra = true;
                    if($currentVal == $idComment){
                        $noDouble = false;
                    }
                    //echo"-".$currentVal."-";
                    $currentVal = "";
                    $index++;
                }
            }
            //echo"---".$idComment."---";
            $userRepliedColumn = $repliedStr."".$idComment."-";
        } else {
            $userRepliedColumn = $idComment."-";
        }
        //echo"---".$noDouble."---/";
        //echo"---".$ownerOfComment."---/";
        //echo"---".$userID."---/";
        if($noDouble){
            if($ownerOfComment != $userID){
                //echo"¿vale?";
                $sqlb = "UPDATE usertable SET replied='$userRepliedColumn' WHERE idUser=$userID";
                if ($con->query($sqlb) === TRUE) {
                    //echo ". Replied UPDATED Succesfully .";
                } else {
                    echo  ". Error Replied Column: " . $con->error."///";
                }
            }
        }
    

    // IF REPLY IS NOT EMPTY
    if(strlen($reply) >= 2){
        
        // INSERT INTO REPLIES TABLE
            $reg = "insert into replies(date, id, userID, reply, whichIN, hasReply) values(NOW(), '$id', '$userID' , '$reply' , '$idComment', 0)";
            mysqli_query($con, $reg);
            
            if ($con->query($reg) === TRUE) {
                //INSERTED IN REPLY TABLE SUCCESFULLY
            } else {
                echo $con->error;
            }
        
        // APPEND TO COMMENT REPLY COLUMN 
            $sqlA = mysqli_query($con, "SELECT * FROM comments WHERE id = '$idComment'");
            $print_IDc = mysqli_fetch_row($sqlA);
            $replysComment = $print_IDc[6];
            $currentCommentUserID = $print_IDc[2];
            
            $replysComment = (1 + $replysComment);
            
            $sql = "UPDATE comments SET hasReply='$replysComment' WHERE id=$idComment";
            if ($con->query($sql) === TRUE) {
                //echo ". COMMENT HasReply Column UPDATED Succesfully .";
            } else {
                echo  ". Error COMMENT HasReply Column: " . $con->error;
            }
        
        // APPEND NOTIFICAITON TO COMMENT USER
        $currentNot = 0;
        if($userID != $currentCommentUserID){
            //echo ". -USER ".$userID." - .";
            //echo ". -CommentUSER ".$currentCommentUserID." - .";
            $sqld = mysqli_query($con, "select * FROM usertable WHERE idUser = '$currentCommentUserID'");
            $print_IDEB = mysqli_fetch_row($sqld);
            $currentNot = $print_IDEB[4];
            $currentNot = ($currentNot + 1);
                
            $currentNoti = "";
            $currentNoti = "(".$idComment."-".$id.")";
            $sqlC = mysqli_query($con, "SELECT * FROM usertable WHERE idUser = '$currentCommentUserID'");
            $print_IDd = mysqli_fetch_row($sqlC);
            if($print_IDd[5] != "0"){
                $currentNoti = $print_IDd[5];
                $currentNoti .= "(".$idComment."-".$id.")";
            } 
            
            
                
                //APPEND AMMOUNT NOTI
                $sqle = "UPDATE usertable SET notification = '$currentNot' WHERE idUser = $currentCommentUserID";
                if ($con->query($sqle) === TRUE) {
                    //echo "Replied Reply ID Updated";
                } else {
                    echo  ". Error Replied Reply ID: " . $con->error. " .";
                }
                //APPEND WHICH NOTI
                $sqlf = "UPDATE usertable SET whichNoti = '$currentNoti' WHERE idUser = $currentCommentUserID";
                if ($con->query($sqlf) === TRUE) {
                    //echo " NOTI USER";
                } else {
                    echo  ". Error NOTI USER: " . $con->error. " .";
                }
            
        } else {
            //echo ". Replied Reply ID EQUAL .";
        }
        //APPEND
        
        
        /*$sqlg = mysqli_query($con, "select * FROM comments WHERE id = '$idComment'");
        $print_IDEB = mysqli_fetch_row($sqlg);
        $currentNotComm = $print_IDEB[7];
        $csCurrentNotCom = $currentNotComm;
        $thereIsCoincience = false;
        if($currentNotComm != "x"){
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
                $currentNotComm = $currentNotComm ."-". $currentOwnerID."-";
            } else {
                $currentNotComm = $csCurrentNotCom;
            }
            
        } else {
            $currentNotComm = $currentOwnerID."-";
        }
        
        echo "a: " . $idComment;
        echo " ,b: " . $currentNotComm;
        echo " ,c: " . $currentOwnerID;
        echo " ,d: " . $userID;

        
        $currentNot = 0;
        
        $sqle = mysqli_query($con, "select * FROM usertable WHERE idUser = '$currentOwnerID'");
        $print_IDEA = mysqli_fetch_row($sqle);
        $currentNot = $print_IDEA[4];
        $currentNot = ($currentNot + 1);
        
        if($currentOwnerID != $userID){
            $sqlf = "UPDATE comments SET notification = '$currentNotComm' WHERE id = '$idComment'";
            if ($con->query($sqlf) === TRUE) {
                echo "Record updated successfully";
            } else {
                echo  "Error updating record: " . $con->error;
            }
        
            $sqlb = "UPDATE usertable SET notification = '$currentNot' WHERE idUser = $currentOwnerID";
            if ($con->query($sqlb) === TRUE) {
                echo "Record updated successfully";
            } else {
                echo  "Error updating record: " . $con->error;
            }
        } else {
            echo ". REPLY COMMENT TO SELF";
        }*/
        
        
        $con->close();
    }
    
    
    
?>