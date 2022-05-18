<?php

    session_start();
    $con = mysqli_connect('localhost','id12751531_root','ColmeHost06.', 'id12751531_welistenyou');

    $sql = mysqli_query($con, "SELECT * FROM usertable WHERE `usertable`.`username` = 'cooPolarWay'");
    $print_IDD = mysqli_fetch_row($sql);
    $id = $print_IDD[0];

    echo $id . "<br>" . $print_IDD[2];
?>