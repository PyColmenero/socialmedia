<?php
    
    function get_result_user($query){
        $con = mysqli_connect('localhost','u254792697_coopolarway','ColmeHost06.');
        mysqli_select_db($con, 'u254792697_mydaytoday');
        
        if($con->connect_errno >0){
            echo"Unable to connect Databese";
        }
        //$query = "SELECT * FROM reply ORDER BY date";
        if(!$result = $con->query($query)){
            echo"No reults";
            exit;
        }
        
        //$commentID = $_POST["currentCommentID"];
        //echo $commentID;
        
        $res = array();
        while($row = $result->fetch_assoc()){
            array_push($res, array(
                "id" => $row["id"],
                "userID" => $row["userID"],
                "reply" => $row["reply"],
                "whichIN" => $row["whichIN"],
                "hasReply" => $row["hasReply"]
            ));
        }
        
        $con->close();
        
        return $res;
    }
    
    $usuarios = get_result_user("SELECT * FROM replies ORDER BY id");
    echo json_encode($usuarios);

?>

