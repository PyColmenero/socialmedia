<?php

    //$orderBy = $_POST["orderby"];
    //$direcction = $_POST["direcctionOrder"];
    $orderBy ="date";
    $direcction = "DESC";
    
    function get_result_user($query){
        $con = mysqli_connect('localhost','u254792697_coopolarway','ColmeHost06.');
        mysqli_select_db($con, 'u254792697_mydaytoday');
        
        if($con->connect_errno >0){
            echo "Unable to connect Databese";
        }
        if(!$result = $con->query($query)){
            echo"No reults";
            exit;
        }
        
        $res = array();
        while($row = $result->fetch_assoc()){
            array_push($res, array(
                "date" => $row["date"],
                "idComment" => $row["id"],
                "userID" => $row["userID"],
                "tittle" => $row["tittle"],
                "subject" => $row["subject"],
                "comment" => $row["comment"],
                "hasReply" => $row["hasReply"]
            ));
        }
        
        $orderBy = $_POST["orderby"];
        $direcction = $_POST["direcctionOrder"];
        
        $_SESSION["loadComentError"] = "O: " . $orderBy . " D: " . $direcction;
        $con->close();
        
        return $res;
    }
    
    $orderBy = $_POST["orderby"];
    $direcction = $_POST["direcctionOrder"];
    
    
    $usuarios = get_result_user("SELECT * FROM comments ORDER BY $orderBy $direcction");
    echo json_encode($usuarios);
    
    
?>