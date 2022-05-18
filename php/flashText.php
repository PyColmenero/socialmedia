<?php
    
    $sqlA = mysqli_query($con, "SELECT * FROM comments WHERE id = '$idComment'");
    $print_IDe = mysqli_fetch_row($sqlA);
    $replysComment = $print_IDe[6];
    $replysComment .= $id.'-';
    

    $sql = "UPDATE comments SET replys='$replysComment' WHERE id=$idComment";

    if ($con->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $con->error;
    }
    
    $con->close();
    
?>


