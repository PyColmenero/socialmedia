<?php
    
    function get_result_user($query){
        $con = mysqli_connect('localhost','u254792697_coopolarway','ColmeHost06.');
        mysqli_select_db($con, 'u254792697_mydaytoday');
        
        if($con->connect_errno >0){
            echo"Unable to connect Databese";
        }
        if(!$result = $con->query($query)){
            echo"No reults";
            exit;
        }
        
        $res = array();
        while($row = $result->fetch_assoc()){
            array_push($res, array(
                "username" => $row["email"]
            ));
        }
        
        $con->close();
        
        return $res;
    }
    
    $usuarios = get_result_user("SELECT * FROM usertable;");
    echo json_encode($usuarios);

?>